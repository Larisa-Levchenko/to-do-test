<template>
  <Header />
  <routerView />
</template>

<script>
import AppService from '@/app/service/app-service';
import Header from './components/Header.vue';


export default {
  components: {
    Header
  },
  mounted() {
    AppService.getStartData()
      .catch((e) => {
        console.log(e)
      })
  }

}
</script>

<style lang="scss">
@import './assets/main.scss';
</style>
