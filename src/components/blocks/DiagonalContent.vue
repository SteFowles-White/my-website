<template>
<div class="container-fluid">
    <div class="row">
        <div class="c-diagonal__content__container__left">

        </div>
        <div class="c-diagonal__content__container__right">
            <section class="c-diagonal__content__container"> 
                <div class="c-diagonal__content__container__reversed pl-5 pt-5 pb-5">
                    <div class="pl-5"> 
                        <h2 v-if="getTitle !== null"> {{ getTitle }}</h2>
                        <h5 v-if="getSubtitle !== null"> {{ getSubtitle }}</h5>
                        <p v-if="getContent !== null">{{ getContent }}</p>
                         <router-link v-if="getButtonText !== null && getButtonLink !== null"
                                     :to="getButtonLink" 
                                     class="">{{ getButtonText }}
                        </router-link>
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
.c-diagonal__content__container__right {
width: 40%;
margin-left: -8%;
transform: skewX(-20deg);
background-color: white;
}
.c-diagonal__content__container{
    padding-top: 5rem;
    padding-bottom: 5rem;
}
.c-diagonal__content__container__reversed{
transform: skewX(20deg);

}

</style>