import React, { createContext, useState } from "react";

export type SearchContextType = {
    searchResults:any[],
        isLoading: boolean,
        searchTerm: string,
        setisLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setSearchResults: React.Dispatch<React.SetStateAction<any>>,
        setSearchTerm:React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext: SearchContextType | any = createContext({});

const SearchContextProvider = ({
  children
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        isLoading,
        searchTerm,
        setisLoading,
        setSearchResults,
        setSearchTerm
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
