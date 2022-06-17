<template>
    <div>{{ about }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let about = ref<string>("这是about页面");
</script>

