<template>
    <div>
<h1>aniamls</h1>
<AnimalCard v-for="(animal, index) in animal" :key="animal.location"
:animal="animal" :id="index + 1"></AnimalCard>
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

</style>