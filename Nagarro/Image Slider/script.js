let i = 0;

let box1 = document.getElementById("image1");
let box2 = document.getElementById("image2");
let box3 = document.getElementById("image3");
let box4 = document.getElementById("image4");
let i1 = document.querySelector(".i1");
let i2 = document.querySelector(".i2");
let i3 = document.querySelector(".i3");
let i4 = document.querySelector(".i4");
let number = document.getElementById("number");
let cityName = document.querySelector(".cityName"); 

i1.onclick = function () {
    box1.style.opacity = 1;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    number.innerHTML = "1/4"
    cityName.innerText = "Paris";
    i = 0;
}

i2.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 1;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    number.innerHTML = "2/4"
    cityName.innerText = "Mumbai";
    i = 1;
}

i3.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 1;
    box4.style.opacity = 0;
    number.innerHTML = "3/4"
    cityName.innerText = "Las Vegas"
}

i4.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 1;
    number.innerHTML = "4/4"
    cityName.innerText = "Dubai";
    i = 3;
}

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 37) {
        right();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 39 ) {
        right();
    }
});

function right() {
    if (i == 0) {
        box1.style.opacity = 1;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        number.innerHTML = "1/4"
        cityName.innerText = "Paris";
        i++
    }
    else if (i == 1) {
        box1.style.opacity = 0;
        box2.style.opacity = 1;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        number.innerHTML = "2/4"
        cityName.innerText = "Mumbai";
        i++
    }
    else if (i == 2) {  
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 1;
        box4.style.opacity = 0;
        number.innerHTML = "3/4"
        cityName.innerText = "Las Vegas";
        i++
    }
    else if (i == 3) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 1;
        number.innerHTML = "4/4";
        cityName.innerText = "Dubai";
        i = 0;
    }
}

function left() {
   if (i == 0) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 1;
        number.innerHTML = "1/4";
        cityName.innerText = "Paris";
        
        i++
    }
    else if (i == 1) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 1;
        box4.style.opacity = 0;
        number.innerHTML = "2/4"
        cityName.innerText = "Mumbai";
        i++
    }
    else if (i == 2) {
        box1.style.opacity = 0;
        box2.style.opacity = 1;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        number.innerHTML = "3/4";
        cityName.innerText = "Las Vegas";
        i++
    }
    else if (i == 3) {
        box1.style.opacity = 1;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        number.innerHTML = "4/4";
        cityName.innerText = "Dubai";
        i = 0;
    }
}
