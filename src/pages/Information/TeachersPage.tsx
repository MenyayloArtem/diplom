import React from "react";
import Card from "../../components/Card/Card.tsx";

const teachers = [
    {
        "img": "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/generated/118/209/300x400/25/5e63271b75f185e06af6911d6b907d03.jpg?crop=0%3A0%3A0%3A0&hash=7994e141effd499758a3c85d05dfbf9a&resize_mode=0&wm_m=0",
        "name": "Крюкова Анжела Викторовна",
        "position": "Учитель русского языка и литературы"
    },
    {
        "img": "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/generated/118/209/300x400/26/5e63271b75f185e06af6911d6b907d03.jpg?crop=0%3A0%3A0%3A0&hash=7994e141effd499758a3c85d05dfbf9a&resize_mode=0&wm_m=0",
        "name": "Скороходова Анжелика Игоревна",
        "position": "Учитель английского языка"
    },
    {
        "img": "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/generated/118/209/300x400/31/5e63271b75f185e06af6911d6b907d03.jpg?crop=0%3A0%3A0%3A0&hash=7994e141effd499758a3c85d05dfbf9a&resize_mode=0&wm_m=0",
        "name": "Кипоть Кира Николаевна",
        "position": "Учитель математики и ОБЖ"
    },
    {
        "img": "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/generated/118/209/300x400/32/5e63271b75f185e06af6911d6b907d03.jpg?crop=0%3A0%3A0%3A0&hash=7994e141effd499758a3c85d05dfbf9a&resize_mode=0&wm_m=0",
        "name": "Ильенко Мария Викторовна",
        "position": "Учитель истории, советник директора"
    },
    {
        "img": "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/generated/118/209/300x400/33/5e63271b75f185e06af6911d6b907d03.jpg?crop=0%3A0%3A0%3A0&hash=7994e141effd499758a3c85d05dfbf9a&resize_mode=0&wm_m=0",
        "name": "Ковалёва Евдокия Николаевна",
        "position": "Учитель русского языка и литературы"
    },
    {
        "img": "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/generated/118/209/300x400/34/5e63271b75f185e06af6911d6b907d03.jpg?crop=0%3A0%3A0%3A0&hash=7994e141effd499758a3c85d05dfbf9a&resize_mode=0&wm_m=0",
        "name": "Марюхнич Ангелина Олеговна",
        "position": "Учитель физической культуры"
    },
    {
        "img": "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/generated/118/209/300x400/35/5e63271b75f185e06af6911d6b907d03.jpg?crop=0%3A0%3A0%3A0&hash=7994e141effd499758a3c85d05dfbf9a&resize_mode=0&wm_m=0",
        "name": "Комаринская Екатерина Сергеевна",
        "position": "Учитель русского языка и литературы"
    },
    {
        "img": "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/generated/118/209/300x400/36/5e63271b75f185e06af6911d6b907d03.jpg?crop=0%3A0%3A0%3A0&hash=7994e141effd499758a3c85d05dfbf9a&resize_mode=0&wm_m=0",
        "name": "Хархордина Ангелина Александровна",
        "position": "Учитель начальных классов"
    }
]

const TeachersPage : React.FC = () => {
    return <div id="teachersPage">
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {teachers.map((item, i) => (
                <Card key={i} img={item.img} title={item.name} body={item.position}/>
            ))}
        </div>
        
    </div>
}

export default TeachersPage