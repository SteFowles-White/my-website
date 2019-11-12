<template>
<div class="container-fluid base-light-background-color">
    <div class="row">
        <div class="c-diagonal__content__container__left d-none d-lg-block">
             <img :src="require(`../../assets/img/${getImage}.jpg`)" class="img-fluid c-diagonal__img">
        </div>
        <div class="c-diagonal__content__container__right base-light-background-color p-4 p-sm-0">
            <section class="c-diagonal__content__container base-light-background-color"> 
                <div class="c-diagonal__content__container__reversed pl-sm-5 pt-sm-5 pb-sm-5 pr-sm-5 pr-md-0">
                    <div class="pl-lg-5 pr-dm-5 pr-md-0"> 
                        <h1 v-if="getTitle !== null" class="font-weight-light u__text__color__dark__blue pl-lg-5"> {{ getTitle }}</h1>
                        <h6 v-if="getSubtitle !== null" class="font-weight-bolder u__text__dark-base-green pl-lg-5 u-uppercase u-h6"> {{ getSubtitle }}</h6>
                        <p v-if="getContent !== null" class="u__text__color__dark__blue pl-lg-5 mb-5">{{ getContent }}</p>
                        <div class="pl-lg-5">
                            <router-link v-if="getButtonText !== null && getButtonLink !== null"
                                        :to="getButtonLink" 
                                        class="btn btn-lg u-button__dark__blue ">{{ getButtonText }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
</div>
  
</template>
<script>
export default {
    name: "DiagonalContent",
    props:{
        block: {
            type: Object,
            default: undefined
        }
    },
    computed: {
        getTitle(){
            if(this.block.title === null || this.block.title === undefined ) {
                return null;
            }else {
                return this.block.title;
                }
            },
        getSubtitle(){
            if(this.block.subtitle === null || this.block.subtitle === undefined ) {
                return null;
            }else {
                return this.block.subtitle;
                }
            },
        getContent(){
            if(this.block.content === null || this.block.content === undefined ) {
                return null;
            }else {
                return this.block.content;
                }
            },
        getImage(){
            if(this.block.image === null || this.block.image === undefined ) {
                return null;
            }else {
                return this.block.image;
                }
            },
        getButtonText(){
            if(this.block.buttonText === null || this.block.buttonText === undefined ) {
                return null;
            }else {
                return this.block.buttonText;
                }
            },
        getButtonLink(){
            if(this.block.buttonLink === null || this.block.buttonLink === undefined ) {
                return null;
            }else {
                return this.block.buttonLink;
                }
            }
        }
    }
</script>
<style scoped>
.c-diagonal__content__container__left {
 background-color: black;
 width: 55%
}
.c-diagonal__img{
    width: 100%;
    height: 100%;
}
.c-diagonal__content__container__right {
width: 40%;
margin-left: -13%;
transform: skewX(-15deg);
display: flex;
align-items: center;
}
.c-diagonal__content__container{
    padding-top: 5rem;
    padding-bottom: 5rem;
}
.c-diagonal__content__container__reversed{
transform: skewX(15deg);
}
@media only screen and (max-width: 992px) {
    .c-diagonal__content__container__left{
        width: 100%;
    }
    .c-diagonal__content__container__right{
    width: 100%;
    margin-left: 0%;
    transform: skewX(0deg);
    }
    .c-diagonal__content__container__reversed{
    transform: skewX(0deg);
    }
    .c-diagonal__content__container{
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    }
}

</style>