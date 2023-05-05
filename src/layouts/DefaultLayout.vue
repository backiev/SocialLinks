<template>
   <div class="max-w-[1200px] mx-auto">
      <Header />
      <main>
         <router-view></router-view>
      </main>
      <footer>Footer</footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
   export default {
      components: {
         Header
      }
   }
</script>

<style lang="scss" scoped>

</style>