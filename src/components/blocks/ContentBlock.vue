<template>
<div class="container-fluid c-content__container base-light-background-color">
    <div class="row">
        <div class="col d-none d-sm-block">
            <div class="c-content__left__block pl-0">
            </div>
        </div>
        <div class="col-sm-10 col-12 pb-5 pl-4 pr-4 pl-sm-0 pr-sm-0">
            <h1 v-if="getTitle !== null" class="pt-5 mb-3 c-content__header font-weight-lighter">{{ getTitle }}</h1>
            <section v-if="getContent !== null" class=" col-12 col-sm-8 mx-auto mb-5 p-0">
                <p class="text-center u__text__color__dark__blue c-content__content">{{ getContent }}</p>
            </section>
            <section v-if="getButtonText !== null" class=" col-12 col-sm-10 mx-auto mb-3 d-flex justify-content-center c-content__button__container">
                 <router-link :to="getButtonLink" class="text-white mx-auto btn u-button__dark__blue btn-lg mr-4 c-content__button" active-class="active" exact>{{ getButtonText }}</router-link>
            </section>
        </div>
        <div class="col d-none d-sm-block">
            <div class="c-content__right__block pl-0">
            </div>
        </div>
    </div>
</div>    
</template>
<script>
export default {
    name: "ContentBlock",
    props: {
        block: {
            type: Object,
            default: undefined
        }
    },
    computed: {
        getTitle(){
            if(this.block.title === undefined || this.block.title === null){
                return null;
            }else{
                return this.block.title;
            }
        },
        getContent(){
            if(this.block.content === undefined || this.block.content === null){
                return null;
            }else{
                return this.block.content;
            }
        },
        getButtonText(){
            if(this.block.buttonText === undefined || this.block.buttonText === null){
                return null;
            }else{
                return this.block.buttonText;
            }
        },
        getButtonLink(){
            if(this.block.buttonLink === undefined || this.block.buttonLink === null){
                return null;
            }else{
                return this.block.buttonLink;
            }
        }
    }
}
</script>
<style scoped>
.c-content__container{
    height: 26rem;
    margin-top: .5rem;
}
.c-content__left__block {
    width: 0;
    height: 0;
    border-top: 13rem solid transparent;
    border-left: 81px solid white;
    border-bottom: 13rem solid transparent;
    position: absolute;
    left: 0px;

}
.c-content__right__block {
    width: 0;
    height: 0;
    border-top: 13rem solid transparent;
    border-right: 81px solid white;
    border-bottom: 13rem solid transparent;
    position: absolute;
    right: 0px;
}
.c-content__button{
    width: 240px;
}
.c-content__header{
text-align: center;
}
@media only screen and (max-width: 576px) {
    .c-content__container{
        height: auto;
        margin-top: .5rem;
    }
    .c-content__button{
        width: 100%
    }
    .c-content__header,
    .c-content__content{
      text-align: left !important;
    }
    .c-content__button__container{
        padding: 0rem;
    }
}
</style>