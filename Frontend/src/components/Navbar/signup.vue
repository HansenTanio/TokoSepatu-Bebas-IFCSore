<script>
    export default {
        data: function(){
            return {
                username: "",
                password: "",
                confirm: ""
            }
        },
        methods: {
            signUp: function(){
                if (this.password != this.confirm) {
                    window.alert("Password is different!")
                } else if (this.password =="" || this.confirm =="" || this.username =="") {
                    window.alert("Register failed!")
                } else {
                    axios.post("http://localhost:3000/signup",{
                        username: this.username,
                        password: this.password
                    }).then(() => {
                        window.alert("Register Success!")
                        window.location.pathname = '/'
                    }).catch((err) => {
                        window.alert(err)

                    });
                }
            }
        }
    }
</script>
<template>
    <div>
        <div class="container col-sm-4 bg-light" style="height: 50%; margin: auto;margin-top: 100px;width: 50%;border: 3px solid darkorange;padding: 20px;border-radius: 30px;">
            <div class="mx-auto col-sm-4" style="font-size: 30px; font-weight: bold;">
                Register
            </div>
            <form>  
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" id="username" v-model="username" aria-describedby="emailHelp" placeholder="Username">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmPassword" v-model="confirm" placeholder=" Confirm Password">
                </div>
                <a @click="signUp">
                    <button class="btn text-white" style="background-color: darkorange;">Submit</button>
                </a>
            </form>
            <p style="color: red;" :innerHTML="msg"></p>
            <p>Sudah punya akun? <a href="/">Login di sini</a></p>
        </div>
    </div>
</template>