const bannerBg = document.getElementById("banner-bg");

window.addEventListener("scroll", () => {
  updateBannerBg();
});

function updateBannerBg() {
  bannerBg.style.opacity = 1 - window.pageYOffset / 900;
  bannerBg.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}