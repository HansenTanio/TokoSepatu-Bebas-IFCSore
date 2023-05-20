<template>
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner" style="height: 500px; text-align: center;">
                <div class="carousel-item active" style=" background-color: rgb(254, 172, 208);">
                    <img style="height: 500px;" src="../../../public/carousel/1.jpg" alt="First slide">
                </div>
                <div class="carousel-item" style=" background-color: rgb(190, 16, 15)  ;">
                    <img style="height: 500px;" src="../../../public/carousel/4.jfif" alt="Third slide">
                </div>
                <div class="carousel-item" style=" background-color: rgb(19, 19, 19);">
                    <img style="height: 500px;" src="../../../public/carousel/2.jpg" alt="Second slide">
                </div>
                <div class="carousel-item" style=" background-color: rgb(227, 115, 29);">
                    <img style="height: 500px;" src="../../../public/carousel/5.jfif" alt="Third slide">
                </div>
                <div class="carousel-item" style=" background-color: rgb(150, 150, 150);">
                    <img style="height: 500px;" src="../../../public/carousel/3.jpg" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>