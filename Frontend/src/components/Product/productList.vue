<template>
    <div>
        <div style="padding-top: 20px">
            <div class='container' style="width:300px; background-color: darkorange; color: white; text-align: center; padding: 20px 0px; border-radius: 50px;">
                <h3>Produk Terlaris</h3>
            </div>
        </div>
        <div style="width: 98%; margin: auto; padding: 50px; display: flex; flex-wrap: wrap;" :onmouseenter="this.getData"> 
            <productDetail v-for="element in this.shoeList" :imgUrl="element.url" :name="element.name" :price="element.price"></productDetail>
        </div>
    </div>
</template>