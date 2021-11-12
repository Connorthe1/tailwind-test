<template>
  <div class="max-w-screen-xl m-auto lg:h-32 text-white">
    <div class="flex items-center h-full gap-4 p-8 flex-wrap justify-between">

      <div class="flex flex-col flex-wrap w-full md:w-auto">
        <span class="mb-3">© Highly, All Rights Reserved</span>
        <div class="font-light underline flex flex-col flex-wrap gap-2 sm:flex-row">
          <a class="opacity-100 font-medium" href="">Home</a>
          <a class="opacity-70 hover:opacity-100" href="">About</a>
          <a class="opacity-70 hover:opacity-100" href="">Our Technology</a>
          <a class="opacity-70 hover:opacity-100" href="">Contact</a>
          <a class="opacity-70 hover:opacity-100" href="">Privacy and Policy</a>
          <a class="opacity-70 hover:opacity-100" href="">Terms and Condition</a>
          <a class="opacity-70 hover:opacity-100" href="">FAQ</a>
        </div>
      </div>

      <div class="flex w-32 justify-between">
        <div class="bg-gray-900 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
          <img class="object-cover" src="@/assets/images/icon-facebook.svg" alt="">
        </div>
        <div class="bg-gray-900 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
          <img class="object-cover" src="@/assets/images/icon-twitter.svg" alt="">
        </div>
        <div class="bg-gray-900 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
          <img class="object-cover" src="@/assets/images/icon-linkedin.svg" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
name: "footer"
}
</script>

<style scoped>

</style>