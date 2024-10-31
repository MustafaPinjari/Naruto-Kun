 let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
        document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Automatic slide change every 5 seconds
    setInterval(() => {
        changeSlide(1);
    }, 5000);