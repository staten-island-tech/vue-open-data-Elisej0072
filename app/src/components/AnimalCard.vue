<template>
    <router-link :to='Path' class="card"><div class="container">
<h2>{{ animal.species_description }}</h2>
<h3>{{ animal.date_and_time_of_initial }}</h3>
<h3>{{ animal.location }}</h3>
</div>
<h3>{{ animal.animal_condition }}</h3>

    </router-link>
</template>

<script setup>
import { computed } from 'vue'
  const props = defineProps({
    animal:{
        type: Object,
        required: true,
    },
  })

  const Path = computed(()=>{
    return '//$props.animal.species_description'
  })
</script>

<style scoped>
.container { 
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 70vw;
  margin: 2px auto;
  display: flex;
  padding: 7px;
}

</style>