document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector("#theme-toggle");
    const body = document.body;

    console.log(themeToggle);
    console.log(body);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.id = savedTheme;
    }

    themeToggle.addEventListener("click", () => {
        if (body.id === "light-theme") {
            body.id = "dark-theme";
            localStorage.setItem("theme", "dark-theme");
        } else {
            body.id = "light-theme";
            localStorage.setItem("theme", "light-theme");
        }
    });

    // Category filter
    categoryFilter.addEventListener("change", () => {
        const selectedCategory = categoryFilter.value;
        if (selectedCategory === "all") {
            snacksWrapper.style.display = "block";
            foodWrapper.style.display = "block";
        } else if (selectedCategory === "snacks") {
            snacksWrapper.style.display = "block";
            foodWrapper.style.display = "none";
        } else if (selectedCategory === "food") {
            snacksWrapper.style.display = "none";
            foodWrapper.style.display = "block";
        }
        // Reset search input when changing category
        searchInput.value = "";
        filterTables("");
    });
});
