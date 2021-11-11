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
}
