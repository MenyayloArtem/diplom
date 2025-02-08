import React from "react";
import InfoBlock from "../InfoBlock.tsx";

const MainInfo : React.FC = () => {
    const test = `Краткое название: ГБОУ "Школа № 41 г.о. Горловка".  
    Сорок первая школа славится своими высокими традициями и достигнутыми успехами. С 2022-2023 учебного года успешно реализуется проект профильных психолого-педагогических классов.  
    Режим работы учебного заведения: понедельник – пятница с 8:00 до 16:00. Обучение проходит в одну смену.`;
    return <InfoBlock
    header="Основная информация"
    text={
      <div>
        {test.split("\n").map((text, i) => {
          return <p key={i} className="my-1">{text}</p>;
        })}
      </div>
    }
    image={{
      position: "left",
      component: (
        <div className="overflow-hidden">
          <img src="https://i.postimg.cc/fyszQx00/school-min.jpg" alt="school" className="rounded-lg" />
        </div>
      ),
    }}
  />
}

export default MainInfo