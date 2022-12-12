import { createSlice } from '@reduxjs/toolkit';


// create reducer with initial values
export const questionReducer = createSlice({
  name: 'questions',
  initialState: {
    queue: [],
    answers: [],
    trace: 0
  },
  reducers: {
    startExamAction : (state, action) => {
      return {
        ...state, // we update the value rather than replacing it (concatenate)
        queue : action.payload  // takes the user input value

      }
    }
  }
})

export const { startExamAction } = questionReducer.actions

export default questionReducer.reducer