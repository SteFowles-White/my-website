<template>
<div class="c-footer base-dark-blue-background-color">
    <div class="row m-0">
        <div class=" col-12 col-md c-footer__logo">
            <a href="" class="c__nav__logo p-2"><img class="pt-1 pb-1 c-footer__logo__img" src="../../assets/icons/logo.png"></a>
        </div>
        <div class="col-12 col-md-6 c-footer__links pb-3 pb-md-0">
            <a href="https://www.linkedin.com/in/stephen-fowles-white/" class="nav-link active c-nav__links u-h4">Linked</a>
            <router-link to="/contact" class="nav-link active c-nav__links u-h4">Contact Me</router-link>
        </div>
        <div class="col-12 col-md c-footer__links__left">
            <p class="c-nav__links u-h6 mr-3">Website built: November 2019</p>
            <p class="c-nav__links u-h6">Last modified: {{ lastModified }}</p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "TheSiteFooter",
    computed: {
        lastModified(){
            return document.lastModified;
        }
    }
}
</script>
<style lang="scss" scoped>
.c-footer__logo{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.c-footer__logo__img{
    height: 80px;
}
.c-footer {
    width: 100%;
    height: 100%;
}
.c-footer__links {
    display: flex;
    align-items: center;
    justify-content: center;
}
.c-footer__links__left{
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
@media only screen and (max-width: 720px) {
    .c-footer__logo{
        justify-content: center;
    }
}
</style>