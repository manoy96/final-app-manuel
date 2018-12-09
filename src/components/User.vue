<template>
    <div class="component">
        <h1>Learn About Amiibos</h1>
        <hr>
        
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name"></app-user-detail>
            </div>
            <!-- <div class="col-xs-12 col-sm-6">
            </div> -->
        </div>
        <v-layout align-center column>
            <p>More Facts</p>
            <button @click="changeName1" class="my-1">Link vs Mario</button>
            <button @click="changeName2" class="my-1">Sales</button>
            <button @click="changeName3" class="my-1">Gold Mario</button>
        </v-layout>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';

    export default {
        data: function() {
            return {
                name: 'The bottums of Amiibo are Excatly 2 inches or about 5 centimeters',
            };
        },
        methods: {
            changeName1() {
                this.name = 'Link is actually more popular than Mario In Japan'
            },
            changeName2() {
                this.name = 'Over 15 million Amiibo have been sold to date, and Nintendo now owns more of the toys for video games market than Skylanders.'
            },
            changeName3() {
                this.name = 'Target’s stock of Gold Mario Amiibos sold out in just 15 minutes.'
            },
        },
        components: {
            appUserDetail: UserDetail,
        },
    }
</script>

<style scoped>
    div {
        
    }
    button {
        background-color: #666;
        color: #fff;
        width: 40%;
        height: 2rem;
    }
</style>
