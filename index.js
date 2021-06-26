const popUp = document.querySelector(".pop-up"),
  header = document.querySelector(".header"),
  main = document.querySelector(".main"),
  button = document.querySelector(".button"),
  rotateIcon = document.querySelector(".rotateIcon"),
  again = document.querySelector(".again"),
  refresh = document.querySelector(".refresh");
(ww = window.innerWidth), (wh = window.innerHeight);

let buttonActivated = false;
let lives = 1;

popUp.style.zIndex = -1;

button.addEventListener("click", () => {
  ///////// HIDE PREV CONTENT /////////
  buttonActivated = true;
  lives = 0;
  anime({
    targets: ".header",
    easing: "easeInOutQuad",
    duration: "1000",
    opacity: 0,
  });

  anime({
    targets: ".main",
    easing: "easeInOutQuad",
    duration: "1000",
    opacity: 0,
  });

  ///////// SHOW POPUP /////////
  anime({
    targets: ".pop-up",
    height: "100%",
    easing: "easeInOutQuad",
    duration: "1000",
    zIndex: 1,
  });

  ///////// ROTATE ICON IF NECESSARY /////////
  if (ww < wh) {
    anime({
      targets: ".rotateIcon",
      easing: "easeInOutQuad",
      duration: "1000",
      opacity: 1,
      delay: "1000",
    });
  } else {
    anime({
      targets: ".animeImage, .again, .refresh",
      easing: "easeInOutQuad",
      duration: "1000",
      opacity: 1,
      delay: "1000",
    });

    animeImage.src = animes[recommenation()];
  }
});

window.addEventListener("resize", () => {
  let w = window.innerWidth,
    h = window.innerHeight;

  ///////// CHECK IF W > H /////////
  if (w < h && buttonActivated) {
    anime({
      targets: ".rotateIcon",
      easing: "easeInOutQuad",
      duration: "1000",
      opacity: 1,
      delay: "300",
    });

    animeImage.src = "";
  }

  if (w > h && buttonActivated) {
    anime({
      targets: ".rotateIcon",
      easing: "easeInOutQuad",
      duration: "1000",
      opacity: 0,
      delay: "300",
    });

    animeImage.src = animes[recommenation()];
  }
});

/////////////// RECOMMENDATIONS ///////////////
const gintama = "./public/gintama.jpg",
  blackClover = "./public/bc.png",
  demonSlayer = "./public/ds.jpg",
  drStone = "./public/dr-stone.png",
  toYourEternity = "./public/tye.png",
  animeImage = document.querySelector(".animeImage");

const animes = [gintama, blackClover, demonSlayer, drStone, toYourEternity];

const recommenation = () => {
  let randomAnime = Math.floor(Math.random() * animes.length);
  return randomAnime;
};

window.addEventListener("resize", () => {
  let w = window.innerWidth,
    h = window.innerHeight;

  if (w < h && buttonActivated) {
    anime({
        targets: ".again, .refresh",
        easing: "easeInOutQuad",
        duration: "1000",
        opacity: 0,
        delay: "1000",
      });

    animeImage.src = "";
  }

  if (w > h && buttonActivated) {
    anime({
      targets: ".animeImage",
      easing: "easeInOutQuad",
      duration: "1000",
      opacity: 1,
      delay: "1000",
    });

    anime({
      targets: ".again, .refresh",
      easing: "easeInOutQuad",
      duration: "1000",
      opacity: 1,
      delay: "1000",
    });

    animeImage.src = animes[recommenation()];
  }
});

/////////////// AGAIN & REFRESH ///////////////
again.addEventListener("click", () => {
  animeImage.src = animes[recommenation()];
});

refresh.addEventListener("click", () => {
  location.reload();
});
