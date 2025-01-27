import React, { useEffect, useState }  from "react";
import { NavLink, useLocation } from "react-router";

interface Props {
    text : string,
    to : string
}

const NavbarLink : React.FC<Props> = ({ text, to }) => {
  const location = useLocation()
  const [active, setActive] = useState(false)

  useEffect(() => {
    let target = to
    if (target[0] == "/") {
      target = target.slice(1)
    }
    let linkPath = target.split("/")
    let pathname = location.pathname.slice(1).split("/")
    if (pathname.length <= linkPath.length && to != "/") {
      for (let i = 0; i < linkPath.length; i++) {
        console.log(linkPath[i], pathname[i])
        if (linkPath[i] !== pathname[i]) {
          setActive(false)
          return
        }
      }
      setActive(true)
    }
  }, [location.key])

    return <NavLink
    to={to}
    end
    className={({ isActive }) =>
      isActive || active
        ? 'text-white font-semibold'
        : 'hover:text-white'
    }
  >
    { text }
  </NavLink>
}

export default NavbarLink