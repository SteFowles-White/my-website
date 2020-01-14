<template>
    <div class="">
        <header-banner :header="getContactData"></header-banner>
    </div>
</template>
<script>
import JSON from "../../content";

export default {
    name: "contactMe",
    data() {
        return {
            contactMe: JSON.contactMe
        }
    },
    computed: {
        getData(){
            if (this.contactMe !== null || this.contactMe !== undefined){
                return this.contactMe;
                }
            else {
                return undefined;
            }
        },
        getContactData(){
            return this.getData.header;
        }

    }
    
}
</script>