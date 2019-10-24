<template>
    <div class="container-fluid c__nav">
        <div class="navbar navbar-expand-md">
            <a href=""><img class="pt-1 pb-1 c__nav__logo" src="../../assets/icons/logo.png"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <menu-icon></menu-icon>
            </button>
            <nav class="collapse navbar-collapse c__nav__container">
                <router-link to="/" class="nav-link active c__nav__links" active-class="active" exact>Home</router-link>
                <router-link to="/about-me" class="nav-link active c__nav__links">About</router-link>
                <router-link to="/work" class="nav-link active c__nav__links">Work</router-link>
                <router-link to="/contact" class="nav-link active c__nav__links">Contact</router-link>
            </nav>
        </div>
    </div>
</template>
<script>
import MenuIcon from '../components/MenuIcon'

export default {
    components: {
        MenuIcon
    }
    
}
</script>