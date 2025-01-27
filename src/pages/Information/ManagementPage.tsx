import React, { useEffect } from "react";
import MainInfo from "../../components/InfoBlocks/MainInfo.tsx";
import InfoBlock from "../../components/InfoBlock.tsx";
import UserInfoBlock from "../../components/InfoBlocks/KeyValueInfoBlock.tsx";
import Card from "../../components/Card/Card.tsx";
// @ts-ignore
import director from "../../assets/director.jpg"
// @ts-ignore
import z1 from "../../assets/zam1.jpg"
// @ts-ignore
import z2 from "../../assets/zam2.jpg"
// @ts-ignore
import r1 from "../../assets/r1.jpg"
// @ts-ignore
import r2 from "../../assets/r2.jpg"
// @ts-ignore
import r3 from "../../assets/r3.jpg"

const ManagementPage: React.FC = () => {
  useEffect(() => {
    console.log(`${process.env.PUBLIC_URL}`)
  }, [])
  return (
    <div className="ManagementPage">
      <UserInfoBlock
        header="Солодкова Наталия Валентиновна"
        title="Директор школы"
        image={<img alt="director" src={director} />}
        info={[
          {
            key: "Телефон",
            value: "+7(949) 30-867-66",
            href: "tel:+79493086766",
          },
          {
            key: "Электронная почта:",
            value: "scool41@mail.ru",
            href: "mailto:scool41@mail.ru",
          },
          { key: "Часы приёма", value: "8:00 - 16:00" },
        ]}
      />

      <div className="text-2xl my-4 font-bold">Заместитель директора</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <UserInfoBlock
          header="Легостаева Вита Александровна"
          title="Заместитель директора по учебно-воспитательной работе, учитель"
          image={<img alt="director" src={z1}/>}
          info={[
            {
              key: "Телефон",
              value: "+79493167992",
              href: "tel:+79493167992 ",
            },
            {
              key: "Электронная почта:",
              value: "vitalegostaeva70@gmail.com",
              href: "mailto:vitalegostaeva70@gmail.com ",
            },
            { key: "Часы приёма", value: "8:00 - 16:00" },
          ]}
        />

        <UserInfoBlock
          header="Чмутова Лилия Анатольевна"
          title="Заместитель директора по учебно-воспитательной работе"
          image={<img alt="director" src={z2} />}
          info={[
            {
              key: "Телефон",
              value: "+79493168006",
              href: "tel:+79493168006 ",
            },
            {
              key: "Электронная почта:",
              value: "liliya16111962@mail.ru",
              href: "mailto:liliya16111962@mail.ru",
            },
            { key: "Часы приёма", value: "8:00 - 16:00" },
          ]}
        />

        <div className="w-full text-2xl my-4 font-bold">
          Руководители структурных подразделений и филиалов
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card
          img={r1}
          title="Крюкова Анжела Викторовна"
          body="Учитель русского языка и литературы "
        />

        <Card
          img={r2}
          title="Скороходова Анжелика Игоревна"
          body="Учитель английского языка"
        />
        <Card
          img={r3}
          title="Берестовая Эллина Вячеславовна"
          body="Учитель математики"
        />
        {`${process.env.PUBLIC_URL}`}
      </div>
    </div>
  );
};

export default ManagementPage;
