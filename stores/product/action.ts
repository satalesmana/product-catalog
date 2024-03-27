export const fetchProduct = async () => {
  const { $useApiFetch } = useNuxtApp();
  const { data: products } = await $useApiFetch('/api/products');
  return products;
};

export const fetchPopularProduct = async () => {
  const { $useApiFetch } = useNuxtApp();
  const { data: popularProduct } = await $useApiFetch('/api/products/?limit=10');
  return popularProduct;
};

export const fetchProductDetail = async (id:string) => {
  const { $useApiFetch } = useNuxtApp();
  const { data: products } = await $useApiFetch(`/api/products/${id}`);
  return products;
};

