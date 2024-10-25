import React from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

export default function Spinner() {
  let isLoading = useSelector((state) => state.spinnerSlice.isLoading);

  return isLoading ? (
    <div className="fixed w-screen h-screen top-0 left-0 z-10 bg-black flex justify-center items-center">
      <PacmanLoader color="#FFF100" size={200} speedMultiplier={3} />
    </div>
  ) : (
    <div></div>
  );
}
