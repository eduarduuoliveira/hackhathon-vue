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
  <div class="formLoSn">
 <div class="singup">
<div class="formulario">
<form>

    <h1>Sign-in:</h1>

    <label class="label_username">username</label>
    <br>
    <input class="username" type="text">
    <br>
    <label class="label_email">email</label>
    <br>
    <input class="email" type="email">
    <br>
    <label class="label_confirma_email">confirme o email</label>
    <br>
    <input class="confirma_email" type="email">
    <br>
    <label class="label_senha">senha</label>
    <br>
    <input class="senha" type="password">
    <br>
    <label class="label_confirma_senha">confirme sua senha</label>
    <br>
    <input class="confirma_senha" type="password">
    <br>
    <button class="criar" >Criar Conta</button>

    <p>Já tem uma conta? <a href="">Fazer Login!</a></p>

</form>
</div>


<div class="formularioLogin">
<form>

    <h1>Log-in:</h1>

    <label class="label_usernameL">username</label>
    <br>
    <input class="usernameL" type="text">
    <br>
    <label class="label_senhaL">senha</label>
    <br>
    <input class="senhaL" type="password">
    <br>
    <button class="entrarL">Entrar</button>

    <p class="loginB">Ainda não tem cadastro? <a href="">Cadastre-se!</a></p>

</form>
</div>
</div>
</div>
</template>

<style scoped>

.entrarL {
  background-color: #f39c12;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 39%;
}
.label_usernameL, .usernameL, .label_senhaL{
  text-align: center;
  color: white;
}

.loginB{
  text-align: center;
}

.formularioLogin{
  margin-top: -93%;
 height: 150vh;
 width: 150vh;
 margin-left: 30%;
}
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

  .singup{
    border-top: solid 3px gold;
    margin-top: 15%;
    margin-left: 2%;
    margin-right: 2%;
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

.criar {
  background-color: #f39c12;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease-in-out;
  text-align: center;
}

button:hover {
  background-color: #e68a0e;
}

.result {
  margin-top: 20px;
  font-size: 18px;
  color: #f39c12;
}

.p {
    margin-bottom: 5%;
}

.criar {
    border: 0px;
    margin-right: 8%;
    margin-top: 10px;
    border-radius: 11px;
    padding-left: 30px;
    padding-right: 30px;
}

.label_username {
    margin-right: 18%;
    color: white;
}

.label_email {
    margin-right: 24%;
    color: white;
}

.label_confirma_email {
    margin-right: 10%;
    color: white;
}

.label_senha {
    margin-right: 24%;
    color: white;
}

.label_confirma_senha {
    margin-right: 6%;
    color: white;
}

.username, .email, .confirma_email, .senha, .confirma_senha {
    border-radius: 11px;
    border: 0px;
    color: white;
}

.formLoSn{
  background-image: url(../img/carro4.jpeg);
  margin-top: 5%;
}
.formulario {
    text-align: center;
    margin-top: -20%;
    height: 150vh;
    width: 150vh;
}

form {
    background-color: #231f1e;
    margin-top: 30%;
    margin-left: 30%;
    margin-right: 30%;
    color: white;
    border-radius: 35px;
    border-color: #ffc107;
    border-style: groove;
}

h1 {
    text-align: center;
padding-top: 10px;
margin-top: 5%;
color: white;
}

    .menu-button {
  background: none;
  border: none;
  font-size: 5vh;
  cursor: pointer;
  color: white;
  margin-left: 13%;
  margin-top: 15%;
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