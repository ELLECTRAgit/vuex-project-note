<template>
  <Header />
  <div class="wrapper-content">
    <div class="container">
      <!-- Подтягиваем из библиотеки роутера и показывает в какой области будет меняться содержимое в зависимости от маршрута -->
      <router-view />
    </div>
  </div>
  <Footer />

</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
 components: {
  Header: TheHeader,
  Footer: TheFooter
},
};

</script>

<style lang="scss">
</style>
