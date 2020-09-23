<template>
    <b-container class="bv-example-row" style="margin-top: 4rem;">


        <b-row class="justify-content-md-center">
            <div class="panel panel-primary" style="text-align: start">
                <div class="panel-body">
                    <b-form v-on:submit.prevent="onSubmit">
                        <div class="form-group">
                            <h2>Sign in</h2>
                        </div>
                        <div class="form-group">
                            <strong>Email</strong>
                            <input id="signinEmail" v-model="email" type="email" maxlength="50" class="form-control">
                        </div>
                        <div class="form-group">
                            <strong>Password</strong>
                            <span class="right"><a href="#">Forgot your password?</a></span>
                            <input id="signinPassword" v-model="password" type="password" maxlength="25" class="form-control">
                        </div>
                        <div class="form-group" style="padding-top: 12px;">
                            <button class="btn btn-block sign_in" >Sign in</button>
                        </div>
                        <div class="form-group divider">
                            <hr class="left"><small>New to site?</small><hr class="right">
                        </div>
                        <p class="form-group"><a href="/register" class="btn create-account btn-block">Create an account</a></p>
                        <p class="form-group">By signing in you are agreeing to our <a href="#">Terms of Use</a> and our <a href="#">Privacy Policy</a>.</p>
                    </b-form>
                </div>
            </div>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "SignIn",
        data(){
            return { email: '', password: '' }
        },

        methods: {
            onSubmit(){
            this.$store.dispatch('users/userLogin', {email: this.email, password: this.password})
            } }
    }
</script>

<style scoped>
    .sign_in{
        border-color: #adb1b8 #a2a6ac #8d9096;
        background: #f0c14b;
    }

    .create-account{
        background: #e7e9ec;
        text-decoration: none;
        color: black;
    }

    form { margin: 0px 10px; }

    h2 {
        margin-top: 2px;
        margin-bottom: 2px;
    }

    /*.container { max-width: 360px; }*/

    .divider {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 5px;
    }

    .divider hr {
        margin: 7px 0px;
        width: 35%;
    }

    .left { float: left; }

    .right { float: right; }

</style>