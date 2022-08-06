import { groupBy, isEmpty } from "lodash";
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
    grouped: (state) => groupBy(state.items, (item) => item.name),
    groupCount: (state) => (name) => state.grouped[name].length
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