<template>
    <div class="">
        <header-block></header-block>
        <ThreeBlockContent :block="getThreeBlockContent"></ThreeBlockContent>
        <swiper></swiper>
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
        }
    }

    
}
</script>