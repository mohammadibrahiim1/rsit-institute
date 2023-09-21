import { apiSlice } from "../api/apiSlice";

const instructorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getInstructors: builder.query({
    //   query: () => ({
    //     url: `/api/v1/instructors`,
    //   }),
    // }),
    getInstructorsByCategory: builder.query({
      query: (category) => ({
        url: `/api/v1/instructors?category=${category}`,
      }),
    }),
  }),
});

export const { useGetInstructorsByCategoryQuery } = instructorApi;

export default instructorApi;
