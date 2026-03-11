import { indexSlice } from "./indexSlice";
export const galleryApi = indexSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDistrict: builder.query({
      query: () => ({
        url: "/api/content/gallery ",
        method: "GET",
      }),
      providesTags: ["district"],
    }),
  }),
});
export const { useGetDistrictQuery } = galleryApi;
