<template>
<div class="container-fluid">
    <div class="row">
        <div class="col">

        </div>
        <div class="col-10 pt=5 pb-5">
            <h2 v-if="getTitle !== null" class="pt-5 mb-3 text-center">{{ getTitle }}</h2>
            <section v-if="getContent !== null" class="col-8 mx-auto mb-5">
                <p class="text-center lp-5 pr-5">{{ getContent }}</p>
            </section>
            <section v-if="getButtonText !== null" class="col-8 mx-auto mb-3">
                 <router-link :to="getButtonLink" class="text-white mx-auto btn btn-primary btn-lg c__header__button mr-4" active-class="active" exact>{{ getButtonText }}</router-link>
            </section>
        </div>
        <div class="col">

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

</style>