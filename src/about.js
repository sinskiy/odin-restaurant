export default function createAbout() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const main = createMain();
  content.append(main);

  function createMain() {
    const main = document.createElement("section");
    const heading = createHeading();
    const text = createText();
    main.append(heading, text);
    return main;

    function createHeading() {
      const h2 = document.createElement("h2");
      h2.innerText = "About";
      return h2;
    }
    function createText() {
      const text = document.createElement("p");
      text.innerText =
        "Welcome to Indian Kitchen by R&R, where authentic Indian flavours meet the vibrant streets of Prague, Czech Republic. We're more than just a restaurant, we're a culinary journey that brings the essence of Indian culture to the heart of Europe. We are a culinary oasis nestled in the center of Prague, where the enchanting flavor of India comes alive. Here, we strive to create an unforgettable dining experience that tantalizes your senses and transports you to the vibrant streets of India.\n\nFounded by Sagar Tomer, Indian Kitchen By R&R is born out of a passion for sharing the rich and diverse tapestry of Indian cuisine with the world. Inspired by the bustling markets and bustling kitchens of India, Sagar Tomer envisions a place where locals and travellers alike can experience the warmth and hospitality of Indian cooking.\n\nWith a dedication to quality and authenticity, Atanu Biswas leads our team as Head of Operations, ensuring that every dish that leaves our kitchen is crafted with care and attention to detail. Drawing on his years of experience and expertise, Mr. Biswas brings a wealth of knowledge and skill to Indian Kitchen By R&R, elevating every dining experience to new heights.\n\nOur love for Indian cuisine and a dream to share its authentic flavours with the world brings this restaurant to life. With roots firmly planted in India, we embark on a culinary adventure, bringing traditional recipes, age-old cooking techniques, and the warmth of Indian hospitality to Prague. The restaurant is the zenith of dedication to offering an unforgettable dining experience, one that is both authentic and unique.\n\nAt Indian Kitchen By R&R, we believe that food is more than just sustenance; it's a celebration of life, love, and community. That's why we source the finest ingredients, hand-selecting spices and produce to create dishes that burst with flavour and tradition. From fragrant curries to sizzling tandoori delights, each bite tells a story of India's rich culinary heritage.\n\nBut our story doesn't end with the food on your plate. It extends to the warm smiles of our staff, the inviting ambiance of our restaurant, and the memories shared with friends and family around our tables. Whether you're a seasoned spice enthusiast or new to the world of Indian cuisine, we invite you to join us on a journey of discovery and delight at Indian Kitchen By R&R.";
      return text;
    }
  }
}
