<template>
    <div>
        <navigation v-if="isFixed === true" class="c-nav c-nav--fixed" :style="{'top': fixedNav}"></navigation>
        <navigation v-else class="c-nav" :style="{'top': defaultNav }"></navigation>
    </div>
</template>
<script>
export default {
    data(){
        return{
            fixedNav: "0",
            defaultNav: "0",
            isFixed: false
        }
    },  
    methods: {
        scrollDown() {
             if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 90 ) {
                 this.fixedNav = "0px";
                 this.isFixed = true;
             }else {
                 this.fixedNav = "-90px";
                 this.isFixed = false;
             }
         }
    },
    created() {
        window.addEventListener('scroll', this.scrollDown);
        },
     destroyed() {
        window.removeEventListener('resize', this.scrollDown);
         },
}
</script>
<style scoped>
.c-nav--fixed {
    background-color: rgba(0,0,0, .3) !important;
    position: fixed !important;
}

</style>