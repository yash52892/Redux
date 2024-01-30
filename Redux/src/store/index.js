import { createSlice, configureStore } from '@reduxjs/toolkit';

const initCounterState={counter:0, showCounter:true}

const initAuthState={isAuth:true}

const counterSlice=createSlice({
    name:'counter',
    initialState:initCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter=state.counter+action.payload;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;
        }
    }
})

const authSlice=createSlice({
    name:'auth',
    initialState:initAuthState,
    reducers:{
        login(state){
            state.isAuth=true
        },
        logout(state){
            state.isAuth=false
        }
    }
})

const store = configureStore({
    reducer: {counter:counterSlice.reducer, auth:authSlice.reducer},
});

export const counterActions=counterSlice.actions;
export const authActions=authSlice.actions;

export default store;

// const counterSub = () =>{
//     const latestState=store.getState();
//     console.log(latestState);
// };

// store.subscribe(counterSub);
