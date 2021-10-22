import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LoaderWrapper } from "./GlobalLoaderStyled";

const GlobalLoader = () => {
  return (
    <LoaderWrapper>
      <Loader type="Oval" color="#03e9f4" height={100} width={100} />
    </LoaderWrapper>
  );
};

export default GlobalLoader;
