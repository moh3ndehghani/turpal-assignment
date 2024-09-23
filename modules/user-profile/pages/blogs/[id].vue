<template>
  <div>
    this is blog with id: {{ route.params.id }}
  </div>
</template>


<script setup>

const route = useRoute()

</script>
