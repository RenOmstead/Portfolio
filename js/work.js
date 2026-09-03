document.addEventListener("DOMContentLoaded", () => {

    const filters = document.querySelectorAll(".work-filter");
    const projects = document.querySelectorAll(".work-card");

    filters.forEach((filter) => {

        filter.addEventListener("click", () => {

            const selectedCategory = filter.dataset.filter;

            filters.forEach((button) => {
                button.classList.remove("active");
            });

            filter.classList.add("active");


            projects.forEach((project) => {

                const categories =
                    project.dataset.category
                        .split(" ");

                const shouldShow =
                    selectedCategory === "all" ||
                    categories.includes(selectedCategory);

                project.hidden = !shouldShow;

            });

        });

    });

});
