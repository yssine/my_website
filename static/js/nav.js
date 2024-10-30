
const navigation = document.querySelector('.gooey-nav');

const links = navigation.querySelectorAll('li');

let prevIndex = 0;

const moveStrip = (element, index) => {
    const {x: elementX, width: elementWidth} = element.getBoundingClientRect();

    const linkPadding = +navigation.querySelector('.moving-strip').getAttribute('data-padding');

    navigation.style.setProperty('--movingStripWidth', `${elementWidth + linkPadding}px`);

    const navigationX = navigation.getBoundingClientRect().x;

    const fromX = `${(elementX - navigationX) - (linkPadding / 2)}px`;

    element.classList.add('active');

    navigation.style.setProperty('--movingStripX', fromX);

    navigation.style.setProperty('--rotateTo', `${index - prevIndex}deg`);
    
    setTimeout(() => {
        navigation.style.setProperty('--rotateTo', 0);
    }, 250);
    
    prevIndex = index;
}

moveStrip(links[0], 0);

window.addEventListener('resize', () => {
    moveStrip(links[0], 0);
    links.forEach(li => li.classList.remove('active'));
    links[0].classList.add('active');
});

navigation.addEventListener('click', (event) => {
    const link = event.target.closest('li');

    if (link){
        links.forEach(link => link.classList.remove('active'));

        const index = Array.from(links).indexOf(link);

        moveStrip(link, index);
    }
});

