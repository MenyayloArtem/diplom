import { INews } from "../components/NewsItem/NewsItem";

const MASTER_KEY =
  "$2a$10$JsufKSlnnpnWueXgtxkNd.Uj4JwayaPLyEze.oQLmBW0P2VhAqdn.";
const ACCESS_KEY =
  "$2a$10$PHndlndf8poKy3jj4bRuZOH0nMdmQ3mfg8XXfhWOUnEjP.zyzxOaa";

export default abstract class Api {
  private static async fetchBin(id: string) {
    try {
      let data = await fetch(`https://api.jsonbin.io/v3/b/${id}`, {
        headers: {
          "X-Master-Key": MASTER_KEY,
          "X-Access-Key": ACCESS_KEY,
        },
      });

      let res = await data.json();

      console.log(res);
      if (data.status >= 400) {
        throw new Error("Events error");
      }

      return res.record;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async fetchNews(): Promise<INews[]> {
    return await Api.fetchBin("67c31df3ad19ca34f8149ad4");

    // var o = Array.from(document.querySelectorAll(".object-item"));

    // var parsedNews = o.map((item) => {
    //   console.log(item)
    //   try {
    //     return {
    //     title: item.querySelector(".object-item-title").textContent,
    //     text: item.querySelector(".object-item-announce").textContent,
    //     image:
    //       "https://gorlovka-shkola-41.gosuslugi.ru/" +
    //       "netcat_files" +
    //       (item.querySelector(".image img")).src.split("netcat_files")[1]
    //   }
    //   } catch (e) {
    //     return ""
    //   }
    // })
    // console.log(parsedNews)
  }

  static async fetchEvents(): Promise<INews[]> {
    return await Api.fetchBin("67c31498e41b4d34e49ede46");

    //   var o = Array.from(document.querySelectorAll(".object"));

    // var parsedEents = o.map((item) => ({
    //     title: item.querySelector(".object-info .name").textContent.trim(),
    //     text: item.querySelector(".object-info .description").textContent.trim(),
    //     image:
    //       "https://gorlovka-shkola-41.gosuslugi.ru/" +
    //       "netcat_files" +
    //       (item.querySelector(".object-image img")).src.split("netcat_files")[1],
    //   }));

    // console.log((parsedEents))
  }
}
