import { createRouter, createWebHistory } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import CarouselComponent from './components/CarouselComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import FleetComponent from './components/FleetComponent.vue';
import WhatsAppLinkComponent from './components/WhatsAppLink.vue';
import HomeComponent from './components/HomeComponent.vue';


const routes = [
    {
        path: '/whatsapplink',
        component: WhatsAppLinkComponent
    },
    {
        path: '/fleet',
        component: FleetComponent
    },
    {
        path: '/about',
        component: AboutComponent
    },
    {
        path: '/carousel',
        component: CarouselComponent
    },
    {
        path: '/header',
        component: HeaderComponent
    },
    {
        path: '/home',
        component: HomeComponent
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router; // Exporte o objeto router diretamente