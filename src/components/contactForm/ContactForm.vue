<template>
<div class="container-fluid c-contact__form__container">
    <div class="row position-relative">
        <div class="c-contact__form__diagonal"></div>
        <div class="container c-contact__form__diagonal__containers">
            <div class="c-contact__form__right">
                <form>
                    <div class="form-group">
                        <label class="text-uppercase" for="firstNameInput">First Name</label>
                        <input v-model="firstName" type="text" class="form-control" id="firstNameInput" aria-describedby="First Name">
                    </div>
                    <div class="form-group">
                        <label class="text-uppercase" for="lastNameInput">Last Name</label>
                        <input v-model="lastName" type="text" class="form-control" id="lastNameInput" aria-describedby="Last Name">
                    </div>
                    <div class="form-group">
                        <label class="text-uppercase" for="exampleInputEmail1">Email address</label>
                        <input v-model="emailAddress" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label class="text-uppercase" for="message">Additional Details</label>
                        <textarea v-model="additionalDetail" class="form-control" id="Textarea" rows="3"></textarea>
                    </div>
                    <div class="form-group form-check">
                        <input v-model="checkBoxchecked" type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label  class="form-check-label text-uppercase" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="c-contact__form__left">

            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "ContactForm",
    data(){
        return {
            firstName: "",
            lastName: "",
            emailAddress: "",
            additionalDetail: "",
            checkBoxchecked: false,
        }
    }
}
</script>
<style scoped>
.c-contact__form__container{
    margin-top: 7rem;
    padding-top: 10rem;
    padding-bottom: 7rem;
    background: aliceblue;
}
.c-contact__form__diagonal{
    position: absolute;
    top: -26rem;
    background: white;
    height: 65%;
    width: 105%;
    transform: rotate(-2deg);
}
.c-contact__form__right{
    background-color: white;
    padding: 1rem;
}
.c-contact__form__left,
.c-contact__form__right {
    width: 50%;
}
.c-contact__form__diagonal__containers{
    align-items: stretch;
    display: flex;
}


</style>