let scrollValue = window.scrollY;
const header = document.querySelector("header"),
  main = document.querySelector("main"),
  footer = document.querySelector("footer");

function setInvisibleTags(element1, element2, element3) {
  element1.id = element2.id = element3 = "opacity-in";
  const childrens1 = Object.values(element1.childNodes).map(
      (e) => (e.id = "invisible")
    ),
    childrens2 = Object.values(element2.getElementsByTagName("section")).map(
      (e) => Object.values(e.childNodes).map((e) => (e.id = "invisible"))
    );
}

function scrollEffect() {
  header.id = main.id = footer.id = "invisible";

  if (scrollValue == 0) {
    setInvisibleTags(header, main);
  }
}

scrollEffect();
