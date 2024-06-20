import createAbout from "./about";
import handleLoad from "./handleLoad";
import createHome from "./home";
import "./style.css";

document.addEventListener("DOMContentLoaded", handleLoad);

const tabs = document.querySelectorAll("button");
for (const tab of tabs) {
  tab.addEventListener("click", (e) => loadTab(e.target.innerText));
}

function loadTab(tab) {
  switch (tab) {
    case "home":
      createHome();
      return;

    case "about":
      createAbout();
      return;
  }
}
