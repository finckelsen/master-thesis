<template>
  <header class="App-header">
    <BackgroundAnimation/>
    <div class="content">
      <h1>This is the homepage</h1>
      <p>It contains data from an API call</p>
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

<script setup>
// Import components
import BackgroundAnimation from '../components/BackgroundAnimation.vue';
import AppCounter from '../components/AppCounter.vue';

// Server-side data fetching
const { data } = await useFetch('https://api.sampleapis.com/codingresources/codingResources');
</script>
