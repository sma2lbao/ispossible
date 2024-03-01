"use client";

import React, { useState } from "react";

export type CategoryContextProps = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

export const CategoryContext = React.createContext<CategoryContextProps | null>(
  null
);

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [category, setCategory] = useState<string>("algorithm");

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const categoryValue = React.useContext(CategoryContext);

  return categoryValue!;
};
