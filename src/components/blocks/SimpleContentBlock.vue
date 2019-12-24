<template>
<div class="container mt-1">
    <div class="row c-simple-content--top-border" :class="{ c_direction : getisRevered}">
        <div class="col-md-6 c-simple-content__content__container  c-simple-content--top-border--mobile">
            <h2 class="c-simple-content__title u__text__color__dark__blue">{{ getTitle }}</h2>
            <h4 class="c-simple-content__subtitle mb-3 u__text__dark-base-green text-uppercase"> {{ getSubtitle }}</h4>
            <div class="c-simple-content__content u__text__color__dark__blue">{{getContent }}</div>
            <a  v-if ="getLink !== undefined" class="c-simple-content__button u-button base-green-background-color u__text__color__white" href="">Link</a>
        </div>
        <div class="col-md-6">
           <img v-if ="getImage !== undefined" :src="require(`../../assets/img/${getImage}.jpg`)" class="c-simple-content__img">
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
.container{
    transition: max-width 1s;
}
.c-simple-content__content__container{
}
.c-simple-content__content{
    padding-top: 1.5rem;
    font-size: 1.3rem;
    transition: padding-top 1s;
}
.c-simple-content--top-border{
    border-top: 1px solid #272733;
}
.c-simple-content__button{
    display: block;
    width: 90%;
    border-radius: .5rem;
    text-align: center;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    padding: .5rem;
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
    display: block;
    margin: auto;
    width: 100%;
    max-height: 400px;
    max-width: 400px;
}
.c_direction{
    flex-direction: row-reverse;
}

@media only screen and (max-width: 992px) {
    .c-simple-content__content{
        padding-top: .5rem;
        font-size: 1rem;
    }
}
@media only screen and (max-width: 768px) {
    .c-simple-content__content{
        padding-top: 1rem;
        font-size: 1.1rem;
    }
    .c-simple-content__button{
    width: 100%;
    }
}
@media only screen and (max-width: 576px) {
    .c-simple-content__content{
        font-size: 1rem;
    }
    .c-simple-content--top-border{
        border-top: 0px solid #272733;
    }
    .c-simple-content--top-border--mobile{
         border-top: 1px solid #272733;
    }
    .c-simple-content__content__container{
        width: 90% !important;
        margin: auto;
    }
}
</style>