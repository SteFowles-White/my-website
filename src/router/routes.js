import HomePage from '../components/pages/HomePage'
import AboutMe from '../components/pages/AboutMe'
import PageNotFound404 from '../components/pages/PageNotFound404'




// ----------------------
//    ROUTE CONTROL
// ----------------------
export const routes = [
    {path: '/', component: HomePage},
    {path: '/about-me', component: AboutMe},
    {path: '/*', component: PageNotFound404},
]