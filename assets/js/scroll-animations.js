document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SECTION OBSERVER
    ========================= */

    const sections = document.querySelectorAll(".component");

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                } else {
                    entry.target.classList.remove("in-view");
                }
            });
        },
        {
            threshold: 0.35
        }
    );

    sections.forEach(section => sectionObserver.observe(section));



    /* =========================
       PHOTOS BOX OBSERVER
    ========================= */

    const boxes = document.querySelectorAll('#photos .box');

    const boxObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("box-in-view");
                } else {
                    entry.target.classList.remove("box-in-view");
                }
            });
        },
        {
            threshold: 0.35,
            rootMargin: '0px 0px -60px 0px'
        }
    );

    boxes.forEach(box => boxObserver.observe(box));

});


/* =========================
   GLOBAL REVEAL OBSERVER
========================= */

const revealItems = document.querySelectorAll(
    ".reveal-item, #photos .box"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            } else {
                entry.target.classList.remove("in-view");
            }
        });
    },
    {
        threshold: 0.25,
        rootMargin: "0px 0px -80px 0px"
    }
);

revealItems.forEach(item => revealObserver.observe(item));

