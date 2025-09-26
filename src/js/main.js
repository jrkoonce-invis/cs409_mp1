// Globals
const navbar_height = 40;
const navLinks = document.querySelectorAll('#sticky-navbar a');
const sectionIds = ['carousel', 'multi-column', 'videobg'];
let currentIndex = 0;   // For carousel
const images = document.querySelectorAll('.carousel-image');
const total = images.length;

const backCarousel = () => {
    currentIndex = (currentIndex - 1 + total) % total;
    showImage(currentIndex);
}

const nextCarousel = () => {
    currentIndex = (currentIndex + 1) % total;
    showImage(currentIndex);
}

const modalAppear = () => {
    document.getElementById('modal-content').style.display = 'flex';
}

const modalDisappear = () => {
    document.getElementById('modal-content').style.display = 'none';
}

const handleScroll = () => {
    // Navbar animation
    const navbar = document.getElementById('sticky-navbar');
    if (window.scrollY > navbar_height) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }   

    // Update navbar position indicator
    let idx = 0;
    for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section && window.scrollY + 60 >= section.offsetTop) {
        idx = i;
        }
    }
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2)) {
        idx = sectionIds.length - 1;
    }
    navLinks.forEach((link, i) => link.classList.toggle('active', i === idx));
}

const showImage = (idx) => {
    for (let i = 0; i < total; i++) {
        if (i === idx) {
            images[i].style.display = 'block';
        } else {
            images[i].style.display = 'none';
        }
    }
}

// Event listeners
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
document.getElementById('prev').onclick = backCarousel;
document.getElementById('next').onclick = nextCarousel;
document.getElementById('explore-btn').onclick = modalAppear
document.getElementById('close-modal').onclick = modalDisappear

// Initialize the carousel
showImage(currentIndex);
