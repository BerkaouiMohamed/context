import React, { createContext, useReducer } from 'react'

export const todosContext=createContext()

const reducerFn=(state,action)=>{
    switch(action.type){
        case"ADD": return [...state,{title:action.payload,done:false}]
        case "DELETE": return state.filter((element)=>element.title!=action.payload.title)
        case "EDIT": return state.map((element)=>element.title==action.payload.title?{...element,done:!element.done }:element)
 
        default:return state

    }
}


export const ADDTODO=(payload)=>{return {type:'ADD',payload}}
export const DELETETODO=(payload)=>{return {type:'DELETE',payload}}
export const EDITTODO=(payload)=>{return {type:'EDIT',payload}}

function ContextTodos({children}) {

const [todos,dispatch]=useReducer(reducerFn,[])

  return (
 <todosContext.Provider value={{todos,dispatch}}>
{children}

 </todosContext.Provider>
  )
}

export default ContextTodos
