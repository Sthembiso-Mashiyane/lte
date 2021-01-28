<template>
  <div class="row">
    <div class="col-md-6">
      <form novalidate class="" @submit.prevent="validateUser">
        <div class=" md-layout-item md-size-80 md-small-size-100 p-md-5">
          <md-card-header>
            <div class="md-title font-weight-bold">Leave Us A Message</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('firstName')">
                  <label for="first-name">Name</label>
                  <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName"
                            :disabled="sending"/>
                  <span class="md-error" v-if="!$v.form.firstName.required">The name is required</span>
                  <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid name</span>
                </md-field>
              </div>

              <md-field class="md-layout-item md-small-size-100" :class="getValidationClass('email')">
                <label for="email">Email</label>
                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                          :disabled="sending"/>
                <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
              </md-field>
            </div>


            <md-field :class="getValidationClass('lastName')">
              <label for="last-name">Subject</label>
              <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName"
                        :disabled="sending"/>
              <span class="md-error" v-if="!$v.form.lastName.required">The subject is required</span>
              <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid subject(Too Short)</span>
            </md-field>

            <md-field :class="getValidationClass('message')">
              <label for="last-name">Message</label>
              <md-input name="last-name" id="message" autocomplete="message" v-model="form.message"
                        :disabled="sending"/>
              <span class="md-error" v-if="!$v.form.message.required">Message is required</span>
              <span class="md-error" v-else-if="!$v.form.message.minlength">Invalid Message (Too Short)</span>
            </md-field>
          </md-card-content>


          <md-progress-bar md-mode="indeterminate" v-if="sending"/>

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Submit</md-button>
          </md-card-actions>
        </div>

        <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
      </form>
    </div>
    <div class="col-md-6 p-md-5">
      <div class="pt-md-5">
        <p class="h4 font-weight-bold">Sunninghill Office (Head Office)
        </p>
      </div>
      <div class="">
        <p>1st Floor, Cedar Square
          <br>
          LTE House
          <br>
          Bld 1, Belvedere Place Office Park
          <br>
          5 Eglin Road
          <br>
          Sunninghill, 2157
          <br>
          Tel.: 011-061-5700
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {
  required,
  email,
  minLength,
} from 'vuelidate/lib/validators'

export default {
  name: 'FormValidation',
  mixins: [validationMixin],
  data: () => ({
    form: {
      firstName: null,
      lastName: null,
      gender: null,
      age: null,
      email: null,
    },
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      message:{
        required,
        minLength: minLength(3)
      },

      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm() {
      this.$v.$reset()
      this.form.firstName = null
      this.form.lastName = null
      this.form.age = null
      this.form.gender = null
      this.form.email = null
    },
    saveUser() {
      this.sending = true

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.firstName} ${this.form.lastName}`
        this.userSaved = true
        this.sending = false
        this.clearForm()
      }, 1500)
    },
    validateUser() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.saveUser()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

* {
  background-color: #D5D5D5;
}
</style>

