const myParagraph = document.getElementById("my-paragraph");
myParagraph.style.color = "red";

const myButton = document.getElementById("my-button");

myButton.addEventListener("click", function () {
  const actionStatus = document.getElementById("action-status");
  let clickStatus = document.createElement("div");
  clickStatus.innerHTML = "Button Clicked";
  actionStatus.appendChild(clickStatus);
});
