<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-4">
                <a href=""><img class="pt-1" src="https://via.placeholder.com/150x50"></a>
            </div>
            <div class="col-8">
                <nav class="nav c__nav__container">
                    <router-link to="/" class="nav-link active" active-class="active" exact>Home</router-link>
                    <router-link to="/about-me" class="nav-link active">About</router-link>
                    <router-link to="/work" class="nav-link active">Work</router-link>
                    <router-link to="/contact" class="nav-link active">Contact</router-link>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>