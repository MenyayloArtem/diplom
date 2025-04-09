import React, { useEffect, useState } from "react";
import EventCard from "../../components/Card/Card.tsx";
import Api from "../../api/Api.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, RootState } from "../../store/index.ts";
import { GridLoader } from "react-spinners";

interface Props {sliced?: boolean;}

const EventsWidget: React.FC<Props> = ({ sliced }) => {
  const events = useSelector((state: RootState) => state.app.events);
  const dispatch = useDispatch();
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!events.length && !error) {
      Api.fetchEvents().then((res) => {
        dispatch(AppActions.setEvents(res));
      })
      .catch((e) => {
        setError(true)
      })
    }
  }, [events, error]);

  return (
    <section className="events my-4">
      <div className="title text-3xl font-bold text-center">Мероприятия</div>
      <div className="mt-8">
        {events.length ? (
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
            {events.slice(0, sliced ? 3 : 100).map((item, i) => (
              <EventCard
                title={item.title} body={item.text}
                img={item.image} key={i}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <GridLoader color="#666"/>
          </div>
        )}
      </div>
    </section>
  );
};
export default EventsWidget;