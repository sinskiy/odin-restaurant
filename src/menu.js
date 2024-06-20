import Bottle from "./assets/bottle.png";
import BigBottle from "./assets/big-bottle.png";
import Van from "./assets/van.png";
import Ocean from "./assets/ocean.png";

export default function createMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const main = createMain();
  content.append(main);

  function createMain() {
    const main = document.createElement("section");
    const heading = createHeading();
    const list = createList();
    main.append(heading, list);
    return main;

    function createHeading() {
      const h2 = document.createElement("h2");
      h2.innerText = "Menu";
      return h2;
    }
    function createList() {
      const ul = document.createElement("ul");
      ul.classList.add("menu");
      const listContent = [
        {
          title: "A bottle of water",
          price: "Free",
          src: Bottle,
        },
        {
          title: "A big bottle of water",
          price: "Free",
          src: BigBottle,
        },
        {
          title: "A van of water",
          price: "Free",
          src: Van,
        },
        {
          title: "Ocean",
          price: "Free",
          src: Ocean,
        },
      ];
      for (const listItemContent of listContent) {
        const li = createListItem(listItemContent);
        ul.appendChild(li);
      }
      return ul;

      function createListItem(listItemContent) {
        const li = document.createElement("li");
        li.classList.add("card");

        const img = new Image();
        img.src = listItemContent.src;

        const text = document.createElement("div");

        const title = document.createElement("span");
        title.textContent = listItemContent.title;

        const price = document.createElement("span");
        price.textContent = listItemContent.price;

        text.append(title, price);

        li.append(img, text);
        return li;
      }
    }
  }
}
