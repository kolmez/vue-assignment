import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter-store", () => {
  let counter = 1;
  function increaseCounter() {
    counter++;
  }
  return { counter, increaseCounter };
});
