<template>
    <div class="col-md-12">

        <div class="card">
            <div class="card-header">
                User <a :href="addNewURL" class="btn btn-sm btn-outline-secondary-b float-right"> <i class="fa fa-plus"></i>
                    Add New</a>
            </div>
            <div class="card-body">
                <semipolar-spinner v-if="spinner"/>
                <vue-bootstrap4-table v-else :rows="allUser" :columns="columns" :config="config" :classes="classes">
                    <template slot="edit_url" slot-scope="props">
                        <span>
                            <a :href="props.cell_value" class="btn btn-sm btn-outline-primary">
                                <i class="fa fa-edit"></i>
                            </a>
                            <button @click.prevent="deleteUser(props.row.id)" class="btn btn-sm btn-outline-danger">
                                <i class="fa fa-trash"></i>
                            </button>
                        </span>
                    </template>
                </vue-bootstrap4-table>
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

    import VueBootstrap4Table from 'vue-bootstrap4-table'

    export default {
        data: function () {
            return {
                columns: [{
                        label: "#",
                        name: "vbt_id",
                        row_text_alignment: "text-left",
                        column_text_alignment: "text-left",
                        sort: true,
                    },
                    {
                        label: "Name",
                        name: "name",
                        row_text_alignment: "text-left",
                        column_text_alignment: "text-left",
                        sort: true,
                    },
                    {
                        label: "Email",
                        name: "email",
                        row_text_alignment: "text-left",
                        column_text_alignment: "text-left",
                        sort: true,
                    },
                    {
                        label: "Action",
                        name: "edit_url",
                        row_text_alignment: "text-left",
                        column_text_alignment: "text-left",
                    },
                ],
                config: {
                    card_mode: false,
                    pagination: true,
                    pagination_info: true,
                    num_of_visibile_pagination_buttons: 7,
                    per_page: 10,
                    global_search: {
                        placeholder: "Search",
                        visibility: true,
                        case_sensitive: false
                    },
                    per_page_options: [10, 25, 50, 100],
                    show_refresh_button: false,
                    show_reset_button: false,
                    preservePageOnDataChange: true
                },
                classes: {
                    table: "table-bordered",
                }
            }
        },
        components: {
            VueBootstrap4Table
        },
        computed: {
            ...mapState('Users', ['users','spinner']),
            ...mapGetters('Users', ['allUser', 'addNewURL'])
        },
        methods: {
            ...mapActions('Users', ['fetchData', 'addNewUser', 'deleteUser']),
        },
        created() {
            this.fetchData();
            this.addNewUser();
        }
    }

</script>
