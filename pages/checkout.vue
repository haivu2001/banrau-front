<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Giỏ hàng của bạn</span>
          <span class="badge badge-secondary badge-pill"></span>
        </h4>
        <form class="border:1px">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Mã giảm giá" />
            <div class="input-group-append">
              <button type="submit" class="btn btn-secondary">Đổi</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">Địa chỉ thanh toán</h4>
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
            <label for="username">Tên đăng nhập</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">@</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
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
              <small class="text-muted">Tên đầy đủ được ghi trên thẻ</small>
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
          <button class="btn btn-primary btn-lg btn-block" type="submit" to="/index">
            Tiếp tục thanh toán
          </button>
        </form>
      </div>
    </div>
    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="mb-1">© 2020 - 2022 Shop Bán Rau</p>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="#">Quyền riêng tư</a></li>
        <li class="list-inline-item"><a href="#">Điều khoản</a></li>
        <li class="list-inline-item"><a href="#">Hỗ trợ</a></li>
      </ul>
    </footer>
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