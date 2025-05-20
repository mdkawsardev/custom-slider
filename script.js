let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let parent = document.querySelector(".parent");
let slider = document.querySelector(".slider");
let img = document.getElementById("img");

nextBtn.addEventListener("click", () => {
    let items = document.querySelectorAll(".item");
    slider.appendChild(items[0]);
})

prevBtn.addEventListener("click", () => {
    let items = document.querySelectorAll(".item");
    slider.prepend(items[items.length - 1]);
    img.classList.add("img-prev");
})

setInterval(() => {
    let items = document.querySelectorAll(".item");
    slider.appendChild(items[0]);
    console.log("hello world")
}, 5000);

