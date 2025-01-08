<template>
  <header className="App-header">
    <BackgroundAnimation/>
    <div class="content">
      <h1>This is the homepage</h1>
      <p>It contains data from an api-call</p>
    </div>
  </header>
  <div v-if="data">
    <h1>Resources</h1>
    <div v-for="resource in data" :key="resource.id" style="margin-bottom: 20px">
      <h3>{{ resource.description }}</h3>
      <p>
        URL: <a :href="resource.url" target="_blank" rel="noopener noreferrer">{{ resource.url }}</a>
      </p>
      <p><strong>Topics:</strong> {{ resource.topics.join(', ') }}</p>
      <p><strong>Types:</strong> {{ resource.types.join(', ') }}</p>
      <p><strong>Levels:</strong> {{ resource.levels.join(', ') }}</p>
    </div>
    <AppCounter/>
  </div>
  <p v-else>Loading...</p>
</template>

<script>
import AppCounter from './AppCounter.vue'
import BackgroundAnimation from './BackgroundAnimation.vue'
export default {
  name: 'HomePage',
    components: {
      AppCounter,
      BackgroundAnimation
  },
  data() {
    return {
      data: null,
    };
  },
  created() {
    // Fetch data when the component is created, similar to React's useEffect
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        console.log('fetching data')
        const response = await fetch('https://api.sampleapis.com/codingresources/codingResources'); // Replace with actual URL
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        this.data = result;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>