<template>
<div class="c-header__banner__container"
      :style="{ backgroundImage: 'url(' + require(`../../assets/img/${getBackgroundImage}.jpg`) + ')' }">
   <div class="c-header__banner__img"
         ></div>
   <div class="c-header__content__container">
      <div class="container c-header__full__height">
         <div class="row c-header__full__height">
            <div class="col-12 col-md  c-header__content c-header__border__right">
               <section class="pr-3 c-header__text__container">
                  <h1 class="u__text__base-light mb-4">What I do</h1>
                  <h5 class="u__text__base-light font-weight-light">Creating your designs into reality. This is done with a full set of skillsets and with a real passion for what I do.</h5>
                  <h5 class="u__text__base-light font-weight-light">From using the lasted tech skills, I can provide handle the creative needs to help drive your website and business forward.</h5>
               </section>
            </div>
            <div class="col-12 col-md c-header__content">
               <button class="text-white btn btn-lg c__header__button">More About Me</button>
            </div>
         </div>
      </div>
   </div>
</div>
</template>
<script>
export default {
    name: "HeaderBanner",
    props: {
       header: {
          type: Object,
          default: undefined
       }
    },
    computed: {
       getBackgroundImage() {
          if(this.header.backgroundImage !== undefined || this.header.backgroundImage !== null){
             return this.header.backgroundImage;
          } else {
             return undefined;
          }
       }
    }
}
</script>
<style scoped>
.c-header__banner__container {
   position: relative;
   padding-bottom: 55rem;
   background-attachment: fixed;
   background-position: 50% 100%;
   background-repeat: no-repeat;
   background-size: cover;
   overflow: hidden;
   -webkit-transition: padding-bottom 1s; /* Safari prior 6.1 */
  transition: padding-bottom 1s;
}
.c-header__banner__img{
   width: 100%;
   height: auto;
   z-index: 100;
}
.c-header__content__container{
   position: absolute;
   top: 0px;
   left: 0px;
   width: 100%;
   height: 100%;
   padding: 4rem 3rem 3rem 3rem;
   -webkit-transition: padding 1s; /* Safari prior 6.1 */
   transition: padding 1s;
}
.c-header__full__height{
   height: 100%;
   align-items: center;
}
.c-header__border__right {
    border-right: 1px solid white;
    padding-top: 2rem;
    padding-bottom: 2rem;
   -webkit-transition: border-right 1s; /* Safari prior 6.1 */
   transition: border-right 1s;
}
.c__header__button{
   display: block;
   margin: auto;
   width: 300px;
   border: 1px solid white;
   background-color: inherit;
   border-radius: 5px;
   text-transform: uppercase;
   -webkit-transition: background-color 1s; /* Safari prior 6.1 */
  transition: background-color 1s;
}
   .c-header__text__container h1 {
      font-size: 2.5rem;
   }
   .c-header__text__container h5{
      font-size: 1.25rem;
      line-height: 1.6rem;
      -webkit-transition: font-size 1s, line-height 1s;/* Safari prior 6.1 */
      transition: font-size 1s, line-height 1s;
   }
@media only screen and (max-width: 992px) {
   .c-header__banner__container {
      padding-bottom: 40rem;
      background-attachment: inherit;
   }
   .c-header__content__container{
        padding: 5rem 3rem 1rem 3rem;
   }
   .c__header__button{
      font-size:1rem;
      width:250px;
   }
   .c-header__text__container h1 {
      font-size: 2rem;
   }
   .c-header__text__container h5{
      font-size: 1rem;
      line-break: 1.3rem;
   }
}
@media only screen and (max-width: 767px) {
   .c-header__banner__container {
      padding-bottom: 30rem;
   }
   .c__header__button{
      background-color: #04244A;
   }
   .c-header__border__right {
      border-right: 1px solid white;
      padding-top: 0rem;
      padding-bottom: 0rem;
   }
   .c-header__content__container{
        padding: 5rem 1.5rem 1rem 1.5rem;
   }
   .c-header__border__right {
      border-right: 0px;
   }
   .c-header__text__container{
      text-align: center;
   }
   .c-header__text__container h5{
      font-size: 1.2rem;
      line-break: 1.6rem;
   }
    .c__header__button{
      font-size:1rem;
      width:250px;
   }
}
@media only screen and (max-width: 576px) {
   .c-header__text__container h5{
      font-size: 1rem;
      line-break: 1.3rem;
   }
}

</style>