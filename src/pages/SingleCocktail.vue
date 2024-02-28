<template lang="">
    <div>
        
        <img :src="cocktail_image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p>
                {{ description }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    
    
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props:{
       title:{
            required: true,
            type: String
        },
       cocktail_image:{
            required: true,
            type: Text
        },
        description:{
            required: true,
            type: Text
        },   
    }
    
}
</script>
<style lang="">
    
</style>