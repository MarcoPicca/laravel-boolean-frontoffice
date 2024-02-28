<template>
    <div class="container">
        <div class="row">
            <div class="col 12">
                <h1 class="my-5">I nostri contatti</h1>
                <ul>
                    <li v-for="(singleContact, index) in contactLinks" :key="index" class="mb-5">
                        Nome: {{singleContact.name}} -
                        Numero di telefono: {{singleContact.telephoneNumber}} -
                        Indirizzo email: {{singleContact.emailAdress}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            contactLinks: [
                {
                    name: 'Giovanni Rossi',
                    telephoneNumber: '333-1234567',
                    emailAdress: 'giovanni.rossi@email.com'
                },
                {
                    name: 'Maria Bianchi',
                    telephoneNumber: '333-7654321',
                    emailAdress: 'maria.bianchi@email.com'
                },
                {
                    name: 'Luca Verdi',
                    telephoneNumber: '333-9876543',
                    emailAdress: 'luca.verdi@email.com'
                },
                {
                    name: 'Chiara Russo',
                    telephoneNumber: '333-2468101',
                    emailAdress: 'chiara.russo@email.com'
                },
                {
                    name: 'Marco Gialli',
                    telephoneNumber: '333-1122334',
                    emailAdress: 'giovanni.rossi@email.com'
                },
                {
                    name: 'Sara Neri',
                    telephoneNumber: '333-5566778',
                    emailAdress: 'sara.neri@email.com'
                },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>