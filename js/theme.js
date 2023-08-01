document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.querySelector("#themeToggle");

    const toggleToDark = () => {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
        document.body.querySelector("label[for='themeToggle']").innerHTML = "Lights on";
    }

    const toggleToLight = () => {
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
        document.body.querySelector("label[for='themeToggle']").innerHTML = "Lights off";
    }

    themeToggle.addEventListener("change", () => {
        let theme = localStorage.getItem("data-theme");
        if (theme === "dark") toggleToLight();
        else toggleToDark();
    })

    let theme = localStorage.getItem("data-theme"); 
    if (theme && theme === "light") {
        themeToggle.checked = true;
        toggleToLight();
    }
    else themeToggle.checked = false;
});