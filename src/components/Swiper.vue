<template>
  <swiper :options="swiperOption">
    <swiper-slide class="swiper-slide" v-for="(slide, index) in swiperSlides" :key="index">I'm Slide {{ slide }}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'carrousel',
    components: {
        swiper,
        swiperSlide
    },
     data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    // mounted() {
    //   setInterval(() => {
    //     console.log('simulate async data')
    //     if (this.swiperSlides.length < 10) {
    //       this.swiperSlides.push(this.swiperSlides.length + 1)
    //     }
    //   }, 3000)
    // }
//   }
    
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