<template>
<div class="container mt-4">
    <div class="row">
        <div class="col-md-6 c-simple-content__content__container">
            <h2 class="c-simple-content__title u__text__color__dark__blue">HTML & CSS</h2>
            <h4 class="c-simple-content__subtitle mb-5 u__text__dark-base-green">Foundations of Web Design</h4>
            <div class="c-simple-content__content u__text__color__dark__blue">Some text</div>
            <a class="c-simple-content__button" href="">Link</a>
        </div>
        <div class="col-md-6">
            <img class="c-simple-content__img" src="https://source.unsplash.com/random/500x500">
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    name: 'SimpleContentBlock'
    
}
</script>
<style lang="scss" scoped>

.c-simple-content__content__container{
    border-top: 1px solid #04244A;
}
.c-simple-content__title{
    font-size: 3rem;
    font-weight: 300;
    line-height: 3.5rem;
    margin-bottom: 0rem;
}
.c-simple-content__subtitle{
    font-size:1.2rem;
    line-height: 1.5rem;
}
.c-simple-content__img{
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>