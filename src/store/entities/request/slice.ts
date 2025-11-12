import { createSlice } from "@reduxjs/toolkit";

interface RequestState {
  [key: string]: 'pending' | 'fulfilled' | 'rejected';
}

export const requestSlice = createSlice({
  name: "request",
  initialState: {} as RequestState,
  reducers: {},
  selectors: {
    selectStatus: (state, id: string) => state[id],
    selectIsLoading: (state, id: string) => state[id] === "pending",
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }: { type: string }) => type.endsWith("/pending"),
        (state, { meta }: { meta: { requestId: string } }) => {
          state[meta.requestId] = "pending";
        }
      )
      .addMatcher(
        ({ type }: { type: string }) => type.endsWith("/fulfilled"),
        (state, { meta }: { meta: { requestId: string } }) => {
          state[meta.requestId] = "fulfilled";
        }
      )
      .addMatcher(
        ({ type }: { type: string }) => type.endsWith("/rejected"),
        (state, { meta }: { meta: { requestId: string } }) => {
          state[meta.requestId] = "rejected";
        }
      ),
});

export const { selectStatus, selectIsLoading } = requestSlice.selectors;
export default requestSlice.reducer;