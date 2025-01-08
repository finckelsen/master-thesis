<template>
  <div>
    <header class="App-header">
      <img src="../assets/background.jpeg" class="headerBackground" alt="Background" />
      <div class="content">
        <h1>This is the image page</h1>
        <p>It contains images fetched online</p>
      </div>
    </header>
    <h1>Images 1 to 10</h1>
    <div
      style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;"
    >
      <div
        v-for="image in images"
        :key="image.id"
        style="text-align: center;"
      >
        <img
          :src="image.url"
          :alt="'Image ' + image.id"
          style="width: 200px; height: 300px; object-fit: cover;"
        />
        <p>Image ID: {{ image.id }}</p>
      </div>
    </div>
    <BackgroundChanger/>
  </div>
</template>

<script>
import BackgroundChanger from '../components/BackgroundChanger'
export default {
  name: "ImagePage",
      components: {
      BackgroundChanger,
  },
  data() {
    return {
      images: [], // Initially empty
    };
  },
  async serverPrefetch() {
    this.images = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      url: `https://picsum.photos/id/${index + 1}/200/300`,
    }));
  },
  created() {
    if (!this.images.length) {
      this.images = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        url: `https://picsum.photos/id/${index + 1}/200/300`,
      }));
    }
  },
};
</script>
