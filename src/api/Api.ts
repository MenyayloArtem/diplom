import { INews } from "../components/NewsItem/NewsItem";
import apiUrl from "../shared/apiUrl.ts";

export default abstract class Api {
  static async fetchNews(): Promise<INews[]> {
    let res = await fetch("/api/news");
    let html = await res.text();
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");
    let objects = Array.from(doc.querySelectorAll(".object-item"));

    let parsedNews: INews[] = objects.map((item) => ({
      title: item.querySelector(".object-item-title")!.textContent!,
      text: item.querySelector(".object-item-announce")?.textContent as any,
      image:
        apiUrl +
        "netcat_files" +
        (item.querySelector(".image img") as any).src.split("netcat_files")[1],
    }));
    return parsedNews;
  }

  static async fetchEvents() : Promise<INews[]> {
    let res = await fetch("/api/events");
    let html = await res.text();
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");
    let objects = Array.from(doc.querySelectorAll(".object"));

    let parsedEvents = objects.map((item) => ({
        title: item.querySelector(".object-info .name")!.textContent!,
        text: item.querySelector(".object-info .description")?.textContent as any,
        image:
          apiUrl +
          "netcat_files" +
          (item.querySelector(".object-image img") as any).src.split("netcat_files")[1],
      }));

    console.log(parsedEvents)
    return parsedEvents
  }
}
