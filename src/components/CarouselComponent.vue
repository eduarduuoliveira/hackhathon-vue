<template>
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
                    <img class="fotosCarrousel block w-full" src="../img/carro1.jpeg" alt="..." />
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
                    <img class="fotosCarrousel block w-full" src="../img/carro4.jpeg" alt="..." />
                    <div class="carousel-caption hidden md:block absolute text-center">


                    </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                    <img class="fotosCarrousel block w-full" src="../img/carro3.jpeg" alt="..." />
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
    </main>
</template>
  
<style scoped>
#carouselExampleCaptions {
  margin-top: 0px;
  text-align: center;
  height: 100%;
  width: 100%;
}

.carousel-inner {
  width: 100%;
  height: 100%;
}

.block w-full #home1 {
  margin-left: 10%;
}

.fotosCarrousel {
  object-fit: cover;
  height: 39em;
  width: 100%;
  margin-left: 0px;
}


@media (max-width: 768px) {
  .carousel-inner {
    height: auto;
  }
}
</style>
  
