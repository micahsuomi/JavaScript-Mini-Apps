const appsWrapper = document.querySelector(".apps-wrapper");
const aboutContainer = document.querySelector(".about-container");
const loadAppsBtn = document.querySelector(".load-apps__btn");

const apps = [
  (app1 = {
    title: "HexaColor Generator",
    link: "https://hexacolorgenerator.netlify.com/",
    img: "imgs/app1.PNG",
    description: "An HexaDecimal Random Color Generator",
  }),
  (app2 = {
    title: "HTML Table Generator",
    link: "https://html-tablegenerator.netlify.com/",
    img: `imgs/app2.PNG`,
    description:
      "An app that generates tables and table properties based on user input",
  }),
  (app3 = {
    title: "Countries of the World",
    link: "https://micahsuomi.github.io/Countries-of-the-World/",
    img: `imgs/app3.PNG`,
    description: "A list of all countries of the world with sorting functions",
  }),
  (app4 = {
    title: "Chuck Norris Joke Generator",
    link: "https://chucknorrisjokesgenerator.netlify.com/",
    img: "imgs/app4.PNG",
    description: "Because everyone loves silly apps",
  }),
  (app5 = {
    title: "Budget App",
    link: "https://micahsuomi.github.io/Budget-Web-App/",
    img: "imgs/app5.JPG",
    description: "An budgeting app that calculates expenses and income",
  }),
  (app6 = {
    title: "Score LeaderBoard",
    link: "https://micahsuomi.github.io/Score-Leaderboard/",
    img: `imgs/app6.PNG`,
    description: "A score leaderboard built with different functions",
  }),
  (app7 = {
    title: "Weight Calculator on Planets",
    link: "https://micahsuomi.github.io/Planets-Object-Weight-Calculator-/",
    img: "imgs/app7.PNG",
    description: "A weight calculator on all the planets",
  }),
  (app8 = {
    title: "Word Counter",
    link: "https://micahsuomi.github.io/Word-Variety-Counter/",
    img: "imgs/app8.PNG",
    description:
      "An app that counts most frequent words and words variety in a text",
  }),
  (app9 = {
    title: "Form Validation",
    link: "https://micahsuomi.github.io/Form-Validation-with-Regex/",
    img: "imgs/app9.PNG",
    description: "A form validation built with regular expressions",
  }),
];

const createNode = (e) => {
  return document.createElement(e);
};

const append = (parent, el) => {
  return parent.appendChild(el);
};

let flag = true;
const toggle = () => {
  flag = !flag;
  return flag;
};

loadAppsBtn.addEventListener(
  "click",
  (loadApps = () => {
    console.log("running first time");
    if (flag === true) {
      appsWrapper.classList.remove("hide");
      aboutContainer.classList.add("hide", "slide-left");
      appsWrapper.textContent = "";
      loadAppsBtn.textContent = "About";

      for (const app in apps) {
        let { title, link, img, description } = apps[app];
        let appsContainer = createNode("div"),
          appHeader = createNode("div");
        appBody = createNode("div");
        (appImg = createNode("img")),
          (appLink = createNode("a")),
          (appTitle = createNode("h4")),
          (appDescription = createNode("p"));

        let btnView = createNode("button");
        let appText = createNode("p");

        appImg.src = img;
        appsContainer.setAttribute("class", "app grow");
        appHeader.setAttribute("class", "app-header");
        appBody.setAttribute("class", "app-body");
        btnView.setAttribute("class", "btn-view");

        appText.textContent = "View App";
        appImg.style.width = "100%";
        appTitle.textContent = title;
        appLink.href = link;
        appLink.setAttribute("class", "app-link");
        appTitle.setAttribute("class", "app-title");
        appText.setAttribute("class", "grow2");
        appLink.setAttribute("target", "blank");
        appTitle.style.color = "rgb(12,25,100)";
        appDescription.textContent = description;
        appDescription.setAttribute("class", "paragraph-description");

        append(appHeader, appImg);
        append(appsContainer, appHeader);
        append(appLink, appText);
        append(appBody, appTitle);
        append(appBody, appDescription);
        append(btnView, appLink);
        append(appBody, btnView);
        append(appsContainer, appBody);
        append(appsWrapper, appsContainer);

        appsContainer.addEventListener(
          "mouseover",
          (addBtnView = () => {
            btnView.style.opacity = "1";
          })
        );

        appsContainer.addEventListener(
          "mouseout",
          (removeBtnView = () => {
            btnView.style.opacity = "0";
          })
        );
      }
    } else {
      appsWrapper.classList.add("hide");
      aboutContainer.classList.remove("hide", "slide-left");
      appsWrapper.textContent = "";
      loadAppsBtn.textContent = "Load Apps";
    }
    toggle();
  })
);
