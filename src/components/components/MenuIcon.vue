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

</style>