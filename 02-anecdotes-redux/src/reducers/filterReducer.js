import { createSlice } from "@reduxjs/toolkit"

// Utilizamos createSlice de Redux Toolkit para configurar el reducer:

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterAnecdote(state, action) {
            return action.payload
        }
    }
})

export default filterSlice.reducer
export const {filterAnecdote} = filterSlice.actions



// Las siguientes líneas son la versión anterior a usar toolkit.
// A continuación, creamos el action creator para el filtro:
// export const filterAnecdote = (content) => {
//     return {
//         type: 'FILTER',
//         payload: content
//     }
// }

// export const filterReducer = (state = '', action) => {
//     // console.log('action', action)
//     switch (action.type) {
//         case 'FILTER':
//             return action.payload    
//         default: return state
//         }
// }
