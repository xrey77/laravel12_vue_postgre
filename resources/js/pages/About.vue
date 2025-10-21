<template>
  <main>
  <div class="text-center">
    <h1>About Us</h1>
    <p>This is the about page content.  {{ctr}}</p>
  </div>
</main>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
  
export default defineComponent({
    name: 'About-Page',
});
</script>