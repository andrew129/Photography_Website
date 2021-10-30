let imageArr = ["./images/hannah1.jpeg", "./images/hannah2.jpeg"];
let currentIndex = 0;
let imageTag = document.querySelector(".bio-img");
let timer;
document.querySelector(".scroll-btn").onclick = () => window.scrollTo(0, 0);
window.addEventListener("scroll", function () {
  if (parseInt(this.scrollY) === 0) {
    document.querySelector(".scroll-btn").style.display = "none";
  } else {
    document.querySelector(".scroll-btn").style.display = "block";
    document.querySelector(".scroll-btn").classList.add("scroll-fade");
    setTimeout(
      () =>
        document.querySelector(".scroll-btn").classList.remove("scroll-fade"),
      1000
    );
  }
});

function startShow() {
  imageTag.src = imageArr[currentIndex];
  imageTag.classList.remove("fade-out");
  imageTag.classList.add("fade-in");

  if (currentIndex === imageArr.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  setTimeout(() => {
    imageTag.classList.remove("fade-in");
    setTimeout(() => {
      imageTag.classList.add("fade-out");
      setTimeout(() => {
        requestAnimationFrame(startShow);
      }, 4000);
    }, 4000);
  }, 4000);
}
requestAnimationFrame(startShow);

jQuery(function () {
  jQuery(".toggle-menu a").click(function (e) {
    e.preventDefault();
    jQuery(".right-nav").toggleClass("toggleNav");
  });
});
