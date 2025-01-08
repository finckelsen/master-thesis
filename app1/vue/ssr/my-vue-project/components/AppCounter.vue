<template>
  <div>
    <h2>Hydrated Counter</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: "AppCounter",
  data() {
    return {
      count: 0, // Initialize the count state
    };
  },
  methods: {
    increment() {
      this.count += 1; // Increment the count
    },
  },
};
</script>
