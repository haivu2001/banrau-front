<template>
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color='white'
          depressed
          v-bind="attrs"
          v-on="on"
        >
          <span class='green--text'>Chỉnh sửa</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Chỉnh sửa trang cá nhân</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form>
              <v-row>
                  <v-col cols="4">
                      <v-subheader>Họ</v-subheader>
                  </v-col>
                  <v-col cols="8">
                      <v-text-field
                        v-model="new_fname"
                      ></v-text-field>
                  </v-col>
              </v-row>
              <v-row>
                  <v-col cols="4">
                      <v-subheader>Tên</v-subheader>
                  </v-col>
                  <v-col cols="8">
                      <v-text-field
                        v-model="new_lname"
                      ></v-text-field>
                  </v-col>
              </v-row>
              <v-row>
                  <v-col cols="4">
                      <v-subheader>Email</v-subheader>
                  </v-col>
                  <v-col cols="8">
                      <v-text-field
                        v-model="new_email"
                        :rules="[rules.email]"
                      ></v-text-field>
                  </v-col>
              </v-row>
          </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Hủy
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="updateProfile"
          >
            Lưu
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    props: ['btn-color', 'btn-text-color'],
    data(){
        return{
			dialog: false,
            new_fname : '', 
            new_lname :  '',
            new_email : '',
			rules: {
                required: value => !!value || 'Vui lòng nhập vào mục này',
                email : v => /.+@.+\..+/.test(v) || 'Vui lòng nhập đúng định dạng email'
			},
        }
    },
    computed:{
      ...mapGetters(['username','first_name', 'last_name', 'email']),
      fulname(){
        return this.first_name + ' ' + this.last_name;
      }
    },
    methods:{
        async updateProfile(){
            this.dialog = false;
            let result = await this.$store.dispatch('updateProfile', {
							'first_name' : this.new_fname,
              'last_name' : this.new_lname,
              'email' : this.new_email
						})
            if (result){
                alert('Cập nhật thành công')
            } else {
                console.log('Cập nhật thất bại')
            }
        }
    },
    mounted: function () {
      this.new_fname = this.first_name;
      this.new_lname = this.last_name;
      this.new_email = this.email;
    },
}
</script>