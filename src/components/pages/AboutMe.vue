<template>
    <div class="">
        <header-banner :header="getHeaderBanner"></header-banner>
        <content-block :block="getContent"></content-block>
    </div>
</template>
<script>
import JSON from "../../content";

export default {
    name: 'AboutMe',
    data() {
        return {
            AboutMeData: JSON.aboutMe
        }
    },
    computed: {
        getHeaderBanner(){
            if(this.AboutMeData.Header !== null || this.AboutMeData.Header !== undefined){
                    return this.AboutMeData.Header;
                } else {
                     return undefined;
            }
        },
        getContent(){
            if(this.AboutMeData.contentBlock !== null || this.AboutMeData.contentBlock !== undefined){
                    return this.AboutMeData.contentBlock;
                } else {
                    return undefined;
            }
        }
    } 
}
</script>
<style lang="scss" scoped>


</style>
