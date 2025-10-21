<script setup>  
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  import { RouterView } from 'vue-router';
  import Header from '../components/Header.vue';
</script>

<template>
      <Header />
        <main>
        <slot></slot>
      </main>
</template>
  
