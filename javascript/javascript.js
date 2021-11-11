function init() {
  document
    .getElementById("myTestEvent")
    .addEventListener("click", function(ev) {
      console.dir(ev);
    });

  document.querySelector(".reset").addEventListener("click", function(ev) {
    document.querySelector("body").setAttribute("class", "resetBack");
  });

  document.querySelector(".red").addEventListener("click", function(ev) {
    document.querySelector("body").setAttribute("class", "redBack");
  });

  document.querySelector(".green").addEventListener("click", function(ev) {
    document.querySelector("body").setAttribute("class", "greenBack");
  });

  document.querySelector(".blue").addEventListener("click", function(ev) {
    document.querySelector("body").setAttribute("class", "blueBack");
  });

  var imageAr = [
    "images/view1.jpg",
    "images/view2.jpg",
    "images/view3.jpg",
    "images/view4.jpg",
    "images/view5.jpg",
    "images/view6.jpg"
  ];

  function chgImage() {
    document.getElementById("myImages").setAttribute("src", imageAr[3]);
  }
  chgImage();
}
