<template>
  <div class="travel-cost-calculator">
    <h1>Calculadora de Custo de Viagem</h1>
    <label for="origin">Origem:</label>
    <input type="text" id="origin" v-model="origin">
    <label for="destination">Destino:</label>
    <input type="text" id="destination" v-model="destination">
    <label for="distance">Distância (km):</label>
    <input type="number" id="distance" v-model="distance">
    <label for="costPerKm">Custo por km (R$):</label>
    <input type="number" id="costPerKm" v-model="costPerKm">
    <button @click="calculateCost">Calcular</button>
    <div class="result" v-if="totalCost !== null">
      O custo da viagem de {{ origin }} para {{ destination }} é de R$ {{ totalCost.toFixed(2) }}
    </div>
    <div class="map-container">
      <iframe class="mapaIfc"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.882221724451!2d-48.74050368502698!3d-26.394992483353278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb5609af7afc5%3A0x34c75ce16022aa6a!2sInstituto%20Federal%20Catarinense%20Campus%20Araquari!5e0!3m2!1spt-BR!2sbr!4v1665142332918!5m2!1spt-BR!2sbr"
        width="100%" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
  <div class="finais">
<h1 class="tituloRedes">SIGA NOSSAS REDES SOCIAIS</h1>
  <div class="social-buttons">
    <a href="https://www.instagram.com/indy_tour/" class="social-button">
      <img src="../img/Instagram.png" alt="Instagram"> 
    </a>
    <a href="https://twitter.com/login?lang=pt" class="social-button">
      <img src="../img/twitter.png" alt="Twitter"> 
    </a>
    <a href="https://www.facebook.com/indytourjoinville/" class="social-button">
      <img src="../img/Facebook.png" alt="Facebook"> 
    </a>
    <a href="https://www.youtube.com/" class="social-button">
      <img src="../img/Youtube.png" alt="YouTube"> 
    </a>
    </div>
  </div>
</template>

<style scoped>

.tituloRedes{
 text-align: center;
 font-size: 10vh;
 font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 margin-top: 38%;
 margin-right: 20%;
}

.finais{
  display: flex;
  margin-left: 50%;
  margin-top: -70%;
border-left: solid 3px gold;
}


.social-button {
  display: inline-block;
  width: 30vh;
  height: 30vh;
  text-align: center;
  margin-top: 10%;
}

.social-button img {
  width: 20vh;
  height: 20vh;
}


.travel-cost-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 15%;
}
.map-container {
  width: 100%;
  height: 550px;
}
.travel-cost-calculator {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  margin-top: 5%;
  margin-left: 5%;
}

h1 {
  color: #f39c12;
  font-size: 24px;
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 16px;
  margin-top: 15px;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 5px;
  transition: border-color 0.3s ease-in-out;
}

input:focus {
  border-color: #f39c12;
}

button {
  background-color: #f39c12;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #e68a0e;
}

.result {
  margin-top: 20px;
  font-size: 18px;
  color: #f39c12;
}


</style>

<script>
export default {
  data() {
    return {
      origin: "",
      destination: "",
      distance: null,
      costPerKm: null,
      totalCost: null,
    };
  },
  methods: {
    calculateCost() {
      if (this.distance !== null && this.costPerKm !== null) {
        this.totalCost = this.distance * this.costPerKm;
      }
    },
  },
};
</script>