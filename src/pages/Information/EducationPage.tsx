import React from "react";
import MainInfo from "../../components/InfoBlocks/MainInfo.tsx";
import InfoBlock from "../../components/InfoBlock.tsx";
import KeyValueInfoBlock from "../../components/InfoBlocks/KeyValueInfoBlock.tsx";

const EducationPage: React.FC = () => {
  return (
    <div>
      <div className="grid grid-rows-1 gap-4 mt-4">
        <KeyValueInfoBlock
          header="Начальное образование"
          title="Образовательная программа начального общего образования (для 1-4 классов)"
          image={<img className="w-full" src="/education1.jpg" alt="education1" />}
          info={[
            {
              key: "Форма обучения:",
              value: "Очная и с применением дистанционных технологий",
            },
            { key: "Нормативный срок обучения:", value: "4 года" },
            { key: "Продолжительность недели:", value: "5 дней" },
          ]}
        />

        <KeyValueInfoBlock
          header="Среднее основное образование"
          title="Образовательная программа основного общего образования (для 5–9 классов)"
          image={<img src="/education2.jpg" alt="education1" />}
          info={[
            {
              key: "Форма обучения:",
              value: "Очная и с применением дистанционных технологий",
            },
            { key: "Нормативный срок обучения:", value: "5 лет" },
            { key: "Продолжительность недели:", value: "5 дней" },
          ]}
        />

        <KeyValueInfoBlock
          header="Среднее основное образование"
          title="Образовательная программа среднего общего образования (для 10–11 классов)"
          image={<img src="/education3.jpg" alt="education1" />}
          info={[
            {
              key: "Форма обучения:",
              value: "Очная и с применением дистанционных технологий",
            },
            { key: "Нормативный срок обучения:", value: "2 года" },
            { key: "Продолжительность недели:", value: "5 дней" },
          ]}
        />
      </div>
    </div>
  );
};

export default EducationPage;
