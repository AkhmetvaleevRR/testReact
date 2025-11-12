import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('http://localhost:3001/api/users');
    return response.json();
  }
);

const initialState = {
  ids: [] as string[],
  entities: {} as Record<string, any>,
  currentUser: null as string | null,
  isAuthenticated: false,
  status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
  error: null as string | null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
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
        state.ids = action.payload.map((user: any) => user.id);
        state.entities = action.payload.reduce((acc: Record<string, any>, user: any) => {
          acc[user.id] = user;
          return acc;
        }, {});
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id: string) => state.entities[id],
    selectUsersEntities: (state) => state.entities,
    selectCurrentUser: (state) => state.currentUser,
    selectIsAuthenticated: (state) => state.isAuthenticated,
    selectUsersStatus: (state) => state.status,
  },
});

export const { login, logout, loadUserFromStorage } = usersSlice.actions;
export const { selectUsersIds, selectUserById, selectUsersEntities, selectCurrentUser, selectIsAuthenticated, selectUsersStatus } = usersSlice.selectors;
export default usersSlice.reducer;