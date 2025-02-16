import React from "react";
import InfoBlock from "../../components/InfoBlock.tsx";
import "./Home.css";
import { NavLink } from "react-router";
import MainInfo from "../../components/InfoBlocks/MainInfo.tsx";
import EventWidget from "../../widgets/EventsWidget/EventsWidget.tsx";
import NewsWidget from "../../widgets/NewsWidget/NewsWidget.tsx";
const Home: React.FC = () => {
  const history = `История ГБОУ "Школа № 41 г.о. Горловка" начинается в 1938 году, когда была открыта семилетняя школа № 41, рассчитанная на 100 учеников, в поселке шахты имени Румянцева. Во время немецко-фашистской оккупации в здании школы размещался штаб оккупантов. Один из учеников, Василий Шеин, проявил мужество и поджег штаб врага, олицетворяя стойкость советского народа в борьбе с оккупантами.

После войны здание школы было восстановлено, а с 1948 года директором стал ветеран Великой Отечественной войны Иван Васильевич Шириков. Во время войны он служил во 2-м Белорусском фронте, а с августа 1944 года выполнял обязанности писаря в батальоне, работая в сложных условиях и рискуя жизнью для выполнения военно-учетных задач. Он был награжден медалью «За отвагу». Изучив Книгу приказов школы за 1947-1949 годы, мы отметили, что Шириков был ответственным и дисциплинированным человеком, регулярно посещал уроки, проверял уровень знаний и дисциплину учащихся, а также строго следил за соблюдением внутреннего распорядка среди педагогического и технического персонала. 

В то время приоритетом работы школы было привлечение детей к образовательному процессу и выявление тех, кто пропускал занятия. Директору и коллективу педагогов требовалось решить сложную задачу: в условиях послевоенного восстановления обучить около 1200 учеников, при этом школа была рассчитана лишь на 100 человек. Поэтому возникла насущная необходимость в строительстве нового учебного заведения.`;

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 mb-8 pt-16">
        <div className="home-main-info w-full">
          <div className="home-main-info__inner">
            <div className="inner-text text-xl md:text-3xl text-white font-bold text-center p-8">
              Государственное бюджетное общеобразовательное учреждение «Школа
              №41 с углубленным изучением отдельных предметов городского округа
              Горловка» Донецкой Народной Республики
            </div>

            <NavLink to={"/information"}>
              <button className="gradient-button bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-lg font-bold rounded-full">
                Читать подробнее
              </button>
            </NavLink>
          </div>
        </div>

        <MainInfo />

        <InfoBlock
          header="История школы"
          text={
            <div>
              {history.split("\n").map((text) => {
                return text ? (
                  <p className="my-1" key={text}>
                    {text}
                  </p>
                ) : (
                  ""
                );
              })}
            </div>
          }
          image={{
            position: "right",
            component: (
              <div className="p-4 overflow-hidden">
                <img
                  src="./school2.jpg"
                  alt="school"
                  className="w-full rounded-lg"
                />
              </div>
            ),
          }}
        />

        <EventWidget sliced/>

        <NewsWidget sliced/>
      </div>
    </div>
  );
};

export default Home;
