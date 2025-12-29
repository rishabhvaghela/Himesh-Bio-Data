// const tabs = document.querySelectorAll(".glass-nav li");
// const components = document.querySelectorAll(".component");
// const indicator = document.querySelector(".nav-indicator");

// function moveIndicator(element) {
//     indicator.style.width = element.offsetWidth + "px";
//     indicator.style.transform = `translateX(${element.offsetLeft}px)`;
// }

// tabs.forEach(tab => {
//     tab.addEventListener("click", () => {

//         // Active nav
//         tabs.forEach(t => t.classList.remove("active"));
//         tab.classList.add("active");

//         // Show component
//         components.forEach(comp => comp.classList.remove("active"));
//         document.getElementById(tab.dataset.target).classList.add("active");

//         // Indicator animation
//         moveIndicator(tab);
//     });
// });

// // Initial indicator position
// moveIndicator(document.querySelector(".glass-nav li.active"));

const sections = document.querySelectorAll('.component');
const navLinks = document.querySelectorAll('.glass-nav a');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.toggle(
                        'active',
                        link.getAttribute('href') === `#${id}`
                    );
                });
            }
        });
    },
    {
        root: null,            // viewport
        threshold: 0.6         // 60% section visible = active
    }
);

sections.forEach(section => observer.observe(section));
