const myButton = document.getElementById("myButton");
const myParagraph = document.getElementById("myParagraph");

myButton.addEventListener("click", function () {
  myParagraph.innerText = "Bonjour, vous avez cliqué sur le bouton !";
});
