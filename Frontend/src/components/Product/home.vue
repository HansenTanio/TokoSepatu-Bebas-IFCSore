<script>
import productDetail from './productDetail.vue';
export default {
    components: {
        productDetail
    },
    data: function () {
        return {
            shoeList: [],
        }
    },
    methods: {
        getData: function(){
            axios.get("http://localhost:3000/popular")
            .then((res) => {
                this.shoeList = res.data
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>
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
                    <img style="height: 500px;" src="../../../carousel/1.jpg" alt="First slide">
                </div>
                <div class="carousel-item" style=" background-color: rgb(190, 16, 15)  ;">
                    <img style="height: 500px;" src="../../../carousel/4.jfif" alt="Third slide">
                </div>
                <div class="carousel-item" style=" background-color: rgb(19, 19, 19);">
                    <img style="height: 500px;" src="../../../carousel/2.jpg" alt="Second slide">
                </div>
                <div class="carousel-item" style=" background-color: rgb(227, 115, 29);">
                    <img style="height: 500px;" src="../../../carousel/5.jfif" alt="Third slide">
                </div>
                <div class="carousel-item" style=" background-color: rgb(150, 150, 150);">
                    <img style="height: 500px;" src="../../../carousel/3.jpg" alt="Third slide">
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
        
        <div class="features">
            <div class="feature">
                <img src="../../../icons/shipping.png" alt="" class="featureIcon">
                <span class="featureTitle">FREE ONGKIR</span>
                <span class="featureDesc">Free Ongkir untuk semua orderan.</span>
            </div>
            <div class="feature">
                <img class="featureIcon" src="../../../icons/return.png" alt="">
                <span class="featureTitle">30 HARI PENGEMBALIAN</span>
                <span class="featureDesc">Pengembalian dalam 30 hari</span>
            </div>
            <div class="feature">
                <img class="featureIcon" src="../../../icons/gift.png" alt="">
                <span class="featureTitle">KUPON PEMBELIAN</span>
                <span class="featureDesc">Beli Kupon untuk mendapatkan promo menarik.</span>
            </div>
            <div class="feature">
                <img class="featureIcon" src="../../../icons/contact.png" alt="">
                <span class="featureTitle">CONTACT US!</span>
                <span class="featureDesc">Kontak kami dapat melalui via email.</span>
            </div>
        </div>

        <div style="padding-top: 20px">
            <div class='container' style="width:300px; background-color: darkorange; color: white; text-align: center; padding: 20px 0px; border-radius: 50px;">
                <h3>Produk Terlaris</h3>
            </div>
        </div>
        <div style="width: 98%; margin: auto; padding: 50px; display: flex; flex-wrap: wrap;" :onmouseenter="this.getData"> 
            <productDetail v-for="element in this.shoeList" :imgUrl="element.url" :name="element.name" :price="element.price"></productDetail>
        </div>
        
        <div class="gallery">
            <div class="galleryItem">
                <h1 class="galleryTitle">Jadilah Diri Sendiri!</h1>
                <img src="../../../pict/rel.jpg"
                    alt="" class="galleryImg">
            </div>
            <div class="galleryItem">
                <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="" class="galleryImg">
                <h1 class="galleryTitle">Hari Pertama di Akhir Pekan</h1>
            </div>
            <div class="galleryItem">
                <h1 class="galleryTitle">Ayo Lakukan!</h1>
                <img src="../../../pict/justdoit.jpg"
                    alt="" class="galleryImg">
            </div>
        </div>

        <div class="newSeason">
            <div class="nsItem">
                <img src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="" class="nsImg">
            </div>
            <div class="nsItem">
                <h3 class="nsTitleSm">EVENT YANG AKAN MENDATANG</h3>
                <h1 class="nsTitle">Season Baru</h1>
                <h1 class="nsTitle">Koleksi Terbaru</h1>
                <a href="/">
                    <button class="nsButton">PILIHLAH GAYA BARU</button>
                </a>
            </div>
            <div class="nsItem">
                <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="" class="nsImg">
            </div>
        </div>
        <footer>
            <div class="footerLeft">
                <div class="footerMenu">
                    <h1 class="fMenuTitle">Tentang Kami</h1>
                    <ul class="fList">
                        <li class="fListItem">Bebas Shop</li>
                        <li class="fListItem">Toko Sepatu Baru</li>
                        <li class="fListItem">Kurir</li>
                        <li class="fListItem">Kontak Kami : <br>0123456789</li>
                    </ul>
                </div>
                <div class="footerMenu">
                    <h1 class="fMenuTitle">Link</h1>
                    <ul class="fList">
                        <li class="fListItem">Support</li>
                        <li class="fListItem">Pengembalian</li>
                        <li class="fListItem">Cerita</li>
                        <li class="fListItem">Masukan</li>
                        <li class="fListItem">FAQ</li>
                    </ul>
                </div>
                <div class="footerMenu">
                    <h1 class="fMenuTitle">Produk</h1>
                    <ul class="fList">
                        <li class="fListItem">Adidas</li>
                        <li class="fListItem">Homyped</li>
                        <li class="fListItem">League</li>
                        <li class="fListItem">Crater</li>
                        <li class="fListItem">Nike</li>
                    </ul>
                </div>
            </div>
            <div class="footerRight">
                <div class="footerRightMenu">
                    <h1 class="fMenuTitle">Follow Kami</h1>
                    <div class="fIcons">
                        <img src="../../../icons/instagram.png" alt="" class="fIcon">
                        <img src="../../../icons/facebook.png" alt="" class="fIcon">
                        <img src="../../../icons/whatsapp.png" alt="" class="fIcon">
                        <img src="../../../icons/twitter.png" alt="" class="fIcon">
                    </div>
                </div>
                <div class="footerRightMenu">
                    <span class="copyright"><img src="../../../icons/logocopyright.png" alt="" class="logocopy"> Bebas Shop 2023</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<style>
.features {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.featureIcon {
  width: 50px;
  height: 50px;
}

.featureTitle {
  font-size: 20px;
  font-weight: 600;
  margin: 20px;
}

.featureDesc {
  color: gray;
  width: 50%;
  height: 100px;
}

.gallery {
  padding: 50px;
  display: flex;
}

.galleryItem {
  flex: 1;
  padding: 50px;
}

.galleryImg {
  width: 100%;
}

.newSeason {
  display: flex;
}

.nsItem {
  flex: 1;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.nsImg {
  width: 100%;
  height: 500px;
}

.nsTitle {
  font-size: 40px;
}

.nsButton {
  padding: 15px;
  font-weight: 600;
  cursor: pointer;
}

footer {
  display: flex;
}

.footerLeft {
  flex: 2;
  display: flex;
  justify-content: space-between;
  padding: 50px;
}

.fMenuTitle {
  font-size: 16px;
}

.fList {
  padding: 0;
  list-style: none;
}

.fListItem {
  margin-bottom: 10px;
  color: goldenrod;
  cursor: pointer;
}

.footerRight {
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.fInput {
  padding: 5px;
}

.fButton {
  padding: 5px;
  background-color: black;
  color: white;
}

.fIcons{
  display: flex;
}

.fIcon{
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.copyright{
  font-size: medium;
  height: 20px;
}

.logocopy{
  width: 20px;
}
@media screen and (max-width:480px) {
  nav{
    padding: 20px;
  }

  .search{
    display: none;
  }

  .navBottom{
    flex-wrap: wrap;
  }

  .menuItem{
    margin: 20px;
    font-weight: 700;
    font-size: 20px;
  }

  .slider{
    clip-path: none;
  }

  .sliderImg{
    width: 90%;
  }

  .sliderBg{
    width: 100%;
    height: 100%;
  }

  .sliderTitle{
    display: none;
  }

  .sliderPrice{
    top: unset;
    bottom: -50;
    left: 0;
    background-color: lightgrey;
  }

  .buyButton{
    right: 0;
    top: 0;
  }

  .features{
    flex-direction: column;
  }

  .product{
    clip-path: none ;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .productImg{
    width: 80%;
  }

  .productDetails{
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    top: 0;
  }

  .productTitle{
    font-size: 50px;
    margin: 0;
  }

  .gallery{
    display: none;
  }

  .newSeason{
    flex-direction: column;
  }

  .nsItem:nth-child(2){
    padding: 50px;
  }

  footer{
    flex-direction: column;
    align-items: center;
  }

  .footerLeft{
    padding: 20px;
    width: 90%;
  }

  .payment{
    width: 90%;
    padding: 20px;
  }
}
</style>