const scrollingNav = document.getElementById('scrolling-nav');
let isScrolling = false;
let startX = 0;
let scrollLeft = 0;

scrollingNav.addEventListener('mousedown', (e) => {
    isScrolling = true;
    startX = e.pageX - scrollingNav.offsetLeft;
    scrollLeft = scrollingNav.scrollLeft;
});

scrollingNav.addEventListener('mouseup', () => {
    isScrolling = false;
});

scrollingNav.addEventListener('mouseleave', () => {
    isScrolling = false;
});

scrollingNav.addEventListener('mousemove', (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - scrollingNav.offsetLeft;
    const walk = (x - startX);
    scrollingNav.scrollLeft = scrollLeft - walk;
});