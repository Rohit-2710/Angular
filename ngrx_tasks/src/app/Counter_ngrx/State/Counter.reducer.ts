import {createReducer, on} from "@ngrx/store";
import {initialState} from "./Counter.state"
import { increment } from "./Counter.actions";
import { decrement } from "./Counter.actions";
import { reset } from "./Counter.actions";


const _counterReducer = createReducer(initialState, on(increment, (state)=>{

return{
    ...state,
    counter: state.counter+1
}}),

on(decrement, (state)=>{
    return{
      ...state,
        counter: state.counter-1
    }
}),

on(reset, (state)=>{
    return{
      ...state,
        counter: 0
    }
})


)


    


export function counterReducer(state:any, action:any){
    return _counterReducer(state, action)
}