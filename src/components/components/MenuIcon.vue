<template>
    <div @click="toggleMenuIcon = !toggleMenuIcon">
        <div class="c__icon__top__bar" :class="{ transition__top: toggleMenuIcon }"></div>
        <div class="c__icon__middle__bar" :class="{ transition__middle: toggleMenuIcon }"></div>
        <div class="c__icon__bottom__bar" :class="{ transition__bottom: toggleMenuIcon }"></div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            toggleMenuIcon: false
        }

    }
    
}
</script>
<style scoped>
.c__icon__top__bar,
.c__icon__middle__bar,
.c__icon__bottom__bar {
    display: block;
    width: 40px;
    opacity: 1;
    height: 2px;
    background-color: white;
    margin: 9px 0px;
    transition: .5s
}
@media only screen and (max-width: 576px){ 
    .c__icon__top__bar,
    .c__icon__middle__bar,
    .c__icon__bottom__bar{
        width: 30px; 
        }
    }

    
</style>