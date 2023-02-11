import { createSlice } from '@reduxjs/toolkit'
import Api from '../Api'

const initialState = {
    user: null, 
 }

export const GeneralSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            // Api.axios_instance.get(Api.baseUrl+'api/v1/user_data')
            // .then(response => {
            //     state.user = response.data
            // })
        }
    }
},
)

export const {setUser} = GeneralSlice.actions

export default GeneralSlice.reducer