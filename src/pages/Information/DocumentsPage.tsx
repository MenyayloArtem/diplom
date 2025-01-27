import React from "react";
import { FaBoxOpen, FaFile, FaFilePdf, FaFileWord } from "react-icons/fa";
import { GrView } from "react-icons/gr";

const docs = [
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/174/2960/zayavlenie_o_prieme.pdf",
    text: "Заявление о приеме в первый класс",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/Kartochka_proekta.pdf",
    text: "Карточка проекта «Комфортная школа»",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/Koldogovor_2021_2023_posle_ispravleniya_.pdf",
    text: "Коллективный договор ",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/Reestrovaya_vypiska.pdf",
    text: "Лицензия на осуществление образовательной деятельности",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/Metodicheskie_rekomendatsii_po_ranney_profilaktike.pdf",
    text: "Методические рекомендации по ранней профилактике наркомании и токсикомании",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/173/2955/pis_mo_ot_27.08.2022_4231_06.1_28.pdf",
    text: "Методические рекомендации по реализации дополнительных общеобразовательных программ с применением электронного обучения и дистанционных образовательных технологий, очно-заочного формата обучения (письмо МОН ДНР от 27.08.2022 № 4231/06.1-28)",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/173/2955/pis_mo_ot_27.08.2022_4232_06.1_28.pdf",
    text: "Методические рекомендации по реализации общеобразовательных программ с применением электронного обучения и дистанционных образовательных технологий и Методические рекомендации по реализации общеобразовательных программ в условиях временных ограничений осуществления образовательного процесса в очном формате (письмо МОН ДНР от 27.08.2022 № 4232/06.1-28)",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/Metodicheskie_rekomendatsii_sotsial_nym_pedagogam_kurenie.pdf",
    text: "Методические рекомендации социальным педагогам по выявлению факта  курения",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/173/2955/MR_2.4.0330_23_elektronnoe_obuchenie.pdf",
    text: "МР 2.4.0330-23. Методические рекомендации по обеспечению санитарно-эпидемиологических требований при реализации образовательных программ с применением электронного обучения и дистанционных образовательных технологий (Государственное санитарно-эпидемиологическое нормирование Российской Федерации)",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/174/2960/Ob_organizatsii_raboty_po_priemu_na_obuchenie_detey.pdf",
    text: "Об организации работы по приему на обучение детей\\nв первый класс на 2024-2025 учебный год",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/Zayavlenie_v_1_klass.docx",
    text: "Образец заявления о приеме на обучение",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/otchet_o_rezul_tatah_samoobsledovaniya.pdf",
    text: "Отчет о результатах самообследования",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/OTChET.pdf",
    text: "Отчёт об исполнении законодательства о противодействии экстремизму и терроризму",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/Pamyatka_ob_ugolovnoy_otvetstvennosti_za_korruptsiyu.pdf",
    text: "Памятка об уголовной ответственности за коррупцию",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/Plan_meropriyatiy_po_profilaktike_extremizma_v_GBOU_ShKOLA_41.pdf",
    text: "План мероприятий по профилактике экстремизма в ГБОУ «Школа № 41 с углубленным изучением отдельных предметов на 2024-2025 учебный год",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/Plan_meropriyatiy.pdf",
    text: 'План мероприятий проекта "Комфортная школа"',
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/Plan_meropriyatiy_napravlennyh_na_profilaktiku_negativnyh_yavleniy.pdf",
    text: "План мероприятий, направленных на профилактику негативных явлений",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/Plan_sovmestnyh_profilakticheskih_meropriyatiy.pdf",
    text: "План совместных профилактических мероприятий по предупреждению безнадзорности, беспризорности и правонарушений",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/Politika_v_otnoshenii_obrabotki_perosnal_nyh_dannyh.pdf",
    text: "Политика в отношении обработки персональных данных",
  },
  {
    url: "https://gorlovka-shkola-41.gosuslugi.ru/netcat_files/33/44/Polozhenie_o_poryadke_provedeniya_proverok_bibliotechnogo_fonda_i_iz_yatiya.pdf",
    text: "Положение о порядке проведения проверок библиотечного фонда и изъятия",
  },
];

const DocumentsPage: React.FC = () => {
  return (
    <div className="documentsPage">
      <div className="text-2xl font-semibold ml-4">Документы</div>
      <div className="grid grid-cols-1 my-4">
        {docs.map((document, i) => (
          <div className="document-item" key={i}>
            <div className="document-item__inner flex items-center justify-between p-4">
              <div className="document-item__base flex items-center">
                <a
                  href={document.url}
                  target="_blank"
                  className="document-item__icon"
                >
                  {document.url.endsWith(".pdf") ? (
                    <FaFilePdf size={24} color="#d14949" />
                  ) : (
                    <FaFileWord size={24} color="#2eb6b6" />
                  )}
                </a>
                <a
                  href={document.url}
                  target="_blank"
                  className="document-item__text ml-4 hover:text-blue-500"
                >
                  {document.text}
                </a>
              </div>
              <a href={document.url} target="_blank" className="ml-4">
                <GrView size={20} color="gray" />
              </a>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;
