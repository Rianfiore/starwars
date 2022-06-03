let scrollPercentage;

const header = document.querySelector("header"),
  main = document.querySelector("main"),
  footer = document.querySelector("footer");

header.id = main.id = footer.id = "invisible";
setInvisibleTags(header, main, footer);
headerScrollEffect();

window.addEventListener("scroll", () => {
  let h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";

  scrollPercentage =
    ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

  if (window.screen.width >= 1300) {
    if (scrollPercentage >= 5) {
      mainScrollEffect("banner");
      mainScrollEffect("infoGame");
      mainScrollEffect("section1Line");
    }

    if (scrollPercentage >= 18) {
      mainScrollEffect("gameStructure");
    }

    if (scrollPercentage >= 35) {
      mainScrollEffect("attributes");
    }
    if (scrollPercentage >= 50) {
      mainScrollEffect("hierarchy");
    }
    if (scrollPercentage >= 65) {
      mainScrollEffect("howToPlay");
    }
    if (scrollPercentage >= 90) {
      footerScrollEffect();
    }
  } else {
    if (scrollPercentage >= 0) {
      mainScrollEffect("banner");
      mainScrollEffect("infoGame");
      mainScrollEffect("section1Line");
    }

    if (scrollPercentage >= 22) {
      mainScrollEffect("gameStructure");
    }

    if (scrollPercentage >= 30) {
      mainScrollEffect("attributes");
    }
    if (scrollPercentage >= 50) {
      mainScrollEffect("hierarchy");
    }
    if (scrollPercentage >= 65) {
      mainScrollEffect("howToPlay");
    }
    if (scrollPercentage >= 80) {
      footerScrollEffect();
    }
  }
});

function setInvisibleTags(element1, element2, element3) {
  element1.id = element2.id = "opacity-in";
  Object.values(element1.getElementsByTagName("*")).map(
    (e) => (e.id = "invisible")
  ),
    Object.values(element2.getElementsByTagName("section")).map((e) =>
      Object.values(e.getElementsByTagName("*")).map(
        (e) => (e.id = "invisible")
      )
    ),
    Object.values(element3.getElementsByTagName("*")).map(
      (e) => (e.id = "invisible")
    );
}

function headerScrollEffect() {
  header.children[0].id =
    header.getElementsByClassName("title")[0].id =
    header.getElementsByClassName("kylo-ren")[0].id =
    header.getElementsByClassName("star")[0].id =
    header.getElementsByClassName("wars")[0].id =
    header.getElementsByClassName("create-your-legion")[0].id =
      console.log(header.children[0]);

  header.getElementsByClassName("kylo-ren")[0].children[0].id = "zoom-in";

  setTimeout(() => {
    header.getElementsByClassName("star")[0].children[0].id = "left-to-right";
    header.getElementsByClassName("wars")[0].children[0].id = "right-to-left";
  }, 1000);

  setTimeout(() => {
    header.getElementsByClassName("create-your-legion")[0].children[0].id =
      "zoom-in";
  }, 1500);
}

function mainScrollEffect(renderPart) {
  const section1 = main.children[0],
    section2 = main.children[1];

  section1Effect(section1, renderPart);
  section2Effect(section2, renderPart);

  function section1Effect(section, renderPart) {
    section.getElementsByClassName("about-the-game")[0].id = "visible";
    const banner = section.getElementsByClassName("banner")[0],
      infoGame = section.getElementsByClassName("info-game")[0];

    infoGame.id =
      infoGame.getElementsByTagName("figure")[0].id =
      infoGame.getElementsByClassName("text")[0].id =
        "visible";

    if (renderPart == "banner") {
      banner.id = "bottom-to-top";
      setTimeout(
        () => (banner.getElementsByTagName("h2")[0].id = "zoom-in"),
        1000
      );
      setTimeout(
        () => (banner.getElementsByTagName("p")[0].id = "bottom-to-top"),
        1250
      );
      setTimeout(
        () =>
          (banner.getElementsByTagName("button")[0].id = banner
            .getElementsByTagName("button")[0]
            .getElementsByTagName("a")[0].id =
            "zoom-in"),
        1500
      );
    }
    if (renderPart == "infoGame") {
      setTimeout(
        () => (infoGame.getElementsByTagName("img")[0].id = "zoom-in"),
        1000
      );

      setTimeout(
        () => (infoGame.getElementsByTagName("h2")[0].id = "top-to-bottom"),
        1250
      );

      setTimeout(
        () => (infoGame.getElementsByTagName("p")[0].id = "bottom-to-top"),
        1500
      );
    }

    if (renderPart == "section1Line") {
      setTimeout(
        () => (section1.getElementsByClassName("line")[0].id = "zoom-in"),
        1500
      );
    }

    if (renderPart == "gameStructure") {
      section1.getElementsByClassName("game-structure")[0].id = "visible";
      section1.getElementsByClassName("background")[0].id = "visible";

      setTimeout(
        () =>
          (section1.getElementsByClassName("darth-maul")[0].id =
            section1.getElementsByClassName("rey")[0].id =
              "visible"),
        100
      );

      setTimeout(
        () => (
          (section1
            .getElementsByClassName("darth-maul")[0]
            .getElementsByTagName("img")[0].id = "left-to-right"),
          (section1
            .getElementsByClassName("rey")[0]
            .getElementsByTagName("img")[0].id = "right-to-left")
        ),
        250
      );

      setTimeout(
        () => (
          (section1.getElementsByClassName("content")[0].id = "visible"),
          (section1
            .getElementsByClassName("content")[0]
            .getElementsByTagName("h2")[0].id = "zoom-in"),
          (section1
            .getElementsByClassName("content")[0]
            .getElementsByTagName("span")[0].id = "zoom-in")
        ),
        500
      );
      setTimeout(
        () =>
          (section1
            .getElementsByClassName("content")[0]
            .getElementsByTagName("nav")[0].id = "visible"),
        (section1
          .getElementsByClassName("content")[0]
          .getElementsByTagName("ul")[0].id = "visible"),
        750
      );
      let i = 0;
      setTimeout(
        () =>
          Object.values(
            section1
              .getElementsByClassName("content")[0]
              .getElementsByTagName("li")
          ).map((e) => (e.id = "left-to-right")),
        750
      );
    }
  }
  function section2Effect(section, renderPart) {
    section.getElementsByClassName("attributes")[0].id =
      section.getElementsByClassName("flex")[0].id =
      section.getElementsByClassName("gallery")[0].id =
      section.getElementsByClassName("gallery2")[0].id =
      section.getElementsByClassName("hierarchy")[0].id =
      section.getElementsByClassName("how-to-play")[0].id =
      section
        .getElementsByClassName("how-to-play")[0]
        .getElementsByTagName("div")[0].id =
      section
        .getElementsByClassName("how-to-play")[0]
        .getElementsByTagName("div")[1].id =
        "visible";

    if (renderPart == "attributes") {
      const attributes = section.getElementsByClassName("attributes")[0];
      (attributes
        .getElementsByTagName("figure")[0]
        .getElementsByTagName("div")[0].style.display = "none"),
        attributes
          .getElementsByTagName("figure")[0]
          .getElementsByTagName("div")[0]
          .removeAttribute("id");

      setTimeout(
        () => (attributes.getElementsByTagName("h2")[0].id = "left-to-right"),
        Object.values(
          attributes
            .getElementsByTagName("figure")[0]
            .getElementsByClassName("banner")[0]
            .getElementsByTagName("*")
        ).map((e) => (e.id = "visible")),
        (attributes
          .getElementsByTagName("figure")[3]
          .getElementsByTagName("div")[0].id = "opacity-out"),
        Object.values(
          attributes
            .getElementsByTagName("figure")[3]
            .getElementsByClassName("banner")[0]
            .getElementsByTagName("*")
        ).map((e) => (e.id = "visible")),
        Object.values(
          (attributes
            .getElementsByTagName("figure")[3]
            .getElementsByClassName("banner")[0].id = "half")
        ),
        (attributes
          .getElementsByTagName("figure")[6]
          .getElementsByTagName("div")[0].id = "opacity-out"),
        Object.values(
          attributes
            .getElementsByTagName("figure")[6]
            .getElementsByClassName("banner")[0]
            .getElementsByTagName("*")
        ).map((e) => (e.id = "visible")),
        Object.values(
          (attributes
            .getElementsByTagName("figure")[6]
            .getElementsByClassName("banner")[0].id = "half")
        ),
        (attributes
          .getElementsByTagName("figure")[9]
          .getElementsByTagName("div")[0].id = "opacity-out"),
        Object.values(
          attributes
            .getElementsByTagName("figure")[9]
            .getElementsByClassName("banner")[0]
            .getElementsByTagName("*")
        ).map((e) => (e.id = "visible")),
        Object.values(
          (attributes
            .getElementsByTagName("figure")[9]
            .getElementsByClassName("banner")[0].id = "half")
        ),
        (attributes
          .getElementsByTagName("figure")[12]
          .getElementsByTagName("div")[0].id = "opacity-out"),
        Object.values(
          attributes
            .getElementsByTagName("figure")[12]
            .getElementsByClassName("banner")[0]
            .getElementsByTagName("*")
        ).map((e) => (e.id = "visible")),
        Object.values(
          (attributes
            .getElementsByTagName("figure")[12]
            .getElementsByClassName("banner")[0].id = "half")
        ),
        100
      );
      setTimeout(
        () => (
          (attributes.getElementsByTagName("figure")[0].id = "visible"),
          (attributes
            .getElementsByTagName("figure")[0]
            .getElementsByTagName("img")[2].id = "zoom-in")
        ),
        150
      );
      setTimeout(
        () => (
          (attributes.getElementsByTagName("figure")[3].id = "visible"),
          (attributes
            .getElementsByTagName("figure")[3]
            .getElementsByTagName("img")[2].id = "zoom-in")
        ),
        200
      );
      setTimeout(
        () => (
          (attributes.getElementsByTagName("figure")[6].id = "visible"),
          (attributes
            .getElementsByTagName("figure")[6]
            .getElementsByTagName("img")[2].id = "zoom-in"),
          (attributes
            .getElementsByTagName("figure")[0]
            .getElementsByTagName("div")[0].style.display = "flex")
        ),
        225
      );
      setTimeout(
        () => (
          (attributes.getElementsByTagName("figure")[9].id = "visible"),
          (attributes
            .getElementsByTagName("figure")[9]
            .getElementsByTagName("img")[2].id = "zoom-in")
        ),
        250
      );
      setTimeout(
        () => (
          (attributes.getElementsByTagName("figure")[12].id = "visible"),
          (attributes
            .getElementsByTagName("figure")[12]
            .getElementsByTagName("img")[2].id = "zoom-in")
        ),
        275
      );
    }
    if (renderPart == "hierarchy") {
      const hierarchy = section.getElementsByClassName("hierarchy")[0];
      setTimeout(() => {
        (hierarchy.getElementsByTagName("figure")[0].id = "visible"),
          (hierarchy.getElementsByTagName("img")[0].id = "bottom-to-top");
      }, 100);
    }
    if (renderPart == "howToPlay") {
      const floatContent = section.getElementsByClassName("float-content")[0],
        cards = section.getElementsByClassName("cards")[0],
        card = Object.values(cards.getElementsByClassName("card"));

      Object.values(
        card[0].getElementsByClassName("button-bg")[0].getElementsByTagName("*")
      ).map((e) => (e.id = "visible"));
      Object.values(
        card[1].getElementsByClassName("button-bg")[0].getElementsByTagName("*")
      ).map((e) => (e.id = "visible"));
      Object.values(
        card[2].getElementsByClassName("button-bg")[0].getElementsByTagName("*")
      ).map((e) => (e.id = "visible"));

      floatContent.id = floatContent.getElementsByTagName("figure")[0].id =
        "visible";
      card.map((e) => (e.id = "visible"));

      setTimeout(() => {
        floatContent.getElementsByTagName("h2")[0].id = "top-to-bottom";
      }, 500);
      setTimeout(() => {
        floatContent.getElementsByTagName("img")[0].id = "left-to-right";
      }, 750);
      setTimeout(() => {
        card[0].getElementsByClassName("button-bg")[0].id = "zoom-in";
      }, 1000);
      setTimeout(() => {
        card[0].getElementsByTagName("h2")[0].id = "bottom-to-top";
      }, 1250);
      setTimeout(() => {
        card[0].getElementsByTagName("p")[0].id = "top-to-bottom";
      }, 1250);
      setTimeout(() => {
        card[0].getElementsByClassName("line")[0].id = "top-to-bottom";
      }, 1750);
      setTimeout(() => {
        card[1].getElementsByClassName("button-bg")[0].id = "zoom-in";
      }, 1250);
      setTimeout(() => {
        card[1].getElementsByTagName("h2")[0].id = "bottom-to-top";
      }, 1500);
      setTimeout(() => {
        card[1].getElementsByTagName("p")[0].id = "top-to-bottom";
      }, 1750);
      setTimeout(() => {
        card[1].getElementsByClassName("line")[0].id = "top-to-bottom";
      }, 2000);
      setTimeout(() => {
        card[2].getElementsByClassName("button-bg")[0].id = "zoom-in";
      }, 1500);
      setTimeout(() => {
        card[2].getElementsByTagName("h2")[0].id = "bottom-to-top";
      }, 1750);
      setTimeout(() => {
        card[2].getElementsByTagName("p")[0].id = "top-to-bottom";
      }, 2000);
      setTimeout(() => {
        card[2].getElementsByClassName("line")[0].id = "top-to-bottom";
      }, 2250);
    }
  }
}

function footerScrollEffect() {
  footer.id = "visible";
  footer.getElementsByTagName("img")[2].id = "visible";
  footer.getElementsByClassName("content")[0].id = "visible";
  footer.getElementsByClassName("app")[0].id = "left-to-right";
  footer.getElementsByClassName("darth-vader")[0].id = "left-to-right";

  const content = footer.getElementsByClassName("content")[0],
    downloadApp = content.getElementsByClassName("download-app")[0],
    starWars = footer.getElementsByClassName("star-wars")[0];

  setTimeout(() => {
    content.getElementsByTagName("h2")[0].id = "left-to-right";
  }, 1000);

  setTimeout(() => {
    content.getElementsByTagName("p")[0].id = "left-to-right";
  }, 1250);
  setTimeout(() => {
    (downloadApp.id = "visible"),
      Object.values(downloadApp.getElementsByTagName("*")).map(
        (e) => (e.id = "zoom-in")
      );
  }, 1500);
  setTimeout(() => {
    content.getElementsByClassName("line")[0].id = "zoom-in";
  }, 1750);
  setTimeout(() => {
    (starWars.id = "visible"),
      (starWars.getElementsByTagName("h2")[0].id = "left-to-right");
  }, 2000);
  setTimeout(() => {
    (starWars.id = "visible"),
      (starWars.getElementsByTagName("p")[0].id = "left-to-right");
  }, 2000);
}
