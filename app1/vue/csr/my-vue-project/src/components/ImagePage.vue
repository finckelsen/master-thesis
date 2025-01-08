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
        v-for="image in imageData"
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
import { ref, onMounted } from "vue";
import BackgroundChanger from './BackgroundChanger.vue'


export default {
  name: "ImagePage",
    components: {
      BackgroundChanger,
    },
  setup() {
    const imageData = ref([]);

    onMounted(() => {
      const imageIds = Array.from({ length: 10 }, (_, index) => index + 1);
      const images = imageIds.map((id) => ({
        id,
        url: `https://picsum.photos/id/${id}/200/300`,
      }));
      imageData.value = images;
    });

    return {
      imageData,
    };
  },
};
</script>