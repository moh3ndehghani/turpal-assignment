<template>
  <div>this is setting with id: {{ route.params.name }}</div>
  <div>
    <Test />
  </div>
</template>

<script setup>
const route = useRoute();
</script>
