const Typewriter = function (txtElement, words, wait = 400) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};
Typewriter.prototype.type = function () {
  const current = this.wordIndex % this.words.length;
  const fullText = this.words[current];
  if (this.isDeleting) {
    this.txt = fullText.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullText.substring(0, this.txt.length + 1);
  }
  this.txtElement.innerHTML = `<span class="txt center-align">${this.txt}</span>`;
  let typeSpeed = 250;
  if (this.isDeleting) {
    typeSpeed /= 2;
  }
  if (!this.isDeleting && this.txt === fullText) {
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 500;
  }
  setTimeout(() => this.type(), typeSpeed);
};
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = [
    "Machine Learning",
    "Web Development",
    "Programming",
    "Computer Engineering",
  ];
  const wait = 500;
  new Typewriter(txtElement, words, wait);
}
document.addEventListener("DOMContentLoaded", init);

$(document).ready(function () {
  $(".tabs").tabs();
  $(".scrollspy").scrollSpy();
  $(".collapsible").collapsible();
  $(".sidenav")
    .sidenav()
    .on("click tap", "li a", () => {
      $(".sidenav").sidenav("close");
    });
});
