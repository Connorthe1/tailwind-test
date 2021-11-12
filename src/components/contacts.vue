<template>
  <div class="bg-topology4 bg-no-repeat bg-left-top bg-100 lg:bg-30">
    <form @submit.prevent="onSubmit" class="py-16 flex flex-col items-center text-white w-full max-w-3xl m-auto px-8">

      <div class="text-center flex flex-col w-full mb-16">
        <span class="text-3xl sm:text-5xl font-bold mb-8 leading-tight">Contact us to learn more</span>
        <span class="text-1xl sm:text-2xl opacity-70 font-light">
          Highly is a one stop solution for managing
          <br>
          the financial affairs, effectively.
        </span>
      </div>

      <div class="flex flex-col items-center w-full gap-2 sm:gap-6 mb-6">

        <div class="flex flex-wrap sm:flex-nowrap items-center w-full gap-2 sm:gap-6">
          <input
                 v-model.trim="firstName"
                 class="bg-secondary w-full sm:w-1/2 h-14 px-4 focus:outline-none"
                 placeholder="First Name"
                 type="text"
                 :class="{ 'border border-red-500' : $v.firstName.$dirty && !$v.firstName.required }"
          >
          <input
              v-model="lastName"
              class="bg-secondary w-full sm:w-1/2 h-14 px-4 focus:outline-none"
              placeholder="Last Name"
              type="text"
          >
        </div>

        <div class="flex flex-wrap sm:flex-nowrap items-center w-full gap-2 sm:gap-6">
          <input
              v-model.trim="email"
              class="bg-secondary w-full sm:w-1/2 h-14 px-4 focus:outline-none"
              placeholder="Email Address"
              type="text"
              :class="{ 'border border-red-500' : ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }"
          >
          <input
              v-model.trim="phone"
              class="bg-secondary w-full sm:w-1/2 h-14 px-4 focus:outline-none"
              placeholder="Telephone"
              type="text"
              :class="{ 'border border-red-500' : ($v.phone.$dirty && !$v.phone.required)
              || ($v.phone.$dirty && !$v.phone.minLength)
              || ($v.phone.$dirty && !$v.phone.numeric) }"
          >
        </div>

        <textarea v-model="description"
                  class="bg-secondary w-full p-4 resize-none focus:outline-none"
                  placeholder="Description" name="" id="" cols="14" rows="4"
        ></textarea>
      </div>

  <!--    <span v-if="$v.$invalid" class="mb-6 self-start">error</span>-->

      <button type="submit" class="bg-blue-700 px-6 py-2 font-medium flex items-center text-white self-start transition duration-500 ease-in-out hover:bg-blue-500">
        <span class="mr-4">Submit</span>
        <img src="@/assets/images/arrow-right.svg" alt="">
      </button>

    </form>
  </div>
</template>

<script>
import {email, required, minLength, numeric} from "vuelidate/lib/validators";

export default {
    name: "contacts",
    data(){
        return{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          description: ''
        }
    },
    validations:{
        firstName: {required},
        email: {required, email},
        phone: {required, minLength:minLength(11), numeric}
    },
    methods:{
        onSubmit(){
            if (this.$v.$invalid){
              this.$v.$touch()
              return
            }

            const sendJson = {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              phone: this.phone,
              description: this.description
            }
            console.log('post Request send')
            console.log(sendJson)
        }
    }
}
</script>

<style scoped>

</style>