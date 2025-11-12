import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus, selectIsLoading } from "../entities/request/slice";
import type { AppDispatch, RootState } from "../store";
import type { AsyncThunk } from "@reduxjs/toolkit";

export const useRequest = (thunk: AsyncThunk<any, any, any>, params?: any, shouldFetch: boolean = true) => {
  const [requestId, setRequestId] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const status = useSelector((state: RootState) => requestId ? selectStatus(state, requestId) : null);
  const isLoading = useSelector((state: RootState) => requestId ? selectIsLoading(state, requestId) : false);

  useEffect(() => {
    if (!shouldFetch) return;
    
    const requestPromise = dispatch(thunk(params));
    setRequestId(requestPromise.requestId);

    return () => {
      requestPromise.abort();
    };
  }, [dispatch, params, thunk, shouldFetch]);

  return { status, isLoading };
};