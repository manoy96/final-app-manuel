<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <hr>
        
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
        <button @click="changeName1">Waluigi</button>
        <button @click="changeName2">Wario</button>
        <button @click="changeName3">Peach</button>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Manuel',
            };
        },
        methods: {
            changeName1() {
                this.name = 'Waluigi'
            },
            changeName2() {
                this.name = 'Wario'
            },
            changeName3() {
                this.name = 'Peach'
            },
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit,
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
