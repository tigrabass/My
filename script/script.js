let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function onTopFunction() {
  document.documentElement.scrollTop = 0;
}

let btnUp = document.querySelector("#myBtn");
btnUp.addEventListener("click", onTopFunction);
