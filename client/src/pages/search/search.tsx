import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar";
import Loader from "../../components/loader";
import NavBar from "../../components/navBar";
import SearchResult from "./searchResult";
import { SearchContext, SearchContextType } from "../../contexts/searchContext";
import notFoundImg from "../../img/search_not_found.png";
import Footer from "../../components/footer";
import "./search.css";

const Search = () => {
  const {
    searchResults,
    isLoading,
    searchTerm,
    setSearchResults,
    setSearchTerm,
    setisLoading
  }: SearchContextType = useContext(SearchContext);

useEffect(
  ()=>{
        if (searchTerm === "") {
          setisLoading(false);
        }
    axios
      .get(
        `https://naija-law-search.herokuapp.com/api/search?term=${searchTerm}`
      )
      .then(res => {
        setSearchResults(res.data);
        setisLoading(false);
      })
      .catch(err => {
        console.error(err.message);
      });
     
  },[]
)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
setisLoading(true)
    axios
      .get(
        `https://naija-law-search.herokuapp.com/api/search?term=${searchTerm}`
      )
      .then(res => {
        setSearchResults(res.data);
        setisLoading(false);
      }).catch(
        err=>{
          console.error(err.message)
        }
      );
  };

  return (
    <>
      <NavBar activeLink="" />
      <div style={{ fontSize: "1.2rem", margin: "2rem 0 0 2rem" }}>
        <Link to="/" style={{ color: "#331d5a" }}>
          {"<"} Go back
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <div className="col s12 search-div">
            <h4 style={{ color: "#331d5a" }} className="center-align">
              Naija Law Search
            </h4>
            <p className="center-align">
              Search the Nigerian Cybercrime Act 2015
            </p>
            <div className="searchbar-wrapper">
              <SearchBar
                onSetSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
                onFormSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="row">
            <div className="col s12">
              <Loader />
            </div>
          </div>
        ) : (
          <div className="row">
            {searchResults.length === 0 ? (
              <div className="no-result-wrapper">
                <h4>Sorry we couldnt find what you're looking for...</h4>
                <img src={notFoundImg} alt="result not found" />
              </div>
            ) : (
              <SearchResult results={searchResults} />
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Search;
