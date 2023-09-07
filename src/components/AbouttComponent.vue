<script setup>

</script>

<template>
  <div>
            <div class="row-container">
          <div id="quemSomos" class="border-top border-dark border-5">
            <h1 class="main-title-nos">
              <p class="titulos" id="titulo-nos">● QUEM SOMOS NÓS ●</p>
            </h1>
          </div>

    <div class="container">
            <p class="text-nos">
              A IndyTour é uma empresa que tem como seu principal objetivo o transporte, sendo ele escolar, o qual é
              direcionado ao colégio IFC ARAQUARI/Sc, e também ao transporte turístico.
            </p>


            <div class="subcontainer">
              <div id="container-logo">
              <img id="foto-quem" src="../img/carro2.jpeg" alt="">
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

        </div> 
</template>

<style scoped>

#quemSomos {
  margin-top: 5%;
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-left: 4%;
  margin-right: 4%;

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

.subcontainer {
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(2, 50%);

}

.main-title-nos {
  padding-top: 4%;
}

@media (max-width: 768px) {

  .main-title-nos h1 {
    font-size: 2.5em;
  }
}

@media (max-width: 768px) {
  .main-title-nos h1,

  .container-topicos {
    display: block;
    text-align: center;
  }

  .container-inner {
    float: none;
    padding: 0;
  }
}
</style>



