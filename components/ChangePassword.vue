<template>
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Đổi mật khẩu
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Đổi mật khẩu</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
							<v-col cols="4">
								<v-subheader>Mật khẩu hiện tại</v-subheader>
							</v-col>
							<v-col cols="8">
								<v-text-field
									type="password"
									v-model="old_pass"
									:rules="[rules.required]"
								></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="4">
								<v-subheader>Mật khẩu mới</v-subheader>
							</v-col>
							<v-col cols="8">
								<v-text-field
									type="password"
									v-model="new_pass"
									:rules="[rules.required]"
								></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="4">
								<v-subheader>Nhập lại mật khẩu mới</v-subheader>
							</v-col>
							<v-col cols="8">
								<v-text-field
									type="password"
									v-model="new_pass2"
									:rules="[rules.match]"
								></v-text-field>
							</v-col>
						</v-row>
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
            @click="submitPassword"
          >
            Xác nhận
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    data(){
        return{
						dialog: false,
            old_pass : '',
            new_pass : '', 
						new_pass2 : '', 
						rules: {
							required: value => !!value || 'Vui lòng nhập mật khẩu',
							match : v => (!!v  && v) === this.new_pass  || "Vui lòng nhập trùng khớp với mật khẩu mới"
						},
        }
    },
    methods:{
				async clearForm(){
					this.dialog = false,
					this.old_pass = '';
					this.new_pass = '';
				},
        async submitPassword(){
            let result = await this.$store.dispatch('changePassword', {
							'oldpassword' : this.old_pass,
							'newpassword' : this.new_pass,
						})
						this.clearForm()
            if (result){
                alert('Đổi mật khẩu thành công')
            } else {
                alert('Vui lòng nhập đúng mật khẩu')
            }
        }
    }
}
</script>