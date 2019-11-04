<template>
<div class="container-fluid base-light-background-color">
    <div class="row pb-3 pt-3">
        <div v-for="(item, index) in getContent" class="col-md p-lg-5" :key="index">
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

// media query to centrealise img
// c__content__img


</style>