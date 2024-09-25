import { defineStore } from 'pinia'

export const useUserProfileStore = defineStore('user-profile', {
  state: () => ({
    userProfileCounter: 0
  }),
  actions: {
    increase() {
      this.userProfileCounter = this.userProfileCounter + 1
    },
  },
})
