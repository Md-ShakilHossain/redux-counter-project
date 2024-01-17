# React Redux

We use redux to manage state. For using redux we need to know following terms:
- Initial State
- Actions
- Reducer
- store

### Initial State
We can say initial state is a value of a state that is used initially. Here we will make a initial state like a object, for example it will be like that: const initialState = {count:0};

Here we use useState in react instead of this, 0 is the value of initial useState value for count.

### Actions
Action is a js pure functions . It takes no parameter normally, but it returns type and payload. If we use Payload then the function will take a parameter to catch the value and payload will take the value from the parameter.

### Reducer
Reducer is also a js pure functions. The function takes two parameter named state and action. Then the function does the logical operation based on action type. We can check action type using switch case. In a project there can be single reducer or multiple reducer but the store can take only one reducer, therefor if there are multiple reducer then we need to merge all reducer to a root reducer and we can pass the root reducer into the store.

### Store
We need a store to keep updated value. To create a store we need install redux by commanding npm i redux. To create a store We need to call createStore hook and it takes normally two parameter. First is reducer and second is middleWear.

### Use Store in project
To use the store which we have made we need to call useSelector hook and before it we need to install react-redux by using the command : npm i react-redux. We need to pass a call back function to get the state.

### dispatch a action
To dispatch a action we need to call useDispatch hook. Then in a button by using onclick we can call a function of desire action into the dispatch method.