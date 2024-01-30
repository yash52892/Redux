const redux = require('redux');

const counterReducer = (state = {counter:0}, action) =>{
    if(action.type=='increment'){
        return {
            counter: state.counter+1
         }
    }
    if(action.type=='decrement'){
        return {
            counter: state.counter-1
         }
    }
 
}

const store = redux.createStore(counterReducer);

const counterSub = () =>{
    const latestState=store.getState();
    console.log(latestState);
};

store.subscribe(counterSub);

store.dispatch({type: 'decrement'});