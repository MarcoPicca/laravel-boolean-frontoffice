<script>
import HomePage from './components/HomePage.vue';


  export default{
    components: { HomePage, }
}
</script>

<template>
    <HomePage/>
    <router-view>
      
    </router-view>
</template>

<style lang="scss">
  @use './style/general.scss' as *;
</style>
