export const getListProduct = (state: any) => {
  return state.listProduct;
};

export const setListData = (state: any) => (payload: any) => {
  state.listProduct = payload;
};

export const getPopularProduct = (state: any) => {
  return state.popularProduct;
};

export const setPopularProduct = (state: any) => (payload: any) => {
  state.popularProduct = payload;
};

export const getSelectedProduct = (state: any) => {
  return state.selectedProduct;
};

export const setSelectedProduct = (state: any)  => (payload: any) => {
  return state.selectedProduct = payload;
};
