// SETUP REDUX STORE
// State

const initialState = JSON.parse(localStorage.getItem('hobby_list')) || [];

// Reducer

const hobbyReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_HOBBY': {
            const newHobbyList = [...state];
            newHobbyList.push(action.payload);
            return newHobbyList;
        }
        default:
            return state;
    }
};

// Store

const store = window.Redux.createStore(hobbyReducer);

// ----------------------------

// RENDER REDUC HOBBY LIST

const renderHobbyList = (hobbyList) => {
    if(!Array.isArray(hobbyList) || hobbyList.length === 0) return;

    const ulEl = document.querySelector('#hobbies-list');

    if(!ulEl) return;

    // reset previous content of ul
    ulEl.innerHTML = '';

    for (const hobby of hobbyList) {
        const liEl = document.createElement('li');
        liEl.textContent = hobby;
        ulEl.appendChild(liEl);
    }
}

// ----------------------------

// RENDER INITIAL HOBBY LIST

const initialHobbyList = store.getState();
renderHobbyList(initialHobbyList);

// ----------------------------

// HANDLE FORM SUBMIT

const hobbyFormEl = document.querySelector('#hobby-form');

if(hobbyFormEl) {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        const hobbyInputEl = hobbyFormEl.querySelector('#hobby-input');

        if(!hobbyInputEl) return;

        const action = {
            type: 'ADD_HOBBY',
            payload: hobbyInputEl.value,
        };
        store.dispatch(action);

        // hobbyFormEl.reset();
    }

    hobbyFormEl.addEventListener('submit', handleFormSubmit);
}

store.subscribe(() => {
  const newHobbyList = store.getState();
  renderHobbyList(newHobbyList);

  localStorage.setItem('hobby_list', JSON.stringify(newHobbyList));
});

// ----------------------------