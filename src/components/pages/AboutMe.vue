<template>
    <div class="">
        <header-banner :header="getHeaderBanner"></header-banner>
        <simple-content-block :block="getsimpleContentBlock1"></simple-content-block>
        <simple-content-block :block="getsimpleContentBlock2"></simple-content-block>
        <simple-content-block :block="getsimpleContentBlock3"></simple-content-block>
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
        },
        getsimpleContentBlock1(){
            if(this.AboutMeData.simpleContentBlock1 !== null || this.AboutMeData.simpleContentBlock1 !== undefined){
                    return this.AboutMeData.simpleContentBlock1;
                } else {
                    return undefined;
            }
        },
        getsimpleContentBlock2(){
            if(this.AboutMeData.simpleContentBlock2 !== null || this.AboutMeData.simpleContentBlock2 !== undefined){
                    return this.AboutMeData.simpleContentBlock2;
                } else {
                    return undefined;
            }
        },
        getsimpleContentBlock3(){
            if(this.AboutMeData.simpleContentBlock3 !== null || this.AboutMeData.simpleContentBlock3 !== undefined){
                    return this.AboutMeData.simpleContentBlock3;
                } else {
                    return undefined;
            }
        }
    } 
}
</script>
<style lang="scss" scoped>


</style>
