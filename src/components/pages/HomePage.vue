<template>
    <div class="">
        <header-block></header-block>
        <ThreeBlockContent :block="getThreeBlockContent"></ThreeBlockContent>
        <swiper :block="getSliderContent"></swiper>
        <diagonal-content></diagonal-content>
    </div>
</template>
<script>
import JSON from '../../content'
export default {
    name: 'HomePage',
    data() {
        return {
            homeData: JSON.homePage
        }
    },
    computed: {
        getThreeBlockContent(){
            if(this.homeData.ThreeBlockContent === "null" || this.homeData.ThreeBlockContent === "undefined") {
                return null;
            }
            else{
                return this.homeData.ThreeBlockContent
            }
        },
        getSliderContent(){
            if(this.homeData.slider === "null" || this.homeData.slider === "undefined") {
                return null;
            }
            else{
                return this.homeData.slider
            }
        }
    }

    
}
</script>