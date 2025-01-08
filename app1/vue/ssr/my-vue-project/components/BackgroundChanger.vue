<template>
  <div style="text-align: center; padding: 20px;">
    <h2>Click the button to change background color</h2>
    <button
      @click="changeBackgroundColor"
      style="padding: 10px 20px; font-size: 16px; background-color: black; color: white; border: none; border-radius: 5px; cursor: pointer;"
    >
      Change Background
    </button>
    <p style="margin-top: 10px;">
      Current Background Color: <strong>{{ bgColor }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "BackgroundChanger",
  data() {
    return {
      bgColor: "white", // Initial background color
    };
  },
  methods: {
    changeBackgroundColor() {
      // Generate a random color
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      this.bgColor = randomColor;

      // Change the body's background color
      document.body.style.backgroundColor = randomColor;
    },
  },
};
</script>