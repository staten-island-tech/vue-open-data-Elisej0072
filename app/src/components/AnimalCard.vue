<template>
    <router-link :to='Path' class="card">
<h2>{{ animal.species_description }}</h2>
<h3>{{ animal.location }}</h3>
<h3>{{ animal.animal_condition }}</h3>
<h3>{{ id }}</h3>
    </router-link>
</template>

<script setup>
import { computed } from 'vue'
  const props = defineProps({
    animal:{
        type: Object,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
  })

  const Path = computed(()=>{
    return '//$props.animal.location'
  })
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>