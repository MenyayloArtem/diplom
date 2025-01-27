import React from "react";

const NewsItem : React.FC = () => {
    return <div className="news-item flex flex-col sm:flex-row bg-white shadow-md p-4">
    <div className="news-item__left w-full sm:w-1/3">
      <img src="/school.jpg" alt="image" className="news-item__image" />
    </div>
    <div className="news-item__right w-full sm:w-2/3 text-start p-4">
      <div className="news-item__title font-bold text-xl">
        Title
      </div>
      <div className="news-item__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem exercitationem sequi quibusdam, ullam porro repudiandae qui quos dicta magnam nobis vitae mollitia odit accusamus architecto ipsam perspiciatis! Atque cupiditate ut tenetur vero recusandae! Doloremque, voluptas. Doloribus, repudiandae possimus? Voluptas molestias, laborum nulla, dolorem ullam, minima quia repellat voluptates saepe temporibus porro! Amet vitae debitis nisi vero pariatur maiores doloribus eos sint incidunt nihil, earum quis odio accusamus eius a voluptas et autem, tempore labore magni minima, obcaecati cupiditate ea similique. Ex, repellat inventore consectetur, fugiat earum natus laboriosam id aspernatur, ipsa eius magni libero reprehenderit incidunt accusamus enim tempora quo!
      </div>
    </div>
  </div>
}

export default NewsItem