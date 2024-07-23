import { createStore } from 'https://cdn.skypack.dev/redux';

const initialState = [];

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      const newHobbyList = [...state, action.payload];
      return newHobbyList;
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

// action
const addHobbyAction = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    payload: hobby,
  };
};

// listener
store.subscribe(() => {
  render(store.getState());
});

// helpers
const render = (list) => {
  if (!list || !Array.isArray(list) || list?.length === 0) {
    return console.log('list is not an array');
  }

  const ulElement = document.querySelector('#hobby-list');
  if (!ulElement) {
    return console.log('not found ulElement');
  }

  ulElement.innerHTML = '';

  for (const element of list) {
    const liElement = document.createElement('li');
    liElement.textContent = element;
    ulElement.appendChild(liElement);
  }
};

const formElement = document.querySelector('#hobby-form');
const handleSubmitForm = (e) => {
  e.preventDefault();
  const hobbyTextElement = formElement.querySelector('#hobby-text');
  if (!hobbyTextElement) {
    return console.log('not found hobbyTextElement');
  }
  store.dispatch(addHobbyAction(hobbyTextElement.value));
  hobbyTextElement.value = '';
};

formElement.addEventListener('submit', (e) => handleSubmitForm(e));

render(store.getState());
