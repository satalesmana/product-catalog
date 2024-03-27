<script setup>
    import { useProductStore } from '~/stores/product';
    const product = useProductStore();
    const popularLoading = ref(false);
    const productLoading = ref(false);
    const alProduct = computed(() => product.getListProduct);
    const popularProduct = computed(() => product.getPopularProduct);

    const fetchAllProduct = async () => {
        productLoading.value = true
        const { value } = await product.fetchProduct();
        product.setListData(value?.data);
        productLoading.value = false
    };

    const fetchPopularProduct = async () => {
        popularLoading.value = true
        const { value } = await product.fetchPopularProduct();
        product.setPopularProduct(value?.data);
        popularLoading.value = false
    };

    onNuxtReady(async ()=>{
        await fetchAllProduct();
        await fetchPopularProduct();
    })
</script>

<template>
    <main>
        <section class="search pt-xl">
            <div class="container">
                <div class="card p-m">
                    <SearchForm/>
                </div>
            </div>
        </section>

        <section class="popular-product">
            <div class="container">
                <div class="card pl-m">
                    <label class="sarch-label">Product popular</label>
                </div>
                <div class="card pl-m">
                    <div class=" scroll">
                        <div v-if="popularLoading">
                            <div class="skeleton-card skeleton item"></div>
                            <div class="skeleton-card skeleton item"></div>
                            <div class="skeleton-card skeleton item"></div>
                            <div class="skeleton-card skeleton item"></div>
                        </div>
                        <ProductCard 
                            v-if="!popularLoading" 
                            class="item" 
                            v-for="item in popularProduct" 
                            :key="item.id" 
                            :data="item" />
                    </div>
                </div>
            </div>
        </section>

        <section class="popular-product pt-m">
            <div class="container ">
                <div class="card pl-m">
                    <label class="sarch-label">All Product</label>
                </div>
                <div class="card product-grid pl-m pt-xs" v-if="productLoading">
                    <div class="skeleton-card skeleton"></div>
                    <div class="skeleton-card skeleton"></div>
                    <div class="skeleton-card skeleton"></div>
                    <div class="skeleton-card skeleton"></div>
                    <div class="skeleton-card skeleton"></div>
                    <div class="skeleton-card skeleton"></div>
                </div>

                <div class="card product-grid pl-m pt-xs" v-if="!productLoading">
                    <ProductCard 
                     v-for="item in alProduct" 
                     :key="item.id" :data="item"/>
                </div>
            </div>
        </section>
        
    </main>
</template>

<style scoped lang="scss">
    .scroll{
        position: relative;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        scroll-snap-type: x mandatory;
    }

    .sarch-label{
        font-weight:700;
        color:#23407b;
    }

    .item{
        margin: 10px;
        display: inline-block;
        scroll-snap-align: start;
        scroll-margin-left: 20px;
        width: 250px;
    }

    .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 2rem;
        padding: 0;
        list-style-type: none;
    }
</style>
