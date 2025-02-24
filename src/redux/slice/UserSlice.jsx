import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      //state.users=[]
      //state.users.push()
      //action.payload={name,email,mobile}
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      state.users[action.payload.index] = action.payload.data;
    },
    deleteUser: (state, action) => {
      state.users.splice(action.payload, 1);
    },
  },
});

export const {addUser, updateUser, deleteUser} = UserSlice.actions;
export default UserSlice.reducer;
