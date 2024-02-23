<template lang="">
    <main class="container">
        <section class="row justify-content-center">
            <div class="col-12">
                <h1 class="pt-5 pb-3">
                    Projects vue router:
                </h1>
            </div>
            <SingleCard class="card p-0 col-3 mx-4 my-5" v-for="project in projects" :key="project"
                :title="project.title" :image="project.project_image" :linkRoute="{ name: 'single-project', params: { id: project }}" linkLabel="Read more..."
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
            projects: [],
        }
    },
    methods:{
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.projects = response.data.results;

            })
            .catch(function (error) {
                console.warn(error);
                this.$router.push({ name: 'not-found' })
            })
        }
    },
    components:{
        SingleCard
    },

    created(){
        this.getProjects();
    }
}
</script>
<style lang="scss" scoped>
</style>