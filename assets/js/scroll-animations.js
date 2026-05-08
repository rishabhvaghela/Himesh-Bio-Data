    document.addEventListener("DOMContentLoaded", () => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                } else {
                    entry.target.classList.remove("in-view"); // optional
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: "0px 0px -60px 0px"
        });

        // Observe everything that needs animation
        const elements = document.querySelectorAll(
            ".component, .reveal-item, #photos .box"
        );

        elements.forEach(el => observer.observe(el));

    });