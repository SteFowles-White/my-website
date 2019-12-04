<template>
    <div class="">
        <header-banner :header="getHeaderBanner"></header-banner>
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
        }
    } 
}
</script>