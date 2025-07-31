import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Base breakpoints dùng chung cho mọi Swiper
const baseBreakpoints = {
  0: { slidesPerView: 1 },
  576: { slidesPerView: 2 },
  992: { slidesPerView: 3 },
  1200: { slidesPerView: 4 },
  1400: { slidesPerView: 5 },
};

// Hàm tạo config Swiper, cho phép ghi đè options
export function createSwiperConfig(options: any = {}) {
  return {
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: baseBreakpoints,
    modules: [Pagination, Autoplay],
    ...options,
  };
}

// Cấu hình cho từng loại Swiper
export const bannerSwiperConfig = createSwiperConfig({
  className: "bannerImg-swiper",
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  navigation: true,
  modules: [Navigation, Autoplay],
  breakpoints: undefined,
});

export const featuredSwiperConfig = createSwiperConfig({
  className: "card-featured-swiper",
  spaceBetween: 20,
  slidesPerView: 5,
  navigation: true,
  pagination: { clickable: true },
  modules: [Pagination, Navigation, Autoplay],
});

export const topCategoriesSwiperConfig = createSwiperConfig({
  className: "swiper mySwiper",
  spaceBetween: 30,
  pagination: { clickable: true, el: '.swiper-pagination__topcategories' },
});