<template>
    <div class="c__header__containter">
        <!-- <img src="../../assets/img/header_block.jpg"> -->
        <p>test text</p>
        <p>test text</p>
        <p>test text</p>
        <p>test text</p>
        <p>test text</p>
        <p>test text</p>
        <p>test text</p>
        <p>test text</p>
        <p>test text</p>

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.c__header__containter {
    background : url("../../assets/img/headerBlock.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    overflow: hidden;
}


@media screen and (min-width: 768px) {
.c__header__containter{
    background-attachment: fixed;
    }
}

</style>