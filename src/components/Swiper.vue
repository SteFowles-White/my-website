<template>
  <swiper :options="swiperOption">
    <swiper-slide class="swiper-slide" v-for="(slide, index) in getSwiperContent" :key="index">
        <img :src="require(`../assets/img/${slide}.jpg`)" class="img-fluid mb-2 c__content__img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-next swiper-button-white"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
  </swiper>
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
          effect:'fade',
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
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
.swiper-container {
    width: 600px;
    height: 300px;
}
.swiper-slide{
    height: 4rem;
    text-align: center;
    padding-top: 3rem;
    border-bottom: 1px solid #ccc;
}
</style>