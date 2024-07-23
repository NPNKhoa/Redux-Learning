# REDUX LEARNING

**See workflow here:**
![redux-workflow](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

## Khái niệm:

- **`Redux is predictable state container for Javascript app`**
- Là một thư viện JS quản lý trạng thái có thể dự đoán được
- Store: Kho lưu trữ các state (trạng thái) và reducer. Stpre được tạo ra thông qua việc gọi hàm createStore() của redux và truyền vào reducer (Ex: `const store = createStore(reducer)`)
- State: Trạng thái. Read-only, chỉ có thể thay đổi khi một action được dispath, có thể được lấy thông qua getState() method của store (Ex: `store.getState()`)
- Reducer: Một hàm nhận vào state và action. Khi nhận vào một state, cần có trạng thái khởi tạo ban đầu cho nó. Ví dụ:

  ```javascript
  const reducer = (state = 0, action) => {
    switch (action.type) {
      case 'DISPOSIT':
        return state + action.payload;
      case 'WITHDRAW':
        return state + action.payload;
        case...;
      default:
        return state;
    }
  };
  ```

  **Lưu ý**: Khi tạo ra một reducer, lưu ý 2 việc cần nhớ: _Khởi tạo giá trị ban đầu_ và _Trả về giá trị ban đầu trong default của switch_

- Action: Đơn giản thì nó là một object chứa 2 trường là type và payload. Khi được một action được dispath, nó sẽ dựa vào type đã được định nghĩa ở reducer để thực hiện một hành động với payload và state. Ví dụ khai báo action:
  ```javascript
  const addAction = (payload) => {
      return {
        type: 'DISPOSIT'
        payload
      }
  }
  ```
- Dispath: Gọi hàm này thông qua store để dispath một action (Ex: `dispath(addAction(10))`)

## Advanced Topics:

### Redux & React Redux

- Không khác gì nhiều so với Redux trong javascript app bình thường.

- Sử dụng thêm một số hàm của Redux. Sử dụng thêm thư viện `react-redux` (hỗ trợ kết nói vào redux store một cách dễ dàng hơn).

- Khi có nhiều reducer, cần tách các reducer này ra theo từng feature, sau đó dùng hàm `combineReducers` từ thư viện `react-redux` để gom các reducer này lại thành một root reducer. Hàm combineReducers này nhận vào một object và trả ra một reducer. Ví dụ:

  ```javascript
  const rootReducer = combineReducers({
    user: userReducer,
    hobby: hobbyReducer,
  });
  ```

- Nên tạo các `action creator` thay vì các `action` thông thường để dễ dàng quản lý cũng như kiểm soát code và tái sử dụng chúng.

- Connect vào redux store: dùng 2 hooks: useSelector() và useDispatch():

  - useSelector(): Dùng để kết nối và lấy state từ trong store ra. Hook này nhận vào một callback function với tham số là state (là nguyên cái store), từ đó có thể lấy ra các thuộc tính cần thiết. Ví dụ: `const hobbyList = useSelector(state => state.hobby.list)`. **Lưu ý**: trong một component hoàn toàn có thể có nhiều useSelector để lấy ra những state cần thiết.

  - useDispatch(): chủ yếu dùng để nhận function dispatch để có thể dispatch một action.

- Các bước để cấu hình redux:

  - Set up store:
    1. Set up các reducers và root reducer
    2. Cài đặt các action creators
    3. Set up store
  - Set up Provider: (cho phép store có thể được truy cập từ bất kỳ component nào => phải set up ở tầng cao nhất của app).

  ```Javascript
  import { Provider } from 'react-redux';
  import store from 'path/to/store';

  <Provider store={store}>
    <App />
  </Provider>
  ```

- **Lưu ý**:

  - Hạn chế kết nối với store từ App mà chỉ nên kế nối từ component sử dụng nó (các logic components)

  - Khi sử dụng useSelector(), không nên trả ra một object trực tiếp mà nên tách ra thành từng state riêng biệt. Nguyên do: Khi có sự thay đổi trong store, useSeletor sẽ so sánh (===) xem state trước và state sau nó có khác nhau không, nếu khác nó sẽ re-render; vì thế thi sử dụng object, nó sẽ so sánh tham chiếu, từ đó nó thấy rằng 2 object này là khác nhau về tham chiếu (mặc dù không có sự khác nhau trong thuộc tính) và vì có sự khác nhau nên nó sẽ re-render

### Redux Toolkit

- Redux Toolkit: một thư viện giúp viết redux tốt hơn, đơn giản hơn và dễ hơn (tiêu chuẩn để viết redux)

- Redux Toolkit gồm những gì?

  - configureStore():

    - Có sẵn Redux DevTools
    - Có sẳn redux-thunk để thực hiện các async actions

  - createReducer():

    - Gọi hàm để tạo một reducer
    - Cấu hình reducer đơn giản hơn: Mỗi key là một case và không cần handle default value

    ```js
    // Không có Redux Toolkit
    function counterReducer(state = 0, action) {
      swith (action.type) {
        case 'increment':
          return state + action.payload;
        case 'decrement':
          return state - action.payload;
        default:
          return state;
      }
    }
    ```

    ```js
    // Có Redux Toolkit
    const counterReducer = createReducer(0, {
      increment: (state, action) => state + action.payload,
      decrement: (state, action) => state + action.payload,
    });
    ```

    - Có thể mutate data trực tiếp mà không cần clone ra một object/array mới (do nó có sử dụng Immerjs)

    ```js
    const todoReducer = createReducer([], {
      addTodo: (state, action) => {
        state.push(action.payload);
      },
    });
    ```

  - createAction():

    ```js
    // Không có Redux Toolkit
    const INCREMENT = 'counter/increment';

    function increment(amount) {
      return {
        type: INCREMENT,
        payload: amount,
      };
    }

    const action = increment(3);
    ```

    ```js
    // Có Redux Toolkit
    const increment = createAction('counter/increment');

    const action = increment(3);
    ```

  - createSlice(): (recommended)

    - Thay vì sử dụng các hàm createReducer() và createAction() thì sử dụng createSlice(), nó sẽ tự động làm các công việc đó
    - Ví dụ setup redux store sử dụng Redux Toolkit:

    ```js
    // 1. Setup store slice
    // todoSlice.js
    const todoSlice = createSlice({
      // name: A name, used in action types
      name: 'todos',
      // initialState: The initial state for the reducer
      initialState: [],
      // reducers: An object of "case reducers". Key names will be used to generate actions.
      reducers: {
        addPost(state, action) {
          state.push(action.payload);
        },
        removePost(state, action) {
          state.splice(action.payload, 1);
        },
      },

      /*
      optionals:
    
      - extraReducers: A "builder callback" function used to add more reducers.
    
      - reducerPath: A preference for the slice reducer's location, used by `combineSlices` and `slice.selectors`. Defaults to `name`.
    
      - selectors: An object of selectors, which receive the slice's state as their first parameter.
      */
    });

    // createSlice will return an object include name, actions, reducer
    const { actions, reducer } = todoSlice;
    // actions include the key name declared in reducers in createSlice (It's action creators)
    export const { addPost, removePost } = actions;
    // export default reducer to use it
    export default reducer;
    ```

    ```js
    // 2. Setup redux store
    // store.js

    //
    const store = configureStore({
      /**
       * A single reducer function that will be used as the root reducer, or an
       * object of slice reducers that will be passed to `combineReducers()`.
       */
      reducer: {
        todos: todoSlice,
      },
    });
    ```

    ```js
    // 3. Bind redux store to App
    // src/index.js

    // Bọc App lại với Provider. Trong Provider truyền vào một prop là store với giá trị là store đã được cấu hình
    ReactDOM.createRoot(document.getElementById('root')).render(
      <>
        <Provider store={store}>
          <App />
        </Provider>
      </>
    );
    ```

    ```js
    // 4. Using redux in component
    // src/componets/Todo/index.jsx
    function Todo() {
      const dispatch = useDispatch();
      const todoList = useSelector(state => state.todos);

      const handleTodoClick = (todo, idx) => {
        const action = removeTodo(idx);
        dispatch(action);
      }

      return (
        <ul>
          {todoList.map((todo, idx) => (
            <li key={todo.id} onClick{() => handleTodoClick(todo, idx)}>
              {todo.title}
            </li>
          ))}
        </ul>
      )
    }
    ```
