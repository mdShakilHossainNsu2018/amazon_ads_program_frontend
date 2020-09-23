<template>
    <b-container class="bv-example-row" style="margin-top: 4rem;">

        <b-row class="justify-content-md-center">
            <div class="a-section auth-pagelet-container" style="text-align: start">
                <div class="a-section">

                    <form v-on:submit.prevent="submit">
                        <div class="a-box a-spacing-extra-large">
                            <div class="a-box-inner">
                                <h1 class="a-spacing-small">
                                    Create account
                                </h1>

                                <!-- optional subheading element -->


                                <div class="a-row a-spacing-base">


                                    <label for="first_name" class="a-form-label">
                                        Your first name
                                    </label>


                                    <input type="text" v-model="firstName" maxlength="50" id="first_name"
                                           autocomplete="off"
                                           name="firstName" tabindex="1"
                                           class="a-input-text a-span12 auth-autofocus auth-required-field auth-contact-verification-request-info"/>


                                    <label for="last_name" class="a-form-label">
                                        Your last name
                                    </label>


                                    <input type="text" v-model="lastName" maxlength="50" id="last_name"
                                           autocomplete="off"
                                           name="lastName" tabindex="1"
                                           class="a-input-text a-span12 auth-autofocus auth-required-field auth-contact-verification-request-info"/>



                                </div>


                                <div class="auth-require-fields-match-group">

                                    <div class="a-row a-spacing-base">


                                        <label for="ap_email" class="a-form-label">
                                            Email
                                        </label>

                                        <input type="email" v-model="email" maxlength="64" id="ap_email" name="email"
                                               tabindex="3"
                                               class="a-input-text a-span12 auth-required-field auth-require-fields-match auth-require-email-validaton auth-require-reverify-on-change auth-contact-verification-request-info"/>



                                    </div>
                                </div>

                                <div class="auth-require-fields-match-group">


                                    <div class="a-row a-spacing-base">


                                        <label for="ap_password" class="a-form-label">
                                            Password
                                        </label>


                                        <input type="password" maxlength="1024" id="ap_password" v-model="password"
                                               autocomplete="off"
                                               placeholder="At least 6 characters" name="password" tabindex="5"
                                               class="a-input-text a-form-normal a-span12 auth-required-field auth-require-fields-match auth-require-password-validation"/>




                                        <b-form-invalid-feedback :state="validation">
                                            Passwords must be at least 6 characters.
                                        </b-form-invalid-feedback>

                                    </div>


                                    <div class="a-row a-spacing-base">


                                        <label for="ap_password_check" class="a-form-label">
                                            Re-enter password
                                        </label>


                                        <input type="password" maxlength="1024" id="ap_password_check"
                                               autocomplete="off" v-model="password2" name="passwordCheck" tabindex="6"
                                               class="a-input-text a-form-normal a-span12 auth-required-field auth-require-fields-match"/>


                                        <b-form-invalid-feedback :state="passwordMatch">
                                            Passwords must match
                                        </b-form-invalid-feedback>


                                    </div>


                                </div>


                                <div class="a-row a-spacing-extra-large">

                                    <button
                                            class="a-button a-button-normal a-button-span12 a-button-primary"><span
                                            class="a-button-inner"><span class="a-button-text"
                                                                         aria-hidden="true">
          Create your account
        </span></span></button>


                                </div>


                                <div class="a-divider a-divider-section">
                                    <div class="a-divider-inner"></div>
                                </div>


                                <div class="a-row">
                                    Already have an account?
                                    <a class="a-link-emphasis"
                                       href="/sign-in">
                                        Sign-In
                                    </a>
                                </div>


                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                password2: '',
            }
        },

        methods: {
            submit() {
                if (this.validation && this.passwordMatch){
                    this.$store.dispatch('users/registerUser', {
                        first_name: this.firstName,
                        last_name: this.lastName,
                        email: this.email,
                        password: this.password
                    })
                }

            }
        },

        computed: {
            validation() {
                return this.password.length > 6
            },

            passwordMatch(){
                return this.password === this.password2
            }
        }
    }
</script>

<style scoped>

</style>