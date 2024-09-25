import { defineStore } from 'pinia'

export const useProductManagementStore = defineStore('product-management', {
  state: () => ({
    productManagementCounter: 0
  }),
  actions: {
    increase() {
      this.productManagementCounter = this.productManagementCounter + 1
    },
  },
})
