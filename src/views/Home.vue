<template>
  <div>
    <p>Counter:</p>
    <p>{{ counter }}</p>
    <button @click="increaseCounter">Increase</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "../store/counter.store";

const counterStore = useCounterStore();
const { counter, increaseCounter } = counterStore;
</script>
