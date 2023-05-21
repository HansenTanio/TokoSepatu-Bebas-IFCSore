<script>
import detailSepatuAdmin from './detailSepatuAdmin.vue';

export default {
    components: {
    detailSepatuAdmin
},
    data: function () {
        return {
            shoeList: [],
        }
    },
    methods: {
        getData: function(){
            axios.get("http://localhost:3000/shoes")
            .then((res) => {
                this.shoeList = res.data
            }).catch((err) => {
                console.log(err);
            });
        },
        addData: function(){
            window.location.pathname = 'tambahSepatu'
        }
    }
}
</script>
<template>
    <div>
        <div style="padding-top: 20px">
            <div style="margin: 0px 100px;">
                <button @click="addData" class="btn btn-primary">+ Tambah Sepatu Baru</button>
            </div>
        </div>
        <div style="width: 98%;margin: auto; padding: 50px; display: flex; flex-wrap: wrap;" :onmouseenter="this.getData"> 
            <detailSepatuAdmin v-for="element in this.shoeList" :imgUrl="element.url" :name="element.name" :price="element.price" :shoeId="element.shoeId"></detailSepatuAdmin>
        </div>
    </div>
</template>