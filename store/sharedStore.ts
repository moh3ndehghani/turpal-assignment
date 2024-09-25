import { defineStore } from 'pinia'

export const useSharedStore = defineStore('shared', {
  state: () => ({
    accessToken: "default test token",
    userData: {
      name: "user1",
      age: 25
    },
  }),
  actions: {
    setAccessToken(token:string) {
      this.accessToken = token
    },
    setUserData(data:any) {
      this.userData = data
    },
  },
})
