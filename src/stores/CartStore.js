import { groupBy } from "lodash";
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
    grouped: (state) => {
      const grouped = groupBy(state.items, (item) => item.name);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {}
      sorted.forEach(key => inOrder[key] = grouped[key])
      return inOrder;
    },
    groupCount: (state) => (name) => state.grouped[name].length,
    totalPrice: (state) => state.items.reduce((p, c) => p + c.price, 0),
  },

  // actions
  actions: {
    addItems(count, item) {
      count = parseInt(count);
      for (let index = 0; index < count; index++) {
        this.items.push({ ...item });
      }
    },
    removeItems(itemName) {
      this.items = this.items.filter((item) => item.name !== itemName);
    },
    setItemCount(item, count) {
      this.removeItems(item.name);
      this.addItems(count, item);
    }
  },
});