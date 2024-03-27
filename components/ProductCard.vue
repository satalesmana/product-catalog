<script setup lang="ts">
import { useProductStore } from '~/stores/product';
const router = useRouter();
const product = useProductStore();

const props = defineProps({
    data: { type: Object, default:()=>{} },
})

const onSelectItem=()=>{
    product.setSelectedProduct(props?.data);
    
    router.push(`/product/${props.data?.id}`);
}
</script>
<template>
    <div class="card" @click="onSelectItem">
        <div class=”card-image”>
            <center>
                <img :src="data?.image">
            </center>
        </div>

        <div class="card-container">
            <div class="title ">{{ data?.title }}</div>
            <div class="price">$ {{ data?.price }}</div>
        </div>

        <div class="card-fother">
            <span class="cip" > {{ data?.category }}</span>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 190px;
    height: 300px;
    margin: auto;
    border-radius: 4px;
    cursor: pointer;

    .card-container {
        padding: 2px 16px;
        height: 90px;
        .title{
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
            font-size: 13px;
            height: 30px;
        }

        .price {
            color: grey;
            font-weight: bold;
            text-align: center;
            padding-top: 5px;
        }

    }

    .card-fother{
        display: flex;
        height: 30px;
        padding: 5px;
        float: right;
        .cip{
            font-size: 12px;
            border: 1px solid grey;
            border-radius: 5px;
            padding: 5px;
            display: inline-block;
            align-self:flex-end ;
            
            color: grey;
        }
    }

}

img {
    margin-top: 5px;
    width: 150px;
    height: 150px;
    object-fit:fill;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}



</style>