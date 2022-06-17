<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import animation from "./components/animation.vue";
</script>

<template>
    <div id="app">
        <div class="header">
            <router-link to="/" class="header-link">首页</router-link>
            <router-link to="/about" class="header-link">关于</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    max-width: 1200px;
    margin: 0 auto;
}
.header {
    padding: 20px 0;
}
.header-link {
    font-size: 14px;
    color: #333;
    padding: 0 20px;
}
</style>
