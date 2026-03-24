<template>
    <div>
<h1>urban wildlife animal info.</h1>
<AnimalCard v-for="(animal) in animal" :key="animal.species_description"
:animal="animal"></AnimalCard>

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
  margin-bottom: 40px;
}

.card { 
  align-items: center;
  border: 2px solid #000000;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>