import React from "react";
import navigation from "../../components/Sidebar/navigation.tsx";
import SidebarNavItem from "../../components/Sidebar/SidebarNavItem.tsx";

const Content: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <div className="text-2xl font-bold">Сведения о образовательной организации</div>

      <div className="mt-8">
        {navigation.map((item) => (
          <SidebarNavItem item={item} key={item.name + "_c"} />
        ))}
      </div>
    </div>
  );
};

export default Content;
