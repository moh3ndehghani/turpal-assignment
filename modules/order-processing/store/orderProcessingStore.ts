import { defineStore } from 'pinia'

export const useOrderProcessingStore = defineStore('order-processing', {
  state: () => ({
    orderProcessingCounter: 0
  }),
  actions: {
    increase() {
      this.orderProcessingCounter = this.orderProcessingCounter + 1
    },
  },
})
