<template>



    <div>
        <b-navbar fixed="top" toggleable="lg" type="dark" style="background-color: #232F3E;">
            <b-navbar-brand href="/">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
<!--                <b-navbar-nav>-->
<!--                    <b-nav-item href="#">Link</b-nav-item>-->
<!--                    <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
<!--                </b-navbar-nav>-->

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
<!--                    <b-nav-form>-->
<!--                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--                    </b-nav-form>-->

                    <b-nav-item v-if="userName" >{{userName}}</b-nav-item>
                    <b-nav-item v-if="!userName" to="/sign-in">Sign in</b-nav-item>
                    <b-nav-item v-if="userName" @click="logout" >Sign out</b-nav-item>

                    <b-button v-if="!userName" to="/register" class="reg-button">Register</b-button>

<!--                    <b-nav-item-dropdown text="Lang" right>-->
<!--                        <b-dropdown-item href="#">EN</b-dropdown-item>-->
<!--                        <b-dropdown-item href="#">ES</b-dropdown-item>-->
<!--                        <b-dropdown-item href="#">RU</b-dropdown-item>-->
<!--                        <b-dropdown-item href="#">FA</b-dropdown-item>-->
<!--                    </b-nav-item-dropdown>-->

<!--                    <b-nav-item-dropdown right>-->
<!--                        &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
<!--                        <template v-slot:button-content>-->
<!--                            <em>User</em>-->
<!--                        </template>-->
<!--                        <b-dropdown-item href="#">Profile</b-dropdown-item>-->
<!--                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
<!--                    </b-nav-item-dropdown>-->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "AmazonNavBar",

        methods: {
            logout(){
                this.$store.dispatch('users/userLogout')
            }
        },

        computed: {
            userName(){
                return this.$store.state.users.username
            }
        }


    }
</script>

<style scoped>

    .reg-button{
        background: #f0c14b;
        color: black;
    }


    .reg-button:hover{
        background: linear-gradient(#f9cf6f,#f6bd42 80%,#f6bd41);
        color: black;
    }

    .reg-button:active{
        background: #f0c14b;
        color: black;
        box-shadow: none;
    }

    .reg-button:focus{
        background: #f0c14b;
        color: black;
    }

    .reg-button:checked{
        background: #f0c14b;
        color: black;
    }


    ol {
        list-style: none;
    }
    .a-unordered-list{
        list-style: none;
    }
    li{
        list-style: none;
    }
    ul{
        list-style: none;
    }

    /*.a-button-text {*/
    /*    cursor: pointer;*/
    /*    color: #111;*/
    /*    border-color: #f0c246 #ebbc3c #bf9a3b;*/
    /*    border-top-color: rgb(240, 194, 70);*/
    /*    border-right-color: rgb(235, 188, 60);*/
    /*    border-bottom-color: rgb(191, 154, 59);*/
    /*    border-left-color: rgb(235, 188, 60);*/
    /*    border-style: solid;*/
    /*    border-width: 1px;*/
    /*    background: -webkit-gradient(linear,left top,left bottom,from(#f9cf6f),color-stop(80%,#f6bd42),to(#f6bd41));*/
    /*    background: -webkit-linear-gradient(#f9cf6f,#f6bd42 80%,#f6bd41);*/
    /*    background: linear-gradient(#f9cf6f,#f6bd42 80%,#f6bd41);*/
    /*    border-radius: 3px;*/
    /*    !*font-size: 1rem;*!*/
    /*    font-style: normal;*/
    /*    font-weight: 400;*/
    /*    !*padding: 15px 30px;*!*/
    /*    text-decoration: none;*/
    /*    text-align: center;*/

    /*}*/

    /*a{*/
    /*    cursor: pointer;*/
    /*    font-family: "Amazon Ember",Arial,sans-serif;*/
    /*    text-decoration: none;*/
    /*    color: #dddddd;*/
    /*}*/

    /*.a-button-primary {*/
    /*    background: #f0c14b;*/
    /*    border-color: #a88734 #9c7e31 #846a29;*/
    /*    color: #111;*/
    /*}*/
    /*.registerButton{*/
    /*    background: gold;*/
    /*    border-radius: 3px;*/
    /*    border-color: #adb1b8 #a2a6ac #8d9096;*/
    /*    border-style: solid;*/
    /*    border-width: 1px;*/
    /*    cursor: pointer;*/
    /*    display: inline-block;*/
    /*    padding: 0;*/
    /*    text-align: center;*/
    /*    text-decoration: none!important;*/
    /*    vertical-align: middle;*/
    /*    !*background-color: gold;*!*/
    /*}*/
    /*#navBar{*/
    /*    background-color:#232F3E;*/
    /*    height:56px;*/
    /*    !*width: 100%;*!*/
    /*    color:white*/
    /*}*/
    /*#topHalf{*/
    /*    height:50px;*/
    /*}*/
    /*#bottomHalf{*/
    /*    height:50px*/
    /*}*/
    /*#logo{*/
    /*    height:100px;*/
    /*    position:absolute;*/
    /*    top:-25px*/

    /*}*/
    /*#logoWrapper{*/
    /*    margin-bottom:20px;*/
    /*    display:inline-block;*/
    /*    position:relative;*/
    /*    width:150px;*/

    /*}*/
    /*#backToSchool{*/
    /*    height:50px;*/
    /*    float:right;*/
    /*    margin-right:20px*/

    /*}*/
    /*input{*/
    /*    vertical-align:top;*/
    /*    margin-top:10px;*/
    /*    border-radius:10px;*/
    /*    height:20px;*/
    /*    width:500px;*/
    /*}*/



    /*#department{*/
    /*    font-size:25px;*/
    /*    padding:10px;*/
    /*    margin-left:30px;*/
    /*    font-weight:bold;*/
    /*    display:inline-block;*/
    /*    vertical-align:top;*/
    /*    margin-top:10px*/
    /*}*/
    /*#sections{*/
    /*    display:inline-block*/
    /*}*/
    /*.section{*/
    /*    display:inline-block;*/
    /*    vertical-align:top;*/
    /*    font-size:15px;*/
    /*    margin-top:11px;*/
    /*    margin-left:10px*/
    /*}*/
    /*#accountStuff{*/
    /*    display:inline-block;*/
    /*    float:right;*/
    /*    text-align: center;*/
    /*    margin-right:20px*/
    /*}*/


</style>