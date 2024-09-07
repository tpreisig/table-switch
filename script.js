document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector("#theme-toggle");
    const body = document.body;

    console.log(themeToggle);
    console.log(body);

    const savedTheme = localStorage.getItem("theme");
    if(savedTheme){
        body.id = savedTheme;
    }

    themeToggle.addEventListener("click", () => {
        if(body.id === "light-theme"){
            body.id = "dark-theme";
            localStorage.setItem("theme", "dark-theme");
        } else {
            body.id = "light-theme";
            localStorage.setItem("theme", "light-theme");
        }
    });
});
