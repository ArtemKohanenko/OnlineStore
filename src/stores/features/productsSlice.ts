import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/product';

interface ProductsState {
  products: IProduct[];
  selectedProduct: IProduct | null;
}

const initialState: ProductsState = {
  products: [
    {
        productId: '1',
        name: 'First',
        description:'First',
        price: 1488,
        picture: 'src/assets/product_example.png'
    },
    {
        productId: '2',
        name: 'Second',
        description:'Second',
        price: 1488,
        picture: 'src/assets/product_example.png'
    },
    {
        productId: '3',
        name: 'Third',
        description:'Third',
        price: 1488,
        picture: 'src/assets/product_example.png'
    },
    {
        productId: '4',
        name: 'Fourth',
        description:'Fourth',
        price: 1488,
        picture: 'src/assets/product_example.png'
    },{
        productId: '5',
        name: 'Fifth',
        description:'Fifth',
        price: 1488,
        picture: 'src/assets/product_example.png'
    }
  ],
  selectedProduct: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state: ProductsState, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    }
  }
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;