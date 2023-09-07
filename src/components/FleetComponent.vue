<template>
    <div>
        <div class="frotas-div">
            <div class="row-container">
                <div id="frotas" class="border-top border-dark border-5">
                    <h1 class="main-title-frotas">
                        <p id="titulo-fotas" class="titulos">● NOSSAS FROTAS ●</p>
                    </h1>
                </div>

                <div class="container">
                    <p class="text-nos">
                        Veja abaixo mais informações sobre nossas frotas:
                    </p>

                </div>

                <div class="div-frotas-micro">
                  <div>
                    <h1 class="frota-micro">MICRO-ÔNIBUS:</h1>
                    <h2 class="especificacoes-micro">ANO: 2007</h2>
                    <h2 class="especificacoes-micro">MARCA: Volkswagen</h2>
                    <h2 class="especificacoes-micro">MODELO: 9-150</h2>
                    <h2 class="especificacoes-micro">CAPACIDADE: 33 lugares</h2>
                  </div>
                    <img class="img-micro-frotas" src="../img/micro.jpeg" alt="">
                </div>
                <div class="div-frotas-ducato">
                    <h1 class="frota-ducato">DUCATO:</h1>
                    <h2 class="especificacoes-ducato">ANO: 2012</h2>
                    <h2 class="especificacoes-ducato">MARCA: Fiat</h2>
                    <h2 class="especificacoes-ducato">MODELO: Ducato</h2>
                    <h2 class="especificacoes-ducato">CAPACIDADE: 16 lugares</h2>
                    <img class="img-ducato-frotas" src="../img/ducato.jpeg" alt="">
                </div>
                <div class="div-frotas-ducato">
                    <h1 class="frota-ducato">1° SPRINTER:</h1>
                    <h2 class="especificacoes-ducato">ANO: 2014</h2>
                    <h2 class="especificacoes-ducato">MARCA: Mercedes-Benz</h2>
                    <h2 class="especificacoes-ducato">MODELO: Sprinter Van</h2>
                    <h2 class="especificacoes-ducato">CAPACIDADE: 18 lugares</h2>
                    <img class="img-ducato-frotas" src="https://i.ibb.co/dKwHynC/sprinter-2015.jpg" alt="">
                </div>
                <div class="div-frotas-ducato">
                    <h1 class="frota-ducato">2° SPRINTER:</h1>
                    <h2 class="especificacoes-ducato">ANO: 2015</h2>
                    <h2 class="especificacoes-ducato">MARCA: Mercedes-Benz</h2>
                    <h2 class="especificacoes-ducato">MODELO: Sprinter Van</h2>
                    <h2 class="especificacoes-ducato">CAPACIDADE: 16 lugares</h2>
                    <img class="img-ducato-frotas" src="https://i.ibb.co/dKwHynC/sprinter-2015.jpg" alt="">
                </div>
                <div class="div-frotas-ducato">
                    <h1 class="frota-ducato">3° SPRINTER:</h1>
                    <h2 class="especificacoes-ducato">ANO: 2014</h2>
                    <h2 class="especificacoes-ducato">MARCA: Mercedes-Benz</h2>
                    <h2 class="especificacoes-ducato">MODELO: Sprinter Van</h2>
                    <h2 class="especificacoes-ducato">CAPACIDADE: 16 lugares</h2>
                    <img class="img-ducato-frotas" src="https://i.ibb.co/dKwHynC/sprinter-2015.jpg" alt="">
                </div>

            </div>
        </div>
    </div>
</template>
  
<style scoped>
#frotas {
  margin: -12% 4% 0% 4%;
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.titulos {
  padding-top: 1%;
  font-family: 'Bebas Neue', cursive;
  font-size: 2.5em;
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

.main-title-frotas {
  padding-top: 4%;
}

.frota-micro {
  font-family: 'Bebas Neue', cursive;
  font-size: 4em;
  margin-left: 8%;
  margin-top: -25%;
  display: flex;
  flex-direction: row;
}

.especificacoes-micro {
  margin-left: -65%;
}

.img-micro-frotas {
  height: 40%;
  width: 40%;
  float: right;
  margin-right: 6%;
  margin-top: -450px;
  border: solid 5px rgba(58, 57, 62, 0.76);
}

.div-frotas-micro {
  border-bottom: solid 4px gold;
  height: 80%;
  margin-left: 3%;
  margin-right: 3%;
}

.frota-ducato {
  font-family: 'Bebas Neue', cursive;
  font-size: 4em;
  margin-left: 11%;
  margin-top: 5%;
}

.especificacoes-ducato {
  margin-left: -65%;
}

.img-ducato-frotas {
  height: 40%;
  width: 40%;
  float: right;
  margin-right: 6%;
  margin-top: -450px;
  border: solid 5px rgba(58, 57, 62, 0.76);
}

.div-frotas-ducato {
  border-bottom: solid 4px gold;
  height: 80%;
  padding: 10px;
  margin: 50pxpx;
  /* Seus estilos originais aqui */
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .main-title-frotas h1,
  .frota-micro,
  .frota-ducato {
    font-size: 2.5em;
  }

  /* Ajustar tamanhos de imagem */
  .img-micro-frotas,
  .img-ducato-frotas {
    height: auto;
    width: 100%;
    margin-right: 0;
    margin-top: 0;
    max-height: 300px;
  }

  /* Ajustar margens e espaçamento */
  .div-frotas-micro,
  .div-frotas-ducato {
    margin-left: 0;
    margin-right: 0;
  }
}

@media (max-width: 768px) {
  .main-title-frotas h1,
  .frota-micro,
  .frota-ducato {
    font-size: 2.5em;
  }

  /* Ajustar tamanhos de imagem */
  .img-micro-frotas,
  .img-ducato-frotas {
    height: auto;
    width: 100%;
    margin-right: 0;
    margin-top: 0;
    max-height: 300px;
  }

  /* Ajustar margens e espaçamento */
  .div-frotas-micro,
  .div-frotas-ducato {
    margin-left: 0;
    margin-right: 0;
  }
}

@media (max-width: 768px) {

  .main-title-frotas h1,
  .frota-micro,
  .frota-ducato {
    font-size: 2em;
  }

  .img-micro-frotas,
  .img-ducato-frotas {
    height: auto;
    width: 100%;
    margin-right: 0;
    margin-top: 0;
    max-height: 300px;
  }

  .div-frotas-micro,
  .div-frotas-ducato {
    margin-left: 0;
    margin-right: 0;
    border-bottom: none;
  }

}
</style>