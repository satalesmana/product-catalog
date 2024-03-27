import state from './state';
import * as actions from './action';
import * as getters from './getters';

export const useProductStore = defineStore('product', {
  state,
  getters: { ...getters },
  actions: { ...actions },
});
