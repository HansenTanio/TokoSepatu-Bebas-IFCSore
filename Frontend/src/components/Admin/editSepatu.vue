<script>
    export default {
        data: function() {
            return {
                name: "",
                price: "",

            }
        },
        methods: {
            editSepatu: function(){
                const fileInput = document.getElementById('shoeImage');
                const selectedFile = fileInput.files[0];
                console.log(selectedFile);
                let formData = new FormData();
                formData.append("name", this.name);
                formData.append("file", selectedFile);
                formData.append("price", this.price);

                axios.patch("http://localhost:3000/shoe", formData, {
                    headers: {
                    "Content-Type": "multipart/form-data",
                    }
                }).then(() => {
                    window.alert("Berhasil Menambahkan Data!")
                    window.location.pathname = 'daftarSepatuAdmin'
                }).catch((err) => {
                    window.alert(err)
                });
            },
            kembali: function(){
                window.location.pathname = 'daftarSepatuAdmin'
            }
        }
    }
</script>

<template>
    <div>
        <div class="container my-2" style="width: 100%;">
            <form class="container bg-light my-5 p-4" style="border: 2px solid black; border-radius: 20px;">
                <h2>Mengedit Sepatu</h2>
                <div class="form-group">
                    <label for="inputName">Nama Produk</label>
                    <input type="text" class="form-control" id="addShoeName" v-model="name" placeholder="Nama">
                </div>
                <div class="form-group">
                    <label for="shoePrice">Harga Produk</label>
                    <input type="text" class="form-control" id="addShoePrice" v-model="price" placeholder="Harga">
                </div>
                <div class="form-group">
                    <label for="shoeImage">Gambar Produk</label><br>
                    <input type="file" id="shoeImage">
                </div>
                <a class="btn btn-secondary text-white mx-2" @click="editSepatu">Simpan</a>
                <a class="btn btn-secondary text-white mx-2" @click="kembali">Kembali</a>
            </form>
        </div>
    </div>
</template>
