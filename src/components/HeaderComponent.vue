<template>
      
    <header>
    <div>

      <nav id="navbar-example2" class="navbar  border-bottom border-warning  border-1 px-1 mb-3 fixed-top ">
        <img src="../img/logo indy.png" class="carrinho" alt="" style="max-width: 10%;">
        <div class="menu">
          <button class="menu-button" @click="toggleMenu">☰</button>
      
          <div class="dropdown-menu" :class="{ 'show': isMenuOpen }">
            <button class="dropdown-item" @click="navigate('/about')">Quem Somos</button>
            <button class="dropdown-item" @click="navigate('/fleet')">Nossas Frotas</button>
            <button class="dropdown-item" @click="navigate('/whatsAppLink')">Contato</button>
          </div>
        </div>
        <div>
          <button type="button" id="botaoInscrever" class="btn btn-outline-warning" @click="$router.push({name: 'cadastro'})">Inscrever-se</button>
          <button type="button" id="botaoLogin" class="btn btn-outline-warning" @click="$router.push({name: 'login'})">Login</button>
    </div>
        </nav>
        
    </div>
    
  </header>
  </template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    navigate(route) {
      this.$router.push(route);
      this.isMenuOpen = false; // Fechar o menu após selecionar uma opção
    },
  },
};
</script>

<style>
.menu-button {
  background: none;
  border: none;
  font-size: 5vh;
  cursor: pointer;
  color: white;
  margin-left: 13%;
  margin-top: 15%;
}

   .btn-outline-warning{
background-color: #231f1e;
color: white;
border-radius: 50px;
margin-top: 5%;
    }

    

  
</style>