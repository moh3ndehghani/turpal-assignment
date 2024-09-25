<template>
  <div>
    <h1>User Profile</h1>

    <UserProfileCard />


    <br>

    user data from store: {{ store.userData }}

    <br>

    shared access token: {{ store.accessToken }}

    <br>

    <h1>user profile store => {{ userProfileStore.userProfileCounter }}</h1>
    <button @click="increase">increase counter</button>
  </div>
</template>

<script setup>
import { useSharedStore } from "~/store/sharedStore"
import { useUserProfileStore } from "~/modules/user-profile/store/userProfileStore"
definePageMeta({
  layout: "user-profile",
});

const store = useSharedStore()

const userProfileStore = useUserProfileStore()

function increase() {
  userProfileStore.increase()
}
</script>
