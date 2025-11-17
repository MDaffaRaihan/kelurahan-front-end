<template>
  <div id="app">
    <Sidebar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from './components/layout/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
#app {
  display: flex;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.content {
  flex: 1;
  padding: 36px 48px;
  overflow: auto;
}
</style>
