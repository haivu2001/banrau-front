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
                            <p class="text-center text-h5"> {{full_name}} </p>
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
                                        <v-card-title>USER PROFILE</v-card-title>
                                        <v-spacer></v-spacer>
                                        <v-btn 
                                            depressed color="white" 
                                            :disabled = isEditing
                                            @click="edit"
                                        >
                                            <span class="green--text">Edit Profile</span>
                                        </v-btn>
                                        <v-btn 
                                            depressed 
                                            color="red"
                                            @click="deleteAcc"
                                        >
                                            <span class="white--text">Delete Account</span>
                                        </v-btn>
                                    </v-toolbar>
                                    <v-divider></v-divider>
                                    
                                    <v-card-text>
                                    <!-- Display user infomation -->
                                    <!-- <info-field
                                        v-for="field in fields"
                                        :key="field.id"
                                        :field="field.key"
                                        :details="field.value"
                                        :isEditing="isEditing"
                                    ></info-field> -->
                                        <info-field field="Username" :details="username" :isEditing=false></info-field>
                                        <info-field field="First Name" :details="first_name" :isEditing=isEditing></info-field>
                                        <info-field field="Last Name" :details="last_name" :isEditing=isEditing></info-field>
                                        <info-field field="Email" :details="email" :isEditing=isEditing></info-field>
                                    </v-card-text>
                                    <v-divider></v-divider>
                                    <v-card-actions >
                                        <v-btn depressed color="white"><span class="green--text">Change password</span></v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn v-if="isEditing"
                                            depressed 
                                            color="white" 
                                            @click="save"
                                        >
                                            <span class="red--text" >Save</span>
                                        </v-btn>
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
import InfoField from '../components/InfoField.vue';
import OrderTable from '../components/OrderTable.vue';
import {mapGetters} from 'vuex'

export default {
    components: { OrderTable, InfoField },
    data: function(){
        return {
            active: "profile",
            tabs: [
                {id: 0, href: "#profile", title: "Profile"},
                {id: 1, href: "#history", title: "Order History"},
            ],
            isEditing : false,
            // fields: [
            //     {id:1, key : "Username", value : },
            //     {id:2, key : "First name", value : },
            //     {id:3, key : "Last name", value : },
            //     {id:4, key : "Email", value : },
            //     {id:5, key : "Phone number", },
            // ],
            // avatar: "Huh?",
            // username : "huh1345",
            // first_name: "Excuse me",
            // last_name: "What?",
            // email: "huh@email.com",
            // phone: "0123456789",
            
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
        edit(){
            this.isEditing = true
        },

        save() {
            this.isEditing = false
            //update user info in database
        },
        deleteAcc(){
            console.log("DELETING...")
            this.$store.dispatch('deleteAccount', {'username' : this.username})
        }
    }
}
</script>



<style scoped>
.user-avatar{
    padding: 8.3% 16.7%;
}
</style>