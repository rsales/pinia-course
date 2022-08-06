// import { isEmpty } from "lodash";
import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  // state
  state: () => {
    return {
      items: [],
    }
  },

  // getters
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.count === 0,
  },

  // actions
  actions: {
    addItems(count, item) {
      count = parseInt(count);

      for (let index = 0; index < count; index++) {
        this.items.push({ ...item });
      }
    },
  },
});