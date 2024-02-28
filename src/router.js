import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import ChiSiamo from './pages/ChiSiamo.vue';
import Cocktails from './pages/Cocktails.vue';
import SingleCocktail from './pages/SingleCocktail.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/cocktails',
            name: 'cocktails',
            component: Cocktails
        },
        {
            path: '/single-cocktail',
            name: 'single-cocktails',
            component: SingleCocktail
        },


        {
            path: '/chi-siamo',
            name: 'chi-siamo',
            component: ChiSiamo
        },

       
    ]
       
});

export { router }