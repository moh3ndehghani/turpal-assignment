<template>
  <div>
    <h1>User Profile</h1>

    <UserProfileCard />


    <br>

    user data from store: {{ store.userData }}

    <br>

    shared access token: {{ store.accessToken }}
  </div>
</template>

<script setup>
import { useSharedStore } from "~/store/sharedStore"
definePageMeta({
  layout: "user-profile",
});

const store = useSharedStore()
</script>
