<template lang="">
    <main class="container">
        <section class="row justify-content-center">
            <div class="col-12">
                <h1 class="pt-5 pb-3">
                    Cocktails:
                </h1>
            </div>
            <OneCocktail class="card p-0 col-3 mx-4 my-5" v-for="cocktail in cocktails" :key="cocktail"
                :title="cocktail.title" :cocktail_image="cocktail.cocktail_image" :description="cocktail.description" :linkRoute="{ name: 'single-cocktail', params: { id: cocktail }}" linkLabel="Read more..."
            />
        </section>
    </main>
</template>
<script>
import OneCocktail from '@/components/OneCocktail.vue';
import axios from 'axios';

export default {
    name: 'Cocktails',
    data(){
        return{
            cocktails: [],
        }
    },
    methods:{
        getCocktails(){
            axios.get('http://127.0.0.1:8000/api/cocktails', {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results.data);
                this.cocktails = response.data.results.data;

            })
            .catch(function (error) {
                console.warn(error);
                this.$router.push({ name: 'not-found' })
            })
        }
    },
    components:{
        OneCocktail
    },

    created(){
        this.getCocktails();
    }
}
</script>
<style lang="scss" scoped>
</style>