import { createStore } from 'redux';

const counterReducer = (state = {counter:0}, action) =>{
    if(action.type==='increment'){
        return {
            counter: state.counter+5
         }
    }
    if(action.type==='decrement'){
        return {
            counter: state.counter-5
         }
    }
 return state;
};

export const store = createStore(counterReducer);

// const counterSub = () =>{
//     const latestState=store.getState();
//     console.log(latestState);
// };

// store.subscribe(counterSub);
