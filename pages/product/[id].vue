<script setup lang="ts">
  import { useProductStore } from '~/stores/product';
  const route = useRoute()
  const productLoading = ref(false)

  const product = useProductStore();
  const detailProduct = computed(() => product.getSelectedProduct);

  const fetchDetail = async ()=>{
    productLoading.value = true
    const { value } = await product.fetchProductDetail(route.params.id);
    product.setSelectedProduct(value?.data);
    productLoading.value = false
  }

  onNuxtReady( ()=>{
    fetchDetail()
  })
  
</script>

<template>
    <main class="container">
      <div class="left-column">
        <center v-if="productLoading">
          <div class="skeleton"  style="width: 80%; height: 430px; margin: 35px;"/>
        </center>

        <img 
          v-if="!productLoading"
          class="active" 
          :src="detailProduct?.image" 
          :alt="detailProduct?.category">
      </div>

      <div class="right-column">
        <div class="product-description" v-if="productLoading">
            <div class="skeleton" style="width: 100px; height: 30px;"/>
            <div class="skeleton" style="width: 100%; height: 30px; margin-top: 10px;"/>

            <div class="skeleton" style="width: 100%; height: 20px; margin-top: 10px;"/>
            <div class="skeleton" style="width: 80%; height: 20px; margin-top: 10px;"/>
            <div class="skeleton" style="width: 70%; height: 20px; margin-top: 10px;"/>
            <div class="skeleton" style="width: 50%; height: 20px; margin-top: 10px;"/>
        </div>

        <div class="product-description" v-if="!productLoading">
            <span>{{detailProduct?.category}}</span>
            <h1>{{ detailProduct?.title }} </h1>
            <p>{{ detailProduct?.description }} </p>
        </div>
        <!-- <div class="product-configuration">
            <div class="product-color">
              <span>Color</span>
              <div class="color-choose">
                  <div>
                    <input data-image="red" type="radio" id="red" name="color" value="red" checked>
                    <label for="red"><span></span></label>
                  </div>
                  <div>
                    <input data-image="blue" type="radio" id="blue" name="color" value="blue">
                    <label for="blue"><span></span></label>
                  </div>
                  <div>
                    <input data-image="black" type="radio" id="black" name="color" value="black">
                    <label for="black"><span></span></label>
                  </div>
              </div>
            </div>

            <div class="cable-config">
              <span>Cable configuration</span>
              <div class="cable-choose">
                  <button>Straight</button>
                  <button>Coiled</button>
                  <button>Long-coiled</button>
              </div>
              <a href="#">How to configurate your headphones</a>
            </div>
        </div> -->

        <div>
          <div v-if="productLoading" class="product-price">
            <div class="skeleton" style="width: 100px; height: 30px;"/>
            <div class="skeleton cart-btn" style="margin-left: 15px; width: 100px; height: 20px;"/>
          </div>

          <div v-if="!productLoading" class="product-price">
            <span>$ {{ detailProduct?.price }}</span>
            <a href="#" class="cart-btn">Add to cart</a>
          </div>

        </div>
      </div>
    </main>
</template>

<style scoped lang="scss">

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
}

.left-column {
  width: 65%;
  position: relative;
}

.right-column {
  width: 35%;
  margin-top: 60px;
}

.left-column img {
  width: 60%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: all 0.3s ease;
}

.left-column img.active {
  opacity: 1;
}

.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}
.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.product-description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
}
.product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
}

.product-color span,
.cable-config span {
  font-size: 14px;
  font-weight: 400;
  color: #86939E;
  margin-bottom: 20px;
  display: inline-block;
}

.product-color {
  margin-bottom: 30px;
}

.color-choose div {
  display: inline-block;
}

.color-choose input[type="radio"] {
  display: none;
}

.color-choose input[type="radio"] + label span {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: -1px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
}

.color-choose input[type="radio"] + label span {
  border: 2px solid #FFFFFF;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.33);
}

.color-choose input[type="radio"]#red + label span {
  background-color: #C91524;
}
.color-choose input[type="radio"]#blue + label span {
  background-color: #314780;
}
.color-choose input[type="radio"]#black + label span {
  background-color: #323232;
}

.color-choose input[type="radio"]:checked + label span {
  background-repeat: no-repeat;
  background-position: center;
}

.cable-choose {
  margin-bottom: 20px;
}

.cable-choose button {
  border: 2px solid #E1E8EE;
  border-radius: 6px;
  padding: 13px 20px;
  font-size: 14px;
  color: #5E6977;
  background-color: #fff;
  cursor: pointer;
  transition: all .5s;
}

.cable-choose button:hover,
.cable-choose button:active,
.cable-choose button:focus {
  border: 2px solid #86939E;
  outline: none;
}

.cable-config {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}

.cable-config a {
  color: #358ED7;
  text-decoration: none;
  font-size: 12px;
  position: relative;
  margin: 10px 0;
  display: inline-block;
}
.cable-config a:before {
  content: "?";
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid rgba(53, 142, 215, 0.5);
  display: inline-block;
  text-align: center;
  line-height: 16px;
  opacity: 0.5;
  margin-right: 5px;
}

.product-price {
  display: flex;
  align-items: center;
}

.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474D;
  margin-right: 20px;
}

.cart-btn {
  display: inline-block;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
}
.cart-btn:hover {
  background-color: #64af3d;
}

/* Responsive */
@include sm {
  .container {
    flex-direction: column;
  }

  .left-column,
  .right-column {
    width: 100%;
  }

  .left-column img {
    position:inherit;
   }
}

@include xs {
  .container {
    flex-direction: column;
  }

  .left-column,
  .right-column {
    width: 100%;
  }

  .left-column img {
    position:inherit;
   }
}
</style>