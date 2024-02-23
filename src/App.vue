<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

  export default{
    components: { AppHeader, AppMain }
}
</script>

<template>
    <AppHeader/>
    <router-view></router-view>
</template>

<style lang="scss">
  @use './style/general.scss' as *;
</style>
