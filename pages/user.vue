<template>
    <v-container class="fill-height">
        <v-card height="100%" width="100%">
            <v-container>
                <v-row>
                    <v-col sm="3" >
                            <!-- User Avatar -->
                            <v-responsive :aspect-ratio="1/1" class="user-avatar">
                                    <v-avatar
                                        color="error"
                                        size="100%"
                                    ><span class="white--text text-h3">{{ avatar }}</span></v-avatar>
                            </v-responsive>
                            <p class="text-center text-h5"> {{username}} </p>
                            <!--  -->
                            <v-tabs vertical  v-model="active">
                                <v-tab
                                    v-for="tab in tabs"
                                    :key="tab.id"
                                    :href="tab.href"
                                >{{ tab.title }}</v-tab>
                            </v-tabs>
                    </v-col>
                    
                    <v-col sm="9">
                        <!-- Windows  -->
                        <v-tabs-items v-model="active">
                            <!-- Profile page -->
                            <v-tab-item id="profile">
                                <v-card>
                                    <v-toolbar color="elevation-0">
                                        <v-card-title>Thông tin tài khoản</v-card-title>
                                        <v-spacer></v-spacer>
                                        <!-- <v-btn 
                                            depressed color="white" 
                                            :disabled = isEditing
                                            @click="edit"
                                        >
                                            <span class="green--text">Chỉnh sửa</span>
                                        </v-btn> -->
                                        <EditProfileDialog btn-color='white' btn-text-color='green'></EditProfileDialog>
                                        <v-btn 
                                            depressed 
                                            color="red"
                                            @click="deleteAcc"
                                        >
                                            <span class="white--text">Xóa tài khoản</span>
                                        </v-btn>
                                        
                                    </v-toolbar>
                                    <v-divider></v-divider>
                                    
                                    <v-card-text>
                                    <!-- Display user infomation -->
                                        <v-form readonly>
                                            <v-row>
                                                <v-col cols="4">
                                                    <v-subheader>Username</v-subheader>
                                                </v-col>
                                                <v-col cols="8">
                                                    <v-text-field
                                                        solo
                                                        flat
                                                        :value = username
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="4">
                                                    <v-subheader>Họ</v-subheader>
                                                </v-col>
                                                <v-col cols="8">
                                                    <v-text-field
                                                        :value="first_name"
                                                        flat
                                                        solo
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="4">
                                                    <v-subheader>Tên</v-subheader>
                                                </v-col>
                                                <v-col cols="8">
                                                    <v-text-field
                                                        flat
                                                        solo
                                                        :value="last_name"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="4">
                                                    <v-subheader>Email</v-subheader>
                                                </v-col>
                                                <v-col cols="8">
                                                    <v-text-field
                                                        flat
                                                        solo
                                                        :value="email"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-form>
                                    </v-card-text>
                                    <v-divider></v-divider>
                                    <v-card-actions >
                                        <!-- Change Password Dialog -->
                                        <change-password></change-password>
                                    </v-card-actions>
                                </v-card>
                            </v-tab-item>

                            <v-tab-item id="history">
                                <v-card>
                                    <v-toolbar color="elevation-0">
                                        <v-card-title>ORDER HISTORY</v-card-title>
                                        <v-spacer></v-spacer>
                                        <v-card-actions>
                                            <v-btn depressed color="white"><span class="green--text">Clear</span></v-btn>
                                        </v-card-actions>
                                    </v-toolbar>
                                    <v-divider></v-divider>
                                    <!-- Order history table -->
                                        <order-table 
                                            :items = "order_example"
                                        ></order-table>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>

</template>

<script>
import OrderTable from '../components/OrderTable.vue';
import ChangePassword from '../components/ChangePassword.vue';
import EditProfileDialog from '../components/EditProfileDialog.vue'
import {mapGetters} from 'vuex'
import errorVue from '../layouts/error.vue';

export default {
    components: { OrderTable, ChangePassword, EditProfileDialog },
    data: function(){
        return {
            active: "profile",
            tabs: [
                {id: 0, href: "#profile", title: "Thông tin Tài khoản"},
                {id: 1, href: "#history", title: "Lịch sử đơn hàng"},
            ],
            isEditing : false,
            
            emailRules: [
                v => !!v || 'Vui lòng nhập email',
                v => /.+@.+\..+/.test(v) || 'Vui lòng nhập đúng định dạng email',
                ],

            // Order:{id, date, method, shipto, status, action}
            order_example :[
                { id : 1, date : "11/15/2021", total : 200000, method : "Cash", status : "complete"},
                { id : 2, date : "10/10/2021", total : 150000, method : "Credit", status : "complete"},
                { id : 3, date : "09/20/2021", total : 100000, method : "Cash", status : "complete"},
                { id : 3, date : "09/20/2021", total : 100000, method : "Cash", status : "complete"},
                { id : 3, date : "09/20/2021", total : 100000, method : "Cash", status : "complete"},
                { id : 3, date : "09/20/2021", total : 100000, method : "Cash", status : "complete"},
                { id : 3, date : "09/20/2021", total : 100000, method : "Cash", status : "complete"},
                { id : 3, date : "09/20/2021", total : 100000, method : "Cash", status : "complete"},
                { id : 3, date : "09/20/2021", total : 100000, method : "Cash", status : "complete"},
                { id : 3, date : "09/20/2021", total : 100000, method : "Cash", status : "complete"},
                { id : 3, date : "09/20/2021", total : 100000, method : "Cash", status : "complete"},
                { id : 3, date : "09/20/2021", total : 100000, method : "Cash", status : "complete"},
                { id : 3, date : "09/20/2021", total : 100000, method : "Cash", status : "complete"},
                { id : 3, date : "09/20/2021", total : 100000, method : "Cash", status : "complete"}
            ]
        }
    },
    computed: {
        ...mapGetters(['first_name', 'last_name', 'username', 'email']),
        avatar(){
            return this.username[0]
        }
    },

    methods: {
        deleteAcc(){
            console.log("DELETING...")
            this.$store.dispatch('deleteAccount', {'username' : this.username})
            this.$router.push('/')
        },

    },
    beforeCreate: function(){
      if (this.$store.getters.isLoggedIn === false){
            this.$nuxt.error({ 'statusCode': 404, message: 'Page not found' })
        }
    }
}
</script>



<style scoped>
.user-avatar{
    padding: 8.3% 16.7%;
}
</style>