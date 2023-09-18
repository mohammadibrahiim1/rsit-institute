import { apiSlice } from "../api/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (data) => ({
        url: `/api/v1/categories`,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
