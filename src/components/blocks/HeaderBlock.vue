<template>
    <div class="c__header__containter">
        <div class="c__header__sub__container position-absolute"></div>
        <div class="container c__header__sub__content">
                <div class="col c__header__sub__content--alignment">
                     <h1 class="u-h1 text-center text-white font-weight-light col-">Creating Responsive Website Designs</h1>
                     <h3 class="u-h3 text-center text-white font-weight-light col- mb-5">Making your ideas come to light</h3>
                     <div class="container">
                        <div class="row">
                            <div class="col text-center text-white">
                                <router-link to="/work" class="text-white btn btn-primary btn-lg c__header__button mr-4" active-class="active" exact>Previous work</router-link>
                                <router-link to="/contact" class="text-white btn btn-primary btn-lg c__header__button" active-class="active" exact>Get in touch</router-link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">

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
    display: list-item;
    align-items: center
}
.c__header__button{
    width: 30%;
    background-color: inherit !important;
    border-style: solid;
    border-width: 2px;
    border-color: white;
    border: 2px solid white !important;
    transition: background-color 1s,  border-color 1s;
}
.c__header__button:hover{
    background-color: #04244A !important;
    border-color: #04244A !important;

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
@media screen and (max-width: 576px) {
.c__header__button{
    width: 80%;
    }
}


</style>