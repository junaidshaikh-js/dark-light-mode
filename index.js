let toggle = document.querySelector("#toggle");

toggle.addEventListener("click", modeSwitch);


function modeSwitch() {
    let root = document.body;
    if (toggle.innerHTML != "🌚") {
        toggle.innerHTML = "🌚";
    }
    else {
        toggle.innerHTML = "🌞";
    }

    root.classList.toggle("lightmode");
}