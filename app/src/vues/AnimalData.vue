<template>
    <div>
<h2>{{ animal.name }}</h2>
    </div>
</template>

<script setup>
    import {onBeforeMount, ref} from 'vue'
    import {useRoute} from 'vue-router'
    const route = useRoute() 
    const animal = ref(null)
    async function getAnimal(id){
        const response = await fetch('https://data.cityofnewyork.us/api/v3/views/fuhs-xmg2/query.json')
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