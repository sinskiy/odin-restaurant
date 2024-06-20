import MainImage from "./assets/image.png";
import Delivery from "./assets/delivery.png";
import Water from "./assets/water.png";
import Price from "./assets/price.png";

export default function createHome() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const hero = createHero();
  const why = createWhy();
  content.append(hero, why);

  function createHero() {
    const hero = document.createElement("section");
    const figure = createFigure();
    hero.append(figure);
    return hero;

    function createFigure() {
      const figure = document.createElement("figure");

      const mainImage = new Image();
      mainImage.src = MainImage;

      const figcaption = document.createElement("figcaption");
      figcaption.innerText = "...A bunch of";

      figure.append(mainImage, figcaption);
      return figure;
    }
  }
  function createWhy() {
    const why = document.createElement("section");
    const heading = createHeading();
    const list = createList();
    why.append(heading, list);
    return why;

    function createHeading() {
      const h2 = document.createElement("h2");
      h2.innerText = "Why choose us?";
      return h2;
    }
    function createList() {
      const ul = document.createElement("ul");
      const listContent = [
        {
          title: "Free delivery across the world",
          src: Delivery,
        },
        {
          title: "The cleanest water",
          src: Water,
        },
        {
          title: "Cheap prices",
          src: Price,
        },
      ];
      for (const listItemContent of listContent) {
        const li = createListItem(listItemContent);
        ul.appendChild(li);
      }
      return ul;

      function createListItem(listItemContent) {
        const li = document.createElement("li");

        const img = new Image();
        img.src = listItemContent.src;

        const text = document.createElement("span");
        text.textContent = listItemContent.title;

        li.append(img, text);
        return li;
      }
    }
  }
}
