<template>
    <header>
        <div>

            <nav id="navbar-example2" class="navbar  border-bottom border-warning  border-1 px-1 mb-3 fixed-top ">
                <img src="https://i.ibb.co/QfhqbQW/logo-indy.png" class="carrinho" alt="" style="max-width: 10%;">
                <div class="menu">
                    <button class="menu-button" @click="toggleMenu"> ☰</button>

                    <div class="dropdown-menu" :class="{ 'show': isMenuOpen }">
                        <button class="dropdown-item" @click="$router.push('/about')">Quem Somos</button>
                        <button class="dropdown-item" @click="$router.push('/fleet')">Nossas Frotas</button>
                        <button class="dropdown-item" @click="$router.push('/whatsAppLink')">Contato</button>
                    </div>
                </div>
                <div>
                    <button type="button" id="botaoInscrever" class="btn btn-outline-warning"
                        @click="$router.push('/cadastro')">Inscrever-se</button>
                    <button type="button" id="botaoLogin" class="btn btn-outline-warning"
                        @click="$router.push('/login')"> Login</button>
                </div>
            </nav>

        </div>

    </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false) 

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}
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

.btn-outline-warning {
    background-color: #231f1e;
    color: white;
    border-radius: 50px;
    margin-top: 5%;
}

#navbar-example2 {
  height: 13vh;
  margin-top: 0px;
  background-image: url('../img/./rua.jpeg');
  background-size: 130vh;
}

.nav-pills {
  margin-right: 2%;
  margin-top: 1%;
}

.carrinho {
  padding-top: 0.85%;
  margin-left: 5.7%;
  position: absolute;
  background-color: #231f1e;
  height: 11vh;
}


/* Ajustes responsivos */
@media (max-width: 768px) {
  #navbar-example2 {
    height: auto;
  }

  .carrinho {
    padding-top: 1%;
    margin-left: 2%;
    position: relative;
  }

}

@media (max-width: 768px) {
  #navbar-example2 {
    height: auto;
  }

  .carrinho {
    padding-top: 1%;
    margin-left: 2%;
    position: relative;
  }
}

@media (max-width: 768px) {
  #navbar-example2 {
    height: auto;
    padding: 10px 0;
  }

  .carrinho {
    padding-top: 1%;
    margin-left: 2%;
    position: relative;
  }

  .nav-pills {
    margin-right: 2%;
    margin-top: 1%;
  }
}
</style>