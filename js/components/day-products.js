export function initDayProducts() {
    const slider = document.querySelector('.day-products__slider');
    const prevButton = document.querySelector('.day-products__navigation-btn--prev');
    const nextButton = document.querySelector('.day-products__navigation-btn--next');

    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 40,
        slidesPerGroup: 1,
        speed: 400,
        loop: false,
        watchOverflow: true,

        navigation: {
            prevEl: prevButton,
            nextEl: nextButton,
        },
    });
}