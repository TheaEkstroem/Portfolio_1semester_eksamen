/* slideshow */

var img = document.getElementById("img_1");
var img2 = document.getElementById("img_2");
var img3 = document.getElementById("img_3");

var slides = [
  "img/tema_skærm/Frame1_laglace.webp",
  "img/tema_skærm/Frame2_digital.webp",
  "img/tema_skærm/Frame3_emne.webp",
  "img/tema_skærm/Frame4_spil.webp",
  "img/tema_skærm/frame5_computer.webp",
];

var Start = 0;
var Start = 0;

/* img 1 */
function slider() {
  if (Start < slides.length) {
    Start = Start + 1;
  } else {
    Start = 1;
  }
  console.log(img);
  img.innerHTML = "<img src=" + slides[Start - 1] + ">";
}
setInterval(slider, 2200);

/* img 2 */
function slider2() {
  if (Start < slides.length) {
    Start = Start + 1;
  } else {
    Start = 1;
  }
  console.log(img2);
  img2.innerHTML = "<img src=" + slides[Start - 1] + ">";
}
setInterval(slider2, 2800);

/* img 3 */
function slider3() {
  if (Start < slides.length) {
    Start = Start + 1;
  } else {
    Start = 1;
  }
  console.log(img3);
  img3.innerHTML = "<img src=" + slides[Start - 1] + ">";
}
setInterval(slider3, 2600);
