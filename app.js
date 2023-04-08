let kup = document.querySelector(".kup");
let kontrol = document.getElementById("durdur");
let resimModu = false;
let anim;
// butonların resimlere ataması
document.querySelectorAll(".butonlar>button").forEach((btn, key) => {
  let rotate;

  btn.onclick = (event) => {
    switch (key) {
      case 0:
        rotate = "rotateY(0deg)";
        break;
      case 1:
        rotate = "rotateY(-180deg)";
        break;
      case 2:
        rotate = "rotateY(-90deg)";
        break;
      case 3:
        rotate = "rotateY(90deg)";
        break;
      case 4:
        rotate = "rotateX(-90deg)";
        break;
      case 5:
        rotate = "rotateX(90deg)";
        break;
    }
    // animasyonla kupun hareket ettirilmesi
    anim.pause();
    anim = kup.animate([{ transform: `translateZ(-36vmin) ${rotate}` }], {
      duration: 1000,
      iterations: 1,
      fill: "forwards",
      easing: "linear",
    });
    resimModu = true;
    kontrol.innerHTML = '<i class="fa-solid fa-play"></i>';
  };
});

function toggleAnimation() {
  if (resimModu) {
    animasyonuBaslat();
    resimModu = false;
  } else {
    if (anim.playState === "running") {
      anim.pause();
      kontrol.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
      anim.play();
      kontrol.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
  }
}

function animasyonuBaslat() {
  kontrol.innerHTML = '<i class="fa-solid fa-pause"></i>';
  anim = kup.animate(
    [
      { transform: "translateZ(-90vmin) rotateY(25deg) rotateX(45deg)" },
      { transform: "translateZ(-90vmin) rotateY(385deg) rotateX(45deg)" },
    ],
    { duration: 8000, iterations: 9999, easing: "linear" }
  );
}
// kontrol butonunun animasyona ataması
kontrol.onclick = toggleAnimation;
animasyonuBaslat();
