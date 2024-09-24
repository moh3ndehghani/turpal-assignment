<template>
  <div>
    <h1>Order ===========> id: {{ route.params.orderId }}</h1>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "order-processing",
});

const route = useRoute();
</script>
