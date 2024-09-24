<template>
  <div>
    <h1>Product ===========> id: {{ route.params.productId }}</h1>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "product-management",
});

const route = useRoute();
</script>
