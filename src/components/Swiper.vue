<template>
<div class="container-fluid base-dark-blue-background-color">
  <div class="container pt-5 pb-5">
    <h1 class="u__text__base-light pb-4 font-weight-light u-h1">Previous websites worked on</h1>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(slide, index) in getSwiperContent" :key="index">
          <div class="c__content__block">
            <h2 class="pt-3 u__text__base-light font-weight-light u-h3">{{slide.title}}</h2>
            <p class="u__text__base-light font-weight-light u-h5">{{slide.content}}</p>
          </div>
          <img :src="require(`../assets/img/${slide.image}.jpg`)" class="img-fluid mb-2 c__content__img">
          
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-next d-none d-md-block swiper-button-white"></div>
      <div class="swiper-button-prev d-none d-md-block swiper-button-white"></div>
    </swiper>
  </div>
</div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'SwiperSlider',
    props:{
      block: {
        type: Object,
        default: undefined
      }
    },
    components: {
        swiper,
        swiperSlide
    },
     data() {
      return {
        swiperOption: {
          effect: 'flip',
          grabCursor: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
      }
    },  
    computed: {
      getSwiperContent(){
        if(this.block === null || this.block === undefined){
          return null;
        }else{
          return this.block.images;
        }
      }
    }
}
</script>
<style lang="scss" scoped>
.c__content__img,
.c__content__block{
  display: block;
  margin: auto;
  width: 90%;
  height: auto;
}
.swiper-pagination-progressbar
 .swiper-pagination-progressbar-fill{
  height: 20px !important;
  background: #275e5b !important;

 }
@media only screen and (max-width: 991px) {
.c__content__img,
.c__content__block{
  display: block;
  margin: auto;
  width: 85%;
  height: auto;
}
}
@media only screen and (max-width: 540px) {
.c__content__img,
.c__content__block{
  width: 95%;
}
}
</style>