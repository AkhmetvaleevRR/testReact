import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (): Promise<User[]> => {
    const response = await fetch('http://localhost:3001/api/users');
    return response.json();
  }
);

const entityAdapter = createEntityAdapter<User>();

const usersSlice = createSlice({
  name: 'users',
  initialState: entityAdapter.getInitialState({
    currentUser: null as string | null,
    isAuthenticated: false,
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null as string | null,
  }),
  reducers: {
    login: (state) => {
      state.currentUser = 'User';
      state.isAuthenticated = true;
      localStorage.setItem('user', 'User');
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
    },
    loadUserFromStorage: (state) => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        state.currentUser = JSON.parse(savedUser);
        state.isAuthenticated = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        entityAdapter.setAll(state, action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
  selectors: {
    selectCurrentUser: (state) => state.currentUser,
    selectIsAuthenticated: (state) => state.isAuthenticated,
    selectUsersStatus: (state) => state.status,
  },
});

const selectors = entityAdapter.getSelectors((state: any) => state.users);

export const { login, logout, loadUserFromStorage } = usersSlice.actions;
export const { selectCurrentUser, selectIsAuthenticated, selectUsersStatus } = usersSlice.selectors;
export const selectUsersIds = selectors.selectIds;
export const selectUserById = selectors.selectById;
export const selectUsersEntities = selectors.selectEntities;
export default usersSlice.reducer;