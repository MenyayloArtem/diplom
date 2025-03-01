import React, { useEffect, useState } from "react";
import Button from "../../components/ui/Button/Button.tsx";
import NewsItem from "../../components/NewsItem/NewsItem.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, RootState } from "../../store/index.ts";
import Api from "../../api/Api.ts";
import { GridLoader } from "react-spinners";

interface Props {
  sliced?: boolean;
}

const NewsWidget: React.FC<Props> = ({ sliced }) => {
  const news = useSelector((state: RootState) => state.app.news);
  const dispatch = useDispatch();
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!news.length && !error) {
      Api.fetchNews().then((news) => dispatch(AppActions.setNews(news as any)))
      .catch((e) => {
        setError(true)
      })
    }
  }, [dispatch, news, error]);

  return (
    <section className="news my-4">
      <div className="text-3xl font-bold text-center">Новости</div>
      <div className="mt-8">
        {news.length ? (
          <div className="grid grid-cols-1 gap-4">
            {news.slice(0, sliced ? 3 : 100).map((item, i) => (
              <NewsItem item={item} key={i} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <GridLoader color="#666" />
          </div>
        )}

        {sliced && <Button text="Смотреть все новости" className="mt-4" />}
      </div>
    </section>
  );
};

export default NewsWidget;
