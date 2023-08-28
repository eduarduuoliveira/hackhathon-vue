<template>
  <div id="app">
    <HeaderComponent />
    <CarouselComponent />
    <AboutComponent />
    <FleetComponent />
    <WhatsAppLinkComponent />
    <RouterView />
    <LoginPage />
    <CadastroPage />
    <HomeComponent />
  </div>
</template>

<script>

import '@/style.css';
import { RouterView } from "vue-router";
import HeaderComponent from './components/HeaderComponent.vue';
import CarouselComponent from './components/CarouselComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import FleetComponent from './components/FleetComponent.vue';
import WhatsAppLinkComponent from './components/WhatsAppLink.vue';
import HomeComponent from './components/HomeComponent.vue';
import LoginPage from './components/LoginPage.vue'
import CadastroPage from './components/CadastroPage.vue'


export default {
  components: {
    HeaderComponent,
    CarouselComponent,
    AboutComponent,
    FleetComponent,
    WhatsAppLinkComponent,
    HomeComponent,
   LoginPage,
   CadastroPage,
   RouterView,
  },
};
</script>
