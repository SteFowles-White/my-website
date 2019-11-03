import HomePage from '../components/pages/HomePage'
import AboutMe from '../components/pages/AboutMe'
import Work from '../components/pages/Work'
import Contact from '../components/pages/Contact'
import PageNotFound404 from '../components/pages/PageNotFound404'




// ----------------------
//    ROUTE CONTROL
// ----------------------
export const routes = [
    {path: '/', component: HomePage},
    {path: '/about-me', component: AboutMe},
    {path: '/work', component: Work},
    {path: '/contact', component: Contact},
    {path: '/*', component: PageNotFound404},
]