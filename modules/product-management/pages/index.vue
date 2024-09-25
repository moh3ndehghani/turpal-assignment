<template>
  <div>
    <h1>Product Management</h1>

    <UserProfileCard />

    <br>

    <button @click="changeData"> change user data </button>

    <p>user data from store: {{ store.userData }}</p>
  </div>
</template>

<script setup>


import { useSharedStore } from "~/store/sharedStore"
definePageMeta({
  layout: "product-management",
});

const store = useSharedStore()


////////

function changeData() {
  store.userData = {
    name: "user 2",
    age: 40
  }
}
</script>
