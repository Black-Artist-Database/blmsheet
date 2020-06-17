<template>
  <div class="container mt-3">
    <Filters name="Welcome to Your Vue.js App"/>

      <div class="d-flex flex-wrap">
        <Card 
          name="Artist A" 
          location="US" 
          link="https://efacility.bandcamp.com/" 
          genres="['techno', 'house', 'disco']"
        />
        <Card 
          name="Artist B" 
          location="US" 
          link="https://efacility.bandcamp.com/" 
          genres="['techno', 'house', 'disco']"
        />
        <Card 
          name="Artist C" 
          location="US" 
          link="https://efacility.bandcamp.com/" 
          genres="['techno', 'house', 'disco']"
        />
        <Card 
          name="Artist D" 
          location="US" 
          link="https://efacility.bandcamp.com/" 
          genres="['techno', 'house', 'disco']"
        />
        <Card 
          name="Artist A" 
          location="US" 
          link="https://efacility.bandcamp.com/" 
          genres="['techno', 'house', 'disco']"
        />
        <Card 
          name="Artist B" 
          location="US" 
          link="https://efacility.bandcamp.com/" 
          genres="['techno', 'house', 'disco']"
        />
        <Card 
          name="Artist C" 
          location="US" 
          link="https://efacility.bandcamp.com/" 
          genres="['techno', 'house', 'disco']"
        />
        <Card 
          name="Artist D" 
          location="US" 
          link="https://efacility.bandcamp.com/" 
          genres="['techno', 'house', 'disco']"
        />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Filters from '@/components/Filters.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Filters,
    Card
  }
}
</script>
