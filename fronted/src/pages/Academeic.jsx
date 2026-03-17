import React from "react";
import { useGetEventQuery } from "../redux/features/academicSlice";

const Academeic = () => {
  const {
    data: event,
    isLoading: eventLoading,
    error: eventError,
  } = useGetEventQuery();
  return <div>Academeic</div>;
};

export default Academeic;
