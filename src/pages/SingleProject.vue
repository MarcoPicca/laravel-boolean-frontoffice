<template>
    <main class="container">
        <section class="row justify-content-center">
            <!-- <h1>
                Single Post: {{ $route.params.id }}
            </h1> -->
            <SingleCard class="p-0 col-12 mx-4 my-5" :title="project.title" :image="project.project_image" :content="project.content" :fullLength="true"
            />
        </section>
    </main>
</template>
<script>
import SingleCard from '@/components/SingleCard.vue';
import axios from 'axios';

export default {
    name: 'ProjectList',
    data(){
        return{
            project: {},
            id: ''
        }
    },
    methods:{
        getProject(){
            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`, {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.project = response.data.results;

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
        this.getProject();
    }
}
</script>
<style lang="scss">
</style>