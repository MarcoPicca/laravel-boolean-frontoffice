<template lang="">
    <main class="container">
        <section class="row justify-content-center">
            <!-- <h1>
                Single cocktail: {{ $route.params.id }}
            </h1> -->
            <OneCocktail class="p-0 col-12 mx-4 my-5" :title="cocktail.title" :image="cocktail.cocktail_image" :description="cocktail.description" :fullLength="true"
            />
        </section>
    </main>
</template>
<script>
import OneCocktail from '@/components/OneCocktail.vue';
import axios from 'axios';

export default {
    name: 'cocktailList',
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
        OneCocktail
    },

    created(){
        this.getCocktail();
    }
}
</script>
<style lang="scss">
</style>