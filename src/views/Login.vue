<template>
<div class="login">
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card hover class="pa-4">
        <form>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </form>
      </v-card>
    </v-flex>
  </v-layout>




</div>
</template>

<script>
 export default {
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'  
        ],

        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],

        password: '',
        show1: false,
        passwordRules: [
          v => !!v || 'Required.',
          v => v.length >= 8 || 'Min 8 characters',
        ],
    })
  }
</script>

<style scoped>
.login {
  margin-top: 164px;
}

</style>
