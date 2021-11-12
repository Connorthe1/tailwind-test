<template>
  <div class="max-w-screen-xl m-auto z-10 py-6 bg-black box-content px-8 lg:bg-transparent mb-32">

    <header class="text-white flex items-center text-base flex-wrap">
      <div class="lg:w-1/4"><img src="@/assets/images/Logo.svg" alt=""></div>

      <div
          class="bg-black flex items-start flex-col absolute gap-6 w-full left-0 top-16 max-h-0 overflow-hidden px-8
          transition-all duration-300 ease-in-out
          lg:bg-transparent lg:flex-row lg:items-center lg:w-3/4 lg:static lg:max-h-full lg:px-0"
          :class="{'max-h-96':menu}"
      >
        <div class="underline flex gap-6 font-light flex-col lg:flex-row mt-4 lg:mt-0">
          <a href="" class="font-medium">Home</a>
          <a href="" class="opacity-70 hover:opacity-100">About</a>
          <a href="" class="opacity-70 hover:opacity-100">Our Technology</a>
          <a href="" class="opacity-70 hover:opacity-100">Contact</a>
        </div>
        <div class="lg:ml-auto flex items-center mr-6">
          <img src="@/assets/images/language.png" alt="" class="mr-4">
          <span class="font-medium">EN</span>
        </div>
        <hr class="border bg-white w-full lg:hidden">
        <button class="bg-blue-700 px-6 py-2 font-medium flex items-center transition duration-500 ease-in-out hover:bg-blue-500 mb-8 lg:mb-0">
          <span class="mr-4">Login</span>
          <img src="@/assets/images/arrow-right.svg" alt="">
        </button>
      </div>

      <a class="navbar-burger self-center ml-auto lg:hidden" @click="menu = !menu" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </a>

    </header>

  </div>
</template>

<script>
export default {
  data(){
    return{
      menu : false
    }
  },
  name: "header"
  }
</script>

<style scoped>

</style>