import React from "react";
import InfoBlock from "../../../components/InfoBlock.tsx";

const PedCouncil: React.FC = () => {
  return (
    <div className="">
      <InfoBlock
        header="Педагогический совет"
        text={
          <>
            <p className="my-2">
              <b>Педагогический совет</b> – это постоянно действующий
              коллегиальный орган самоуправления педагогических работников. Его
              проведение организуется для рассмотрения и решения основных
              вопросов учебно-воспитательной работы в школе. Деятельность
              педсовета определяется «Положением о педагогическом совете
              общеобразовательной школы». Во всех общеобразовательных
              учреждениях, где работает более трех учителей, создается
              педагогический совет.
            </p>
            <p className="my-2">
              Также могут быть включены в состав председатель общешкольного
              родительского комитета и представитель учредителя.
            </p>
            <p className="my-2">
              Расширенный состав педсовета формируется с учетом обсуждаемых
              вопросов, поэтому в него могут включаться представители
              сотрудничающих организаций и учреждений, члены общешкольного и
              классного родительских комитетов, преподаватели ВУЗов,
              представители детских общественных организаций, обучающиеся и
              родители. Председатель педагогического совета школы – директор. На
              некоторых заседаниях допускается выбор сменного председателя.
            </p>
            <p className="my-2">
              Цель каждого педагогического совета – произвести сопоставительный
              анализ решаемых задач в соответствии с Образовательной программой
              и Программой развития школы, с современным направлением
              модернизации образования, с переходом образовательных учреждений
              на сетевое взаимодействие и на реализацию профильного обучения.
              Деятельность в этом контексте направлена на выявление проблем,
              которые стоят перед коллективом образовательного учреждения в
              настоящее время, и определение основной задачи по расширению
              информационного поля педагогических работников в сфере
              образовательных технологий и их применения в образовательном
              процессе.
            </p>
            <p className="my-2">
              На педагогическом совете у каждого члена коллектива есть право
              быть услышанным. Здесь происходит совместное решение общих
              проблем, стартуют новые начинания и подводятся результаты уже
              выполненной работы педагогическим коллективом.
            </p>
          </>
        }
      />

      <InfoBlock
        header="Основные задачи и функции"
        text={
          <>
            <ul className="flex flex-col gap-2 list-disc ml-4">
              <li>
                Обсуждение и выбор программ, учебных планов, форм, учебников,
                методов учебно-воспитательного процесса и способов их
                реализации; определение направлений взаимодействий учебного
                заведения с разными организациями;
              </li>
              <li>
                Организация деятельности по повышению квалификации
                педагогических работников, развития их творческой инициативны,
                распространению передового опыта и освоения новых педагогических
                технологий;
              </li>
              <li>
                Рекомендации педагогических и иных работников учебного заведения
                к разным видам поощрения;
              </li>
              <li>
                Согласование деятельности родительского коллектива и учителей,
                работающих в классе;
              </li>
              <li>
                Решение вопросов о создании кружков, клубов, студий и иных
                объединений обучающихся; допуске обучающихся к экзаменам, их
                переводе в следующий класс либо оставлении на повторный курс,
                выдаче свидетельств и аттестатов об образовании; о годовых
                оценках поведения обучающихся, о поощрениях и взысканиях и т.
                п.;
              </li>
              <li>Проведение опытно-экспериментальной работы.</li>
            </ul>
          </>
        }
      />
    </div>
  );
};

export default PedCouncil;
