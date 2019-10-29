<template>
    <div class="container-fluid c__nav">
        <div class="navbar navbar-expand-md">
            <a href=""><img class="pt-1 pb-1 c__nav__logo" src="../../assets/icons/logo.png"></a>
            <button @click="mobileNavVeiw = !mobileNavVeiw" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <menu-icon></menu-icon>
            </button>
             <nav class="navbar-collapse c__nav__container d-none d-md-block">
                    <router-link to="/" class="nav-link active c__nav__links" active-class="active" exact>Home</router-link>
                    <router-link to="/about-me" class="nav-link active c__nav__links">About</router-link>
                    <router-link to="/work" class="nav-link active c__nav__links">Work</router-link>
                    <router-link to="/contact" class="nav-link active c__nav__links">Contact</router-link>
                </nav>
            <transition name="slide">
                <nav v-show="mobileNavVeiw"  class="c__nav__container__mobile d-md-none">
                    <div :class="{ c__nav__mobile: delayedView }">
                        <div class="nav-link active c__nav__links d-md-none pt-3 pb-3">
                            <button @click="mobileNavVeiw =!mobileNavVeiw" class="d-block">clck here</button>
                        </div>
                        <router-link to="/" class="nav-link active c__nav__links" active-class="active" exact>Home</router-link>
                        <router-link to="/about-me" class="nav-link active c__nav__links">About</router-link>
                        <router-link to="/work" class="nav-link active c__nav__links">Work</router-link>
                        <router-link to="/contact" class="nav-link active c__nav__links">Contact</router-link>
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
            width: 0
        }
    },
    components: {
        MenuIcon
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
         }
    },
    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
        },
  destroyed() {
        window.removeEventListener('resize', this.handleResize)
         },
}
</script>
<style scoped>
.slide-enter-active {
    animation: slider-in .9s ease-out forwards; 
}
.slide-leave-active {
    animation: slider-out .9s ease-out forwards; 
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