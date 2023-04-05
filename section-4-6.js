// section 4-6

//section 4
// contoh 1
var button = document.querySelector("#ganti-gambar");
var image = document.querySelector("#gambar");
button.addEventListener("click", function() {
  var newImage = document.createElement("img");
  newImage.src = "path/to/new/image.png";
  image.parentNode.replaceChild(newImage, image);
});
// contoh 2
var container = document.querySelector("#container");
var existingElement1 = document.querySelector("#existing-element-1");
var existingElement2 = document.querySelector("#existing-element-2");
var newElement = document.createElement("div");
newElement.textContent = "Ini adalah elemen baru.";
container.insertBefore(newElement, existingElement2);

// section 5
// contoh 1
const elemenJudul = document.getElementById("judul");
elemenJudul.setAttribute("class", "tebal");
// contoh 2
const elemenGambar = document.getElementById("gambar");
const nilaiSrc = elemenGambar.getAttribute("src");
console.log(nilaiSrc);

// section 6
// contoh 1
document.getElementById("header").style.backgroundColor = "blue";
// contoh 2
const titleColor = window.getComputedStyle(document.getElementById("title")).getPropertyValue("color");
console.log(titleColor);