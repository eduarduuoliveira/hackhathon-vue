<template>
  <div id="app">
    <HeaderComponent />
    <CarouselComponent />
    <AboutComponent />
    <FleetComponent />
    <WhatsAppLinkComponent />
    <HomeComponent />
    
  
    
  </div>
</template>

<script>

import '@/style.css';

import HeaderComponent from './components/HeaderComponent.vue';
import CarouselComponent from './components/CarouselComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import FleetComponent from './components/FleetComponent.vue';
import WhatsAppLinkComponent from './components/WhatsAppLink.vue';
import HomeComponent from './components/HomeComponent.vue';



export default {
  components: {
    HeaderComponent,
    CarouselComponent,
    AboutComponent,
    FleetComponent,
    WhatsAppLinkComponent,
    HomeComponent,
  },
  name: 'App'
};
</script>
