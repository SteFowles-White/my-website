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
.c-nav{
    transition-delay: 2s;
    -webkit-animation: fade 4s forwards; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fade 4s forwards; /* Firefox < 16 */
    -ms-animation: fade 4s forwards; /* Internet Explorer */
    -o-animation: fade 4s forwards; /* Opera < 12.1 */
    animation: fade 4s forwards;
}
@keyframes fade {
    from {opacity: 0;}
    to {opacity: 1;}
}
</style>