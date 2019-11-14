<template>
<div class="container-fluid base-dark-background-color">
  <div class="container pt-5 pb-5">
    <h1 v-if="getTitle !== null" class="u__text__base-light font-weight-lighter u-h1">{{ getTitle }}</h1>
    <h6 v-if="getSubtitle !== null" class="font-weight-bolder u__text__dark-base-green u-uppercase pb-3 mb-0 u-h6"> {{ getSubtitle }}</h6>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(slide, index) in getSwiperContent" :key="index">
        <div class="c-swiper__content__block mb-3">
          <h2 class="pt-3 u__text__base-light font-weight-light u-h3">{{slide.title}}</h2>
          <p class="u__text__base-light font-weight-light u-h5 col-9 pl-0">{{slide.content}}</p>
        </div>
        <img :src="require(`../assets/img/${slide.image}.jpg`)" class="img-fluid mb-2 c-swiper__content__img">
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-progressbar" slot="pagination"></div>
      <div class="swiper-button-next swiper-button-white c-swiper__right"></div>
      <div class="swiper-button-prev swiper-button-white c-swiper__left"></div>
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
      },
      getTitle(){
        if(this.block.title === null || this.block.title === undefined){
          return null;
        }else{
          return this.block.title;
        }
      },
      getSubtitle(){
        if(this.block.subtitle === null || this.block.subtitle === undefined){
          return null;
        }else{
          return this.block.subtitle;
        }
      }
    }
}
</script>
<style lang="scss">
.c-swiper__content__img,
.c-swiper__content__block{
  display: block;
  margin: auto;
  width: 90%;
  height: auto;
}
.swiper-pagination-progressbar
.swiper-pagination-progressbar-fill{
  height: 10px !important;
  background: #275e5b !important;
 }
 .swiper-container-horizontal > .swiper-pagination-progressbar {
   height: 10px;
 }
.swiper-pagination-progressbar-fill > span{
  background: #275e5b !important;
}
@media only screen and (max-width: 991px) {
  .c-swiper__content__img,
  .c-swiper__content__block{
    display: block;
    margin: auto;
    width: 85%;
    height: auto;
  }
}
@media only screen and (max-width: 768px) {
  .c-swiper__right{ 
    right: 0px !important;
  }
  .c-swiper__left{ 
    left: 0px !important;
  }
}
@media only screen and (max-width: 540px) {
  .c-swiper__content__img,
  .c-swiper__content__block{
    width: 95%;
  }
  .c-swiper__right{ 
    right: -23px !important;
  }
  .c-swiper__left{ 
    left: -23px !important;
  }
}
</style>