import React from "react";
import FormAdd from "./formAdd";

const page = async () => {
  return (
    <div className="max-w-4xl max-xl:px-3 mx-auto text-center pt-32 pb-7 font-sans">
      <h1 className="font-bold text-2xl"> Ajout d'un Article</h1>
      <FormAdd />
    </div>
  );
};

export default page;
