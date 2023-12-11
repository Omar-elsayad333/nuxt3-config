<template>
    <swiper :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    }" :loop="true" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper?.value }" :modules="modules"
        :breakpoints="{
            '640': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            '1024': {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        }" :slidesPerView="1" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}" class="mySwiper2">
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide>
        <!-- Add other slides here -->
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide>
    </swiper>

    <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
        :watchSlidesProgress="true" :modules="modules" class="mySwiper">
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide>
        <!-- Add other slides here -->
    </swiper>
</template>
  
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];
</script>
  
<style scoped>
#app {
    height: 30%;
}

html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

body {
    background: #000;
    color: #000;
}

.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper2 {
    height: 80%;
    width: 100%;
}

.mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
  