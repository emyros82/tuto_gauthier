console.log("yo la famille");
var redButton = document.getElementById("red-button");
redButton.addEventListener("click", function() {
    document.getElementById("tuto-gauthier-title").style.color = "red";
});
function myFunction(toto){
    console.log(toto);
    alert(toto);
}
myFunction(document);
myFunction(redButton);