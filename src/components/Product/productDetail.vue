<script>
export default {
    props: ['imgUrl','name', 'price'],
    data: function(){
        return {
            imgUrl: this.imgUrl,
            name: this.name,
            price: this.price,
            rating: (Math.floor(Math.random() * (5 - 3) ) + 3) + (Math.floor(Math.random() * 10 )) / 10,
            sold: Math.floor(Math.random() * 101),
        }
    },
}
</script>
<template>
    <div>
        <div class="card" style="width: 15rem; height: 30rem; margin: 10px;">
            <div class="container"> 
                <img class="card-img-top" :src="imgUrl" alt="Shoe Image">
            </div>
            <div class="card-body">
                <h5 class="card-name" style="font-weight: bold;" :innerHTML="name"></h5>
                <h5 class="card-text" style="font-weight: bold;" >Rp. <span :innerHTML="price"></span></h5>
                <p>&#11088<span :innerHTML="rating"></span> | Terjual <span :innerHTML="sold"></span></p>
            </div>
        </div>
    </div>
</template>