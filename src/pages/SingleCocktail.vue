<template lang="">
    <main class="container">
        <section class="row justify-content-center">
            <!-- <h1>
                Single cocktail: {{ $route.params.id }}
            </h1> -->
            <SingleCard class="p-0 col-12 mx-4 my-5" :title="cocktail.title" :cocktail_image="cocktail.cocktail_image" :description="cocktail.description" :fullLength="true"
            />
        </section>
    </main>
</template>
<script>
import SingleCard from '@/components/SingleCard.vue';
import axios from 'axios';

export default {
    name: 'SingleCocktail',
    data(){
        return{
            cocktail: {},
            id: ''
        }
    },
    methods:{
        getCocktail(){
            axios.get(`http://127.0.0.1:8000/api/cocktails/${this.$route.params.id}`, {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.cocktail = response.data.results;

            })
            .catch(function (error) {
                console.warn(error);
                // this.$router.push({ name: 'not-found' })
            })
        }
    },
    components:{
        SingleCard
    },

    created(){
        this.getCocktail();
    }
}
</script>
<style lang="scss">
</style>