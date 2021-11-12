<template>
  <div class="bg-main font-mainFont m-auto">

    <div class="bg-topology1 bg-no-repeat bg-right-top bg-100 md:bg-contain mb-8 sm:mb-24">
      <Header />
      <Main />
    </div>

    <Features />

    <div class="bg-topology2 bg-no-repeat bg-left-top px-8">
        <service1 ref="service1" class="opacity-0 transition duration-500 ease-in-out transform translate-x-40"/>
    </div>
    <div class="bg-topology3 bg-no-repeat bg-right-top mb-4 md:mb-24 px-8">
        <service2 ref="service2" class="opacity-0 transition duration-500 ease-in-out transform -translate-x-40"/>
    </div>

    <CTA />

    <Contacts />

    <Footer />

  </div>
</template>

<script>
import Header from "@/components/header";
import Main from "@/components/main";
import Features from "@/components/features";
import Service1 from "@/components/service/service1";
import Service2 from "@/components/service/service2";
import CTA from "@/components/cta";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";

export default {
  name: 'HelloWorld',
  components: {Header, Main, Features, Service1, Service2, CTA, Contacts, Footer},
  mounted() {
    window.onscroll = () => {
      if (document.documentElement.scrollTop >= this.$refs.service1.$el.offsetTop - 500){
        this.$refs.service1.$el.classList.add('opacity-100')
        this.$refs.service1.$el.classList.remove('translate-x-40')
      }
      if (document.documentElement.scrollTop >= this.$refs.service2.$el.offsetTop - 400){
        this.$refs.service2.$el.classList.add('opacity-100')
        this.$refs.service2.$el.classList.remove('-translate-x-40')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
