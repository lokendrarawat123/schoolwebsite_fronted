import { indexSlice } from "./indexSlice";
export const siteSlice = indexSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSlides: builder.query({
      query: () => ({
        url: "/api/site/home-slider",
        method: "GET",
      }),
      providesTags: ["site"],
    }),
  }),
});
export const { useGetSlidesQuery } = siteSlice;
