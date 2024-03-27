interface State {
  listProduct: Array<Product>[];
  popularProduct: Array<Product>[];
  selectedProduct:Product | null
}

interface Rating {
  rate: Number;
  count: Number;
}

interface Product {
  id: String;
  title: String;
  price: Number;
  description: String;
  pricategoryce: String;
  image: String;
  rating: Rating;
}

export default function (): State {
  return {
    listProduct:[],
    popularProduct:[],
    selectedProduct: null
  };
}
