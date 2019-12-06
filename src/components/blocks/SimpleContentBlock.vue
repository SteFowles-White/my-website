<template>
<div class="container mt-5 mb-5">
    <div class="row" :class="{ c_direction : getisRevered}">
        <div class="col-md-6 c-simple-content__content__container">
            <h2 class="c-simple-content__title u__text__color__dark__blue">{{ getTitle }}</h2>
            <h4 class="c-simple-content__subtitle mb-3 u__text__dark-base-green text-uppercase"> {{ getSubtitle }}</h4>
            <div class="c-simple-content__content u__text__color__dark__blue">{{getContent }}</div>
            <a class="c-simple-content__button" href="">Link</a>
        </div>
        <div class="col-md-6">
            <img class="c-simple-content__img" src="https://source.unsplash.com/random/500x500">
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    name: 'SimpleContentBlock',
    props: {
        block: {
            type: Object,
            default: undefined
        }
    },
    computed: {
        getTitle(){
            if(this.block.title !== undefined || this.block.title !== null){
                return this.block.title;
            }else{
                return undefined;
            }
        },
        getSubtitle(){
            if(this.block.subtitle !== undefined || this.block.subtitle !== null){
                return this.block.subtitle;
            }else{
                return undefined;
            }
        },
        getContent(){
            if(this.block.content !== undefined || this.block.content !== null){
                return this.block.content;
            }else{
                return undefined;
            }
        },
        getLink(){
            if(this.block.link !== undefined || this.block.link !== null){
                return this.block.link;
            }else{
                return undefined;
            }
        },
        getLinkText(){
            if(this.block.linkText !== undefined || this.block.linkTExt !== null){
                return this.block.linkText;
            }else{
                return undefined;
            }
        },
        getImage(){
            if(this.block.image !== undefined || this.block.image !== null){
                return this.block.image;
            }else{
                return undefined;
            }
        },
        getisRevered(){
            if(this.block.reversed !== undefined || this.block.reversed !== null){
                return this.block.reversed;
            }else{
                return undefined;
            }
        },
    }
    
}
</script>
<style lang="scss" scoped>

.c-simple-content__content__container{
    border-top: 1px solid #04244A;
}
.c-simple-content__title{
    font-size: 3rem;
    font-weight: 300;
    line-height: 3.5rem;
    margin-bottom: 0rem;
}
.c-simple-content__subtitle{
    font-size:1.1rem;
    line-height: 1.5rem;
}
.c-simple-content__img{
    width: 100%;
    height: auto;
    object-fit: cover;
}
.c_direction{
    flex-direction: row-reverse;
}
</style>