import { createSlice } from '@reduxjs/toolkit'

const initialState = [

]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        create: (state, actions) => {
            state = state.push(actions.payload)
        },

        remove: (state, actions) => {

            state = state.filter(ele => {
                if (ele.task != actions.payload) {
                    return ele
                }
            })
            return state
        }
    },
})


export const { create, remove } = todoSlice.actions

export default todoSlice.reducer