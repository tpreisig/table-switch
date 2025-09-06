document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector("#theme-toggle");
    const body = document.body;
    const categoryFilter = document.querySelector("#categoryFilter");
    const searchInput = document.querySelector("#searchInput");
    const snacksWrapper = document.querySelector("#snacks-wrapper");
    const foodWrapper = document.querySelector("#food-wrapper");
    const snacksTable = document.querySelector("#snacks-table tbody");
    const foodTable = document.querySelector("#food-table tbody");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.id = savedTheme;
    }

    themeToggle.addEventListener("click", () => {
        if (body.id === "light-theme") {
            body.id = "dark-theme";
            themeToggle.className = "ri-sun-line";
            localStorage.setItem("theme", "dark-theme");
        } else {
            body.id = "light-theme";
            themeToggle.className = "ri-moon-line";
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
    // Search functionality
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        filterTables(query);
    });

    function filterTables(query) {
        const selectedCategory = categoryFilter.value;

        // Filter snacks table
        const snackRows = snacksTable.querySelectorAll("tr");
        snackRows.forEach(row => {
            const name = row.querySelector(".name-column").textContent.toLowerCase();
            const shouldShow = name.includes(query) && (selectedCategory === "all" || selectedCategory === "snacks");
            row.style.display = shouldShow ? "" : "none";
        });

        // Filter food table
        const foodRows = foodTable.querySelectorAll("tr");
        foodRows.forEach(row => {
            const name = row.querySelector(".name-column").textContent.toLowerCase();
            const shouldShow = name.includes(query) && (selectedCategory === "all" || selectedCategory === "food");
            row.style.display = shouldShow ? "" : "none";
        });
    }
});
