const detailimg = document.getElementById("detailimg");
const close = document.getElementById("close");
const detailbox = document.getElementById("detailbox");
// code for image box
const openimgbox = (src) => {
  detailbox.style.display = "flex";
  detailimg.src = src;
};
close.addEventListener("click", () => {
  detailbox.style.display = "none";
});

const themebtn = document.getElementById("themeimg");
const b = document.getElementsByTagName("a");
const v = Array.from("abcdefgh");
themebtn.addEventListener("click", () => {
  document.body.classList.toggle("darktheme");
  if (themeimg.src.includes("moon")) {
    themeimg.src = "./assets/sun.png";
    // for styling the anchor tag

    v.forEach((e, index) => {
      b[index].style.color = "white";
    });
  } else {
    themeimg.src = "./assets/moon.png";
    v.forEach((e, index) => {
      b[index].style.color = "black";
    });
  }
});
