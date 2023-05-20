<template>
    <div>
        <div class="container col-sm-4 bg-light" style="height: 50%; margin: auto;margin-top: 100px;width: 50%;border: 3px solid darkorange;padding: 20px;border-radius: 30px;">
            <div class="mx-auto col-sm-4" style="font-size: 30px; font-weight: bold;">
                Register
            </div>
            <form>  
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Username">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmPassword" placeholder=" Confirm Password">
                </div>
                <a class="btn text-white" style="background-color: darkorange;">Submit</a>
            </form>
            <p>Sudah punya akun? <a href="/">Login di sini</a></p>
        </div>
    </div>
</template>