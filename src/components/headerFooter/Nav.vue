<template>
    <div class="container-fluid c__nav__container">
        <div class="navbar navbar-expand-md">
            <a href=""><img class="pt-1 pb-1 c-nav__logo" src="../../assets/icons/logo.png"></a>
            <button @click="mobileNavVeiw = !mobileNavVeiw" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <menu-icon></menu-icon>
            </button>
            <nav class="navbar-collapse navbar c-nav__container d-none d-md-block mr-lg-4">
                <router-link to="/" class="nav-link active c-nav__links" active-class="active" exact>Home</router-link>
                <router-link to="/about-me" class="nav-link active c-nav__links">About</router-link>
                <router-link to="/work" class="nav-link active c-nav__links">Work</router-link>
                <router-link to="/contact" class="nav-link active c-nav__links">Contact</router-link>
            </nav>
            <transition name="slide">
                <nav v-show="mobileNavVeiw"  class="c-nav__container__mobile d-md-none">
                    <div :class="{ c_nav__mobile: delayedView }">
                        <div class="nav-link active c-nav__links d-md-none pt-3 pb-3">
                            <button @click="mobileNavVeiw =!mobileNavVeiw" class="d-block "><img class="c_nav__mobile__button" src="../../assets/icons/cross-icon.png"></button>
                        </div>
                        <router-link to="/" class="nav-link active c-nav__links__mobile c_nav__mobile__border__one" active-class="active" exact>Home</router-link>
                        <router-link to="/about-me" class="nav-link active c-nav__links__mobile c_nav__mobile__border__two">About</router-link>
                        <router-link to="/work" class="nav-link active c-nav__links__mobile c_nav__mobile__border__two">Work</router-link>
                        <router-link to="/contact" class="nav-link active c-nav__links__mobile c_nav__mobile__border__two">Contact</router-link>
                    </div>
                </nav>
            </transition>
        </div>
    </div>
</template>
<script>
import MenuIcon from '../components/MenuIcon'


export default {
    data(){
        return{
            mobileNavVeiw: false,
            width: 0,
            fixedNav: "0"
        }
    },
    components: {
        MenuIcon,
    },   
    methods: {
        delayedView(){
            if (!this.mobileNavVeiw) {
                setTimeout(function() {
                    return false;
                }, 500);
            }else{
                return this.mobileNavVeiw;
            }
        },
        handleResize() {
             this.width = window.innerWidth;
             if(this.width > 767){
                this.mobileNavVeiw = false;
            }
         }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        },
     destroyed() {
        window.removeEventListener('resize', this.handleResize);
         },
}
</script>
<style scoped lang="scss">

.c__nav__container {
    z-index: 900;
}

.slide-enter-active {
    animation: slider-in .8s ease-out forwards; 
}
.slide-leave-active {
    animation: slider-out .8s ease-out forwards; 
}

@keyframes slider-in {
    from {transform: translateX(345px)}
    to { transform: translateX(0px);}
}
@keyframes slider-out {
    from {transform: translateX(0px)}
    to { transform: translateX(345px);}
}
</style>