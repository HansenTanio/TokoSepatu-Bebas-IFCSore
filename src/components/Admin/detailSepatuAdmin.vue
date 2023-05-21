<script>
export default {
    props: ['shoeId','imgUrl','name', 'price'],
    data: function(){
        return {
            shoeId : this.shoeId,
            imgUrl: this.imgUrl,
            name: this.name,
            price: this.price,
        }
    },
    methods: {
        deleteid: function() {
            const judoel = this.name
            axios.delete(`http://localhost:3000/shoe/${this.shoeId}`)
            .then(function (response) {
                window.alert(judoel + " successfully deleted")
            })
            .catch(function (error) {
                window.alert("Error")
                console.log(error)
            })
        },
        editdata: function() {
            window.location.pathname = 'editSepatu'
        }
    }}
</script>

<template>
    <div>
        <div class="card" style="width: 15rem; height: 35rem; margin: 10px;">
            <div class="container"> 
                <img class="card-img-top" :src="imgUrl" alt="Shoe Image">
            </div>
            <div class="card-body kartubody">
                <h5 class="card-name" style="font-weight: bold;" :innerHTML="name"></h5>
                <h5 class="card-text" style="font-weight: bold;" >Rp. <span :innerHTML="price"></span></h5>
                <button @click="editdata" class="btn btn-primary">Edit</button>
                <button @click="deleteid" class="btn btn-primary ml-2">Delete</button>
            </div>
        </div>
    </div>
</template>


