// section 2 - 4
//section 2
// contoh 1
const elementsByClass = document.getElementsByClassName("myClass");
for (let i = 0; i < elementsByClass.length; i++) {
  elementsByClass[i].style.backgroundColor = "yellow";
}
// contoh 2
const elementsByTag = document.getElementsByTagName("li");
for (let i = 0; i < elementsByTag.length; i++) {
  elementsByTag[i].classList.add("highlight");
}
// contoh 3
const elementByQuery = document.querySelector("#myElement p:nth-child(2)");
elementByQuery.style.fontSize = "20px";

// section 3
// contoh 1
const childElement = document.getElementById("myChildElement");
const parentElement = childElement.parentNode;
parentElement.style.backgroundColor = "blue";
// contoh 2
const parentElement = document.getElementById("myParentElement");
const childElements = parentElement.childNodes;
for (let i = 0; i < childElements.length; i++) {
  if (childElements[i].nodeType === 1) {
    childElements[i].style.color = "red";
  }
}
// contoh 3
const targetElement = document.getElementById("myTargetElement");
const siblingElements = targetElement.parentNode.children;
for (let i = 0; i < siblingElements.length; i++) {
  if (siblingElements[i] !== targetElement) {
    siblingElements[i].style.backgroundColor = "green";
  }
}

// section 4
// contoh 1
var button = document.createElement("button");
button.textContent = "Klik saya";
var paragraph = document.querySelector("p");
paragraph.appendChild(button);
// contoh 2
var heading = document.querySelector("h1");
heading.textContent = "Selamat Datang!";
// contoh 3
var fragment = document.createDocumentFragment();
var p1 = document.createElement("p");
p1.textContent = "Ini adalah paragraf pertama.";

var p2 = document.createElement("p");
p2.textContent = "Ini adalah paragraf kedua.";

fragment.appendChild(p1);
fragment.appendChild(p2);

var container = document.querySelector("#container");
container.appendChild(fragment);


