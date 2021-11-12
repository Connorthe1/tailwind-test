<template>
  <div class="max-w-screen-xl m-auto box-content px-8">

    <div class="flex mb-44">

      <div class="w-full lg:w-1/2">
        <h1 class="text-4xl sm:text-6xl text-white font-bold mb-8 leading-tight">Optimize your performance management</h1>
        <h2 class="text-1xl sm:text-2xl text-gray-400 font-light mb-12 w-full md:w-4/5">Highly is a one stop solution for managing the financial affairs, effectively.</h2>
        <button class="bg-blue-700 px-6 py-2 font-medium flex items-center text-white transition duration-500 ease-in-out hover:bg-blue-500">
          <span class="mr-4">Get Started</span>
          <img src="@/assets/images/arrow-right.svg" alt="">
        </button>
      </div>

      <div class="flex-col items-center w-1/2 relative hidden lg:flex" >
        <img class="self-end -top-16 z-10 mr-16 absolute" src="@/assets/images/preview-top.png" alt="">
        <div class="bg-secondary px-8 py-10 pt-4">
          <span class="text-white text-xs font-bold">Asset Monitoring 2021</span>
          <img class="mt-6" src="@/assets/images/preview-body.png" alt="">
        </div>
        <img class="self-start -mt-24" src="@/assets/images/preview-footer.png" alt="">
      </div>

    </div>

    <div class="flex flex-wrap gap-8 items-center justify-around md:justify-between md:gap-0 opacity-70">
      <img src="@/assets/images/logo-chase.svg" alt="">
      <img src="@/assets/images/logo-asana.svg" alt="">
      <img src="@/assets/images/logo-google.svg" alt="">
      <img src="@/assets/images/logo-buzzfeed.svg" alt="">
      <img src="@/assets/images/logo-walmart.svg" alt="">
    </div>

  </div>
</template>

<script>
export default {
name: "main"
}
</script>

<style scoped>

</style>