import { createStore } from 'https://cdn.skypack.dev/redux';

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DESPOSIT':
      return state + action.payload;
    case 'WITHDRAW':
      return state - action.payload;
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store);

const despositAction = (payload) => ({
  type: 'DESPOSIT',
  payload,
});

const withdrawAction = (payload) => ({
  type: 'WITHDRAW',
  payload,
});

const despositBtn = document.getElementById('desposit');
const withdrawBtn = document.getElementById('withdraw');

despositBtn.addEventListener('click', () => store.dispatch(despositAction(10)));
withdrawBtn.addEventListener('click', () => store.dispatch(withdrawAction(10)));

store.subscribe(() => {
  console.log(store.getState());
  render();
});

const render = () => {
  const amountEle = document.getElementById('amount');
  amountEle.innerText = store.getState();
};

render();
