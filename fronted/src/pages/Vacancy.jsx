import React from "react";
import { useGetVacancyQuery } from "../redux/features/contentSlice";
import { useGetVacancyCategoryQuery } from "../redux/features/categorySlice";

const Vacancy = () => {
  const {
    data: Vacancy,
    isLoading: VacancyLoading,
    error: vacancyError,
  } = useGetVacancyQuery;
  const {
    data: Category,
    isLoading: CatLoading,
    error: CatError,
  } = useGetVacancyCategoryQuery;
  const VacancyData = Vacancy?.data || [];
  const catData = Category?.data || [];
  return <div>Vacancy</div>;
};

export default Vacancy;
