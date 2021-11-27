<template>
  <div id="app">
    <v-app id="inspire">
      <v-container>
        <div class="row">
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Form thanh toán</h4>
            <form class="needs-validation" novalidate="">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <v-text-field placeholder="Tên">Tên</v-text-field>
                </div>
                <div class="col-md-6 mb-3">
                  <v-text-field placeholder="Họ"></v-text-field>
                </div>
              </div>
              <div class="mb-3">
                <v-text-field placeholder="Email"></v-text-field>
              </div>
              <div class="mb-3">
                <v-text-field placeholder="Địa chỉ"></v-text-field>
              </div>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <v-text-field placeholder="Tỉnh"></v-text-field>
                </div>
                <div class="col-md-4 mb-3">
                  <v-text-field placeholder="Quận, Huyện"></v-text-field>
                </div>
                <div class="col-md-4 mb-3">
                  <v-text-field placeholder="Mã Bưu Chính"></v-text-field>
                </div>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="same-address"
                />
                <label class="custom-control-label" for="same-address"
                  >Địa chỉ giao hàng của tôi giống với địa chỉ thanh toán</label
                >
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="save-info"
                />
                <label class="custom-control-label" for="save-info"
                  >Lưu thông tin cho lần đặt hàng sau</label
                >
              </div>
              <br>
              <h4 class="mb-3">Phương Thức Thanh Toán</h4>
              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    checked=""
                  />
                  <label class="custom-control-label" for="credit"
                    >Thẻ ngân hàng</label
                  >
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="debit">Ví điện tử</label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="paypal"
                    >Thanh toán khi nhận hàng</label
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <v-text-field placeholder="Tên Trên Thẻ"></v-text-field>
                  <!-- <small class="text-muted">Tên đầy đủ được ghi trên thẻ</small> -->
                </div>
                <div class="col-md-6 mb-3">
                  <v-text-field placeholder="Số Thẻ"></v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <v-text-field placeholder="Ngày Hết Hạn"></v-text-field>
                </div>
                <div class="col-md-3 mb-3">
                  <v-text-field placeholder="Mã CVV"></v-text-field>
                </div>
              </div>
              <br>
              <v-btn  block color="primary" to = "/">Hoàn thành Thanh Toán</v-btn>
            </form>
          </div>
        </div>
      </v-container>
    </v-app>
  </div>
</template>

<script>

</script>

<style scoped>
.container {
  max-width: 960px;
}
.lh-condensed {
  line-height: 1.25;
}
button[type="submit"] {
  background-color: rgb(36, 228, 29);
  color: white;
}
button[type="submit"]:hover {
  background-color: #15721d;
}
</style>