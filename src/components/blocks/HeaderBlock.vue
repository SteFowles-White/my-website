<template>
    <div class="c__header__containter">
        <div class="c__header__sub__container position-absolute"></div>
        <div class="container c__header__sub__content">
                <div class="col c__header__sub__content--alignment">
                     <h1 class="u-h1 text-center text-white font-weight-light">Creating Responsive Design Using HTML, CSS & Javascript</h1>
                </div>
        </div>
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

.c__header__sub__container {
    background-color: black;
    opacity: 1;
    width: 100%;
    height: 100%;
    -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 3s; /* Firefox < 16 */
    -ms-animation: fadein 3s; /* Internet Explorer */
    -o-animation: fadein 3s; /* Opera < 12.1 */
    animation: fadein 3s forwards;
}
.c__header__sub__content{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center
}
.c__header__sub__content--alignment{
    display: flex;
    align-items: center
}
@media screen and (min-width: 768px) {
.c__header__containter{
    background-attachment: fixed;
    }
}
@keyframes fadein {
    from {opacity: 1;
        background-color: black}
    to {opacity: 0;
        background-color: inherit}
}


</style>