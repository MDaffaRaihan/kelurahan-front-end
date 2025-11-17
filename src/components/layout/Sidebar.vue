<template>
  <aside class="sidebar">
    <div class="brand">
      <img src="../../assets/vue.svg" alt="logo" class="logo" />
      <div class="brand-text">
        <div class="title">Kelurahan</div>
        <div class="subtitle">Pulo Gebang</div>
      </div>
    </div>

    <nav>
      <ul>
        <li><a href="/" :class="{ active: isActive('/') }">Halaman Utama</a></li>
        <li><a href="/management" :class="{ active: isActive('/management') }">Manajemen Data</a></li>
        <li><a href="/settings" :class="{ active: isActive('/settings') }">Pengaturan</a></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'Sidebar',
  setup() {
    const route = useRoute();

    const isActive = (path) => {
      return route.path === path;
    };

    return { isActive };
  },
};
</script>

<style scoped>
.sidebar {
  width: 260px;
  background: #f6fbf8;
  padding: 28px;
  border-right: 1px solid rgba(0, 0, 0, 0.03);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}

.logo {
  width: 56px;
  height: 56px;
  border-radius: 6px;
  object-fit: cover;
}

.title {
  font-weight: 700;
  font-size: 18px;
}

.subtitle {
  font-size: 13px;
  color: #6b6b6b;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {
  margin: 12px 0;
}

nav a {
  display: block;
  padding: 12px;
  border-radius: 10px;
  color: #0e2a24;
  text-decoration: none;
}

nav a.active {
  background: #e9f9ef;
  border-left: 6px solid #1fa87b;
  padding-left: 16px;
}
</style>