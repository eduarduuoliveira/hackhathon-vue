<template>
  <div>
    <header>
    <div>

      <nav id="navbar-example2" class="navbar border-top border-bottom border-warning  border-1 px-1 mb-3 fixed-top ">
        <a class="nav-link dropdown-toggle text-light" id="home1" href="#" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">
         ☰ 
        </a>
        <img src="./img/logo indy.png" class="carrinho" alt="" style="max-width: 10%;">
        <ul class="dropdown-menu">
          <li><a class="dropdown-item " href="#">• Frotas</a></li>
          <li><a class="dropdown-item" href="#">• Atendimento</a></li>
          <li><a class="dropdown-item" href="#">• Sobre nós</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">• Fale conosco</a></li>
        </ul>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <form class="d-flex" role="search">
              <input id="search" class="form-control me-2" type="search" placeholder="O que você procura?"
                aria-label="Search">
              <button id="buscar" class="btn btn-outline-success btn btn-outline-light" type="submit">Buscar</button>
            </form>
</li>
        </ul>
        </nav>
    </div>
  </header>
    <main>
      <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full">
          <img class="fotosCarrousel block w-full" src="./img/carro1.jpeg"  alt="..." />
          <div class="carousel-caption      .row-container{
            will-change: auto;
            transition-timing-function: ease;
            transition-duration: 0s;
            transform-origin: center center;
            transform-style: preserve-3d;
            filter: blur(0px);
            opacity: 1;
            
          } hidden md:block absolute text-center">


          </div>
        </div>
        <div class="carousel-item relative float-left w-full">
          <img class="fotosCarrousel block w-full" src="./img/carro4.jpeg"  alt="..." />
          <div class="carousel-caption hidden md:block absolute text-center">


          </div>
        </div>
        <div class="carousel-item relative float-left w-full">
          <img class="fotosCarrousel block w-full" src="./img/carro3.jpeg"  alt="..." />
          <div class="carousel-caption hidden md:block absolute text-center">


          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 w-10 p-3"
        type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span id="iconpreviou-next"
          class="carousel-control-prev-icon inline-block bg-no-repeat bg-dark text-white rounded-circle p-4"
          aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon inline-block bg-no-repeat bg-dark text-white rounded-circle p-4"
            aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="row-container">
      <div id="quemSomos" class="border-top border-dark border-5">
        <h1 class="main-title-nos">
          <p class="titulos" id="titulo-nos">● QUEM SOMOS NÓS ●</p>
        </h1>
      </div>

      <div class="container">
        <p class="text-nos">
          A IndyTour é uma empresa que tem como seu principal objetivo o transporte, sendo ele escolar, o qual é
          direcionado ao colégio IFC ARAQUARI/SC, e também ao transporte turístico.
        </p>

        <!-- <iframe class="mapaIfc" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.882221724451!2d-48.74050368502698!3d-26.394992483353278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb5609af7afc5%3A0x34c75ce16022aa6a!2sInstituto%20Federal%20Catarinense%20Campus%20Araquari!5e0!3m2!1spt-BR!2sbr!4v1665142332918!5m2!1spt-BR!2sbr" width="100%" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
        <div class="subcontainer">
          <div id="container-logo">
          <img id="foto-quem" src="./img/carro2.jpeg" alt="">
          </div>
          <div>
          <h2 class="subtitulo">
           <b>Por que contratar a IndyTour?</b>
          </h2>
          <p id="text-quem" class="text-nos">Contratar um empresa especializada em transporte escolar irá lhe oferecer
            uma maior
            segurança e sucesso em seu transporte</p></div>
        </div>

        <div class="container-topicos">
          <div class="container-inner">

            <div class="topicos">
              <h4><b>Veiculos legalizados</b></h4>
              <p class="text-topicos">Frotas de veiculos devidamente legalizados, segurasdos e registrados. Temos: Vans e Microônibus que estão sempre a disposição de nossos clientes;</p>
            </div>
          </div>
          <div class="container-inner">

            <div class="topicos">
              <h4><b>Conforto</b></h4>
              <p class="text-topicos">Veículos devidamente higiênizados, wifi gratuito por toda frota, ar condicionado
                sempre a disposição e muito conforto ao dispor de nossos clientes;</p>
            </div>
          </div>
          <div class="container-inner">

            <div class="topicos">
              <h4><b>Motoristas profissionais</b></h4>
              <p class="text-topicos">Devidamente registrados e qualificados para o atendimento de nossos clientes.</p>
            </div>


          </div>
        </div>
      </div>
    </div>


<div class="frotas-div">
    <div class="row-container">
      <div id="frotas" class="border-top border-dark border-5">
        <h1 class="main-title-frotas">
          <p id="titulo-fotas" class= "titulos">● NOSSAS FROTAS ●</p>
        </h1>
      </div>

      <div class="container">
        <p class="text-nos">
          Veja abaixo mais informações sobre nossas frotas:
        </p>

      </div>

      <div class="div-frotas-micro">
        <h1 class="frota-micro">MICRO-ÔNIBUS:</h1> 
        <h2 class="especificacoes-micro">ANO: 2007</h2>
        <h2 class="especificacoes-micro">MARCA: Volkswagen</h2>
        <h2 class="especificacoes-micro">MODELO: 9-150</h2>
        <h2 class="especificacoes-micro">CAPACIDADE: 33 lugares</h2>
        <img class="img-micro-frotas" src="./img/micro.jpeg" alt="">
      </div>
      <div class="div-frotas-ducato">
        <h1 class="frota-ducato">DUCATO:</h1> 
        <h2 class="especificacoes-ducato">ANO: 2012</h2>
        <h2 class="especificacoes-ducato">MARCA: Fiat</h2>
        <h2 class="especificacoes-ducato">MODELO: Ducato</h2>
        <h2 class="especificacoes-ducato">CAPACIDADE: 16 lugares</h2>
        <img class="img-ducato-frotas" src="./img/ducato.jpeg" alt="">
      </div>
      <div class="div-frotas-ducato">
        <h1 class="frota-ducato">1° SPRINTER:</h1> 
        <h2 class="especificacoes-ducato">ANO: 2014</h2>
        <h2 class="especificacoes-ducato">MARCA: Mercedes-Benz</h2>
        <h2 class="especificacoes-ducato">MODELO: Sprinter Van</h2>
        <h2 class="especificacoes-ducato">CAPACIDADE: 18 lugares</h2>
        <img class="img-ducato-frotas" src="./img/ducato.jpeg" alt="">
      </div>
      <div class="div-frotas-ducato">
        <h1 class="frota-ducato">2° SPRINTER:</h1> 
        <h2 class="especificacoes-ducato">ANO: 2015</h2>
        <h2 class="especificacoes-ducato">MARCA: Mercedes-Benz</h2>
        <h2 class="especificacoes-ducato">MODELO: Sprinter Van</h2>
        <h2 class="especificacoes-ducato">CAPACIDADE: 16 lugares</h2>
        <img class="img-ducato-frotas" src="./img/ducato.jpeg" alt="">
      </div>
      <div class="div-frotas-ducato">
        <h1 class="frota-ducato">3° SPRINTER:</h1> 
        <h2 class="especificacoes-ducato">ANO: 2014</h2>
        <h2 class="especificacoes-ducato">MARCA: Mercedes-Benz</h2>
        <h2 class="especificacoes-ducato">MODELO: Sprinter Van</h2>
        <h2 class="especificacoes-ducato">CAPACIDADE: 16 lugares</h2>
        <img class="img-ducato-frotas" src="./img/ducato.jpeg" alt="">
      </div>
    
  </div>
</div>
    </main>
    <div>
      <a class="whatsapp-link" href="https://wa.me/554792214606" target="_blank">
        <i class="fa fa-whatsapp"></i>
      </a>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
};
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dosis:wght@200&family=Josefin+Sans&display=swap');




#navbar-example2 {
  height: 13vh;
  margin-top: 0px;
  background-color: rgb(58, 57, 62);
}

.nav-pills {
  margin-right: 2%;
  margin-top: 1%;
}

.carrinho {
  padding-top: 0.85%;
  margin-left: 4%;
  position: absolute;
}


#carouselExampleCaptions {
  margin-top: 0px;
  text-align: center;
}

body {
  background-color: rgba(204, 204, 204, 0.685);
}

h5 {
  font-size: 200%;
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: rgb(255, 255, 255);
  text-shadow:
    -1px -1px 0px rgb(0, 0, 0),
    -1px 1px 0px rgb(0, 0, 0),
    1px -1px 0px rgb(0, 0, 0),
    1px 0px 0px rgb(0, 0, 0),
}

  .carousel-inner {
    width: 100%;
    height: 100%;
  }

  .block w-full
  #home1 {
    margin-left: 10%;
  }

  #quemSomos {
    margin-top: 5%;
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-left: 4%;
    margin-right: 4%;

  }
  #frotas{
    margin: -12% 4% 0% 4%;
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .titulos {
    padding-top: 1%;
    font-family: 'Bebas Neue', cursive;
    font-size: 2.5em;
  }


  .subtitulo {
    text-decoration: underline;
    color: gold;
    text-shadow: 1.5px 1.5px black;
  }

  .container {
    font-size: 1.3em;
    text-align: center;
    margin-bottom: 30%;
  }


  .text-nos {
    font-family: 'Dosis', sans-serif;
    font-size: 1.4em;
    padding-top: 2.5%;
    padding-bottom: 2.9%;
    font-weight: bold;
  }

  .container-inner {
    text-align: start;
    float: left;
    padding: 5%;
  }


  .container-topicos {
    padding-bottom: 10%;
    font-family: 'Dosis', sans-serif;
    float: left;
    display: grid;
    grid-template-columns: repeat(3, 33%);
  }

  .topicos {
    border-left: solid 4px gold;
    padding-left: 10px;
  }

  h2 {
    font-family: 'Dosis', sans-serif;
    margin-top: 50px;
    font-size: 2.5em;
    text-align: center;
  }



  #text-quem {
    padding-top: 25px;
  }

  #foto-quem {
    height: 52.5vh;
    border-radius: 50px;
    float: left;
  }




  .subcontainer{
    padding-bottom: 40px;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    
  }
  .fotosCarrousel{ 
    object-fit: cover;
    height: 100vh;
    width: 100%;
  }


    .whatsapp-link {
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 40px;
        right: 40px;
        background-color: #25d366;
        color: #fff;
        border-radius: 50px;
        text-align: center;
        font-size: 30px;
        box-shadow: 1px 1px 2px #888;
        z-index: 1000;
    }

.whatsapp-link:hover{
  width: 80px;
  height: 80px;
  font-size: 50px;
  color: white;
  }

    .fa-whatsapp {
        margin-top: 16px;
    }

.main-title-nos{
  padding-top: 4%;
}

.main-title-frotas{
  padding-top: 4%;
}

.frota-micro{
  font-family: 'Bebas Neue', cursive;
  font-size: 4em;
  margin-left: 8%;
  margin-top: -25%;
}

.especificacoes-micro{
    margin-left: -65%;
}

.img-micro-frotas{
    height: 80%;
    width: 50%;
    float: right;
    margin-right: 6%;
    margin-top: -450px;
    border: solid 5px rgba(58, 57, 62, 0.76);
}

.div-frotas-micro{
    border-bottom: solid 4px gold;
    height: 80%;
    margin-left: 3%;
    margin-right: 3%;
}

.frota-ducato{
    font-family: 'Bebas Neue', cursive;
    font-size: 4em;
    margin-left: 11%;
    margin-top: 5%;
  }
  
  .especificacoes-ducato{
    margin-left: -65%;  
  }
  
  .img-ducato-frotas{
    height: 80%;
    width: 50%;
    float: right;
    margin-right: 6%;
    margin-top: -450px;
    border: solid 5px rgba(58, 57, 62, 0.76);
  }
  
  .div-frotas-ducato{
    border-bottom: solid 4px gold;
    height: 80%;
    margin-left: 3%;
    margin-right: 3%;
  }
</style>