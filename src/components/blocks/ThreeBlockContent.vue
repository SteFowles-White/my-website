<template>
<div class="container-fluid base-light-background-color">
    <div class="row pb-2 pt-3">
        <p class="u-h2 pl-3 pb-2 font-weight-normal">How I work</p>
    </div>
    <div class="row pb-3">

        <div v-for="(item, index) in getContent" class="col-md c__content__block" :key="index">
            <img :src="require(`../../assets/img/${item.thumbnail}.jpg`)" class="img-fluid mb-2 c__content__img">
            <p class="u__text__color__dark__blue u-h4 font-weight-normal text-center">{{ item.title }}</p>
            <p class="u__text__color__dark__blue h-h5 font-weight-light"> {{ item.content }}</p>
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
    data() {
        return {
            content: {
                firstBlock: {
                    thumbnail: "understand-your-website",
                    heading: "Understading your website",
                    content: "We can work together to understand what you want your website message to be to esure your visors get the best expereince on your website"
                }
            }
        }
    },
    computed: {
        getContent(){
            if(this.block === "null" || this.block === "undefined"){
                return null;
            }else{
                // console.log(this.block.blockOne.img)
                return this.block;
            }
        }
    }
    
    
}
</script>
<style lang="scss" scoped>

.c__content__block:nth-child(-n + 2){
    border-right: 1px solid #04244A;
}

@media only screen and (max-width: 767px) {
.c__content__img {
    width: 100%;
}
.c__content__block:nth-child(-n + 2){
    border-right: 0px solid #04244A;
    }
.c__content__img {
    margin: auto;
    display: block
    }
}



</style>