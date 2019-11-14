<template>
<div class="base-light-background-color">
    <div class="container pt-3 pb-3">
        <h1 class="u-h2 pt-2 mb-0 font-weight-lighter u__text__color__dark__blue">{{ getMainTitle }}</h1>
        <h6 v-if="getSubtitle !== null" class="font-weight-bolder u__text__dark-base-green u-uppercase pb-3 mb-0 u-h6"> {{ getSubtitle }}</h6>
        <div class="row pb-3">

            <div v-for="(item, index) in getContent" class="col-md c-content__block position-relative" :key="index">
                <img :src="require(`../../assets/img/${item.thumbnail}.jpg`)" class="img-fluid mb-2 c__content__img">
                    <p class="u__text__color__dark__blue u-h3 font-weight-light text-center">{{ item.title }}</p>
                    <p class="u__text__color__dark__blue h-h5 font-weight-normal"> {{ item.content }}</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'threeBlockContent',
    props: {
        block: {
            type: Object,
            default: undefined
        }
    },
    computed: {
        getContent(){
            if(this.block === "null" || this.block === "undefined"){
                return null;
            }else{
                return this.block.blocks;
            }
        },
        getMainTitle(){
            return this.block.mainTitle;
        },
        getSubtitle(){
            return this.block.subtitle;
        }
    }
    
    
}
</script>
<style lang="scss" scoped>

.c-content__block:nth-child(-n + 2){
    border-right: 1px solid #04244A;
}

@media only screen and (max-width: 767px) {
.c__content__img {
    width: 100%;
}
.c-content__block:nth-child(-n + 2){
    border-right: 0px solid #04244A;
    }
.c__content__img {
    margin: auto;
    display: block
    }
}



</style>