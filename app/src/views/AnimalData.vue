<template>
    <div>
<h1>animals</h1>
<AnimalCard v-for="(animal) in animal" :key="animal.species_description"
:animal="animal" :id></AnimalCard>

    </div>
</template>

<script setup>
    import {onBeforeMount, ref, watch} from 'vue'
    import {useRoute} from 'vue-router'
    import AnimalCard from '@/components/AnimalCard.vue'
    

    const route = useRoute() 
    const animal = ref(null)
    async function getAnimal(id){
        const response = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
        const data = await response.json()
        animal.value = data
        console.log(data)
    }
    
    onBeforeMount(function(){
        getAnimal(route.params.id)
    })

    watch(
        () => route.params.id,
        function(id) {
            getAnimal(id)
        }
    )


</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>