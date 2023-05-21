<script>
export default {
        data: function(){
            return {
                username: "",
                password: ""
            }
        },        
        methods: {
            login: function(){
                if (this.username == "" || this.password == ""){
                    window.alert("Login Failed!")
                }
                else if(this.username == "ADMIN" && this.password == "ADMIN"){
                    window.alert("Login Success!")
                    window.location.pathname = 'daftarSepatuAdmin'
                }
                else if(this.username && this.password){
                    axios.post("http://localhost:3000/login", {
                        username: this.username,
                        password: this.password
                    }).then(() => {
                        window.alert("Login Success!")
                        window.location.pathname = 'home'
                    }).catch((err) => {
                        window.alert("Username atau Password tidak valid!")
                    });
                }
            }
        }
    }
</script>
<template>
    <div style="display: center;">
        <div class="container col-sm-4 bg-light" style="height: 50%; margin: auto;margin-top: 120px;width: 50%;border: 3px solid darkorange;padding: 20px;border-radius: 30px;">
            <div class="mx-auto col-sm-4" style="font-size: 30px; font-weight: bold;">
                Login
            </div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" id="username" v-model="username" placeholder="Username">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
                </div>
                <a class="btn text-white" style="background-color: darkorange;" @click="login">Submit</a>
            </form>
            <p>Belum punya akun? <a href="/signUp">Daftar Sekarang</a></p>
        </div>
    </div>
</template>