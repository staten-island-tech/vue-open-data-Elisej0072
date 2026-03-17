<template>
    <router-link :to='animlPath' class="card">
<h2>{{ animal.species_description }}</h2>
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

  const animlPath = computed(()=>{
    return '/animl/$props.animal.species_description'
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