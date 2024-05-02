<template>
  <div>
    <app-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header.vue';

export default {
  name: "App",
  components: {
    'app-header': header
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>
