<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">User List</div>
            <div class="card-body">
                <table class="table table-bordered" id="myTable">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user,index) in allUser" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        mapState,
        mapGetters,
        mapActions
    } from 'vuex'

    export default {
        computed: {
            ...mapState('Users', ['users']),
            ...mapGetters('Users', ['allUser'])
        },
        methods: {
            ...mapActions('Users', ['fetchData'])
        },
        created() {
            this.fetchData();
        }
    }

</script>
