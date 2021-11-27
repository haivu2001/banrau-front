<template>
  <v-container>
    <div class="row">
      <div class="col-md-4 order-md-2 mb-4">
      </div>
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">Form thanh toán</h4>
        <form class="needs-validation" novalidate="">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">Tên</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                value=""
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Họ</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                value=""
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="email"
              >Email<span class="text-muted">(Tùy chọn)</span></label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="you@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="address">Địa chỉ</label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="Đường, Quận"
            />
          </div>
          <div class="mb-3">
            <label for="address2"
              >Địa chỉ 2<span class="text-muted">(Tùy chọn)</span></label
            >
            <input
              type="text"
              class="form-control"
              id="address2"
              placeholder="Số nhà, phường"
            />
          </div>
          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="country">Tỉnh</label>
              <select
                class="custom-select d-block w-100"
                id="country"
              >
                <option value="">Chọn</option>
                <option>Hà nội</option>
                <option>TP.HCM</option>
              </select>
            </div>
            <div class="col-md-4 mb-3">
              <label for="state">Quận, Huyện</label>
              <select
                class="custom-select d-block w-100"
                id="state"
              >
                <option value="">Chọn</option>
                <option>Thủ đức</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label for="zip">Mã bưu chính</label>
              <input
                type="text"
                class="form-control"
                id="zip"
                placeholder=""
              />
            </div>
          </div>
          <hr class="mb-4" />
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
          <hr class="mb-4" />
          <h4 class="mb-3">Thanh toán</h4>
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
              <label for="cc-name">Tên trên thẻ</label>
              <input
                type="text"
                class="form-control"
                id="cc-name"
                placeholder=""
              />
              <!-- <small class="text-muted">Tên đầy đủ được ghi trên thẻ</small> -->
            </div>
            <div class="col-md-6 mb-3">
              <label for="cc-number">Số thẻ</label>
              <input
                type="text"
                class="form-control"
                id="cc-number"
                placeholder=""
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="cc-expiration">Ngày hết hạn</label>
              <input
                type="text"
                class="form-control"
                id="cc-expiration"
                placeholder=""
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="cc-cvv">CVV</label>
              <input
                type="text"
                class="form-control"
                id="cc-cvv"
                placeholder=""
              />
            </div>
          </div>
          <hr class="mb-4" />
          <v-btn  block color="primary" to = "/">Hoàn thành Thanh Toán</v-btn>
        </form>
      </div>
    </div>
    
    <!-- <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="green accent-5 lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Mua rau sạch online đang là hình thức mua hàng nhận được nhiều sự quan tâm nhất của khách hàng hiện nay, hiểu và nắm được nhu cầu của phần đông người tiêu dùng chúng tôi đã nhập rất nhiều người hàng rau sạch về cửa hàng và phục vụ cho nhu cầu của tất cả mọi khách hàng một cách nhanh chính và thuận tiện nhất.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Cửa hàng rau củ quả</strong>
      </v-card-text>
    </v-card>
  </v-footer> -->
  </v-container>
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