import React, { useContext } from "react";
import axios from "axios";
import landingBg from "../../img/landingBg.jpg";
import viewSection from "../../img/viewSection.jpg";
import searchLaw from "../../img/search-books.jpg";
import ReadLaw from "../../img/viewSection.jpg";
import NavBar from "../../components/navBar";
import "./landingPage.css";
import Footer from "../../components/footer";
import { Link, useHistory } from "react-router-dom";
import SearchBar from "../../components/searchBar";
import { SearchContext, SearchContextType } from "../../contexts/searchContext";

const LandingPage = () => {
  let history = useHistory();
  const {
    searchTerm,
    setSearchTerm,
  }:SearchContextType = useContext(SearchContext);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
             history.push("/search"); 
  };

  return (
    <div className="bg-color">
      <NavBar activeLink="home" />
      <div className="container ">
        <div className="row hide-on-large-only landing-mobile">
          <div className="col s12">
            <h1 id="landing-mobile-header">
              Search the Nigerian Cybercrime Act 2015
            </h1>
            <SearchBar
              onSetSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              onFormSubmit={handleSubmit}
            />
            <p className="py-1 px-1 mb-2 mt-n1">
              Search through the Nigerian Cybercrime Act using custom key terms
            </p>
          </div>
        </div>
      </div>

      <div className="home-div hide-on-med-and-down">
        <div className="home-div-lg">
          <h2 style={{ fontWeight: 700 }}>
            Find everything you need to know about the{" "}
            <span style={{ color: "#331d5a" }}>
              {" "}
              Nigerian Cybercrime Act 2015
            </span>
          </h2>
          <div
            style={{
              padding: "2rem",
              margin: "4rem 0",
              backgroundColor: "#331d5a",
              color: "#fff"
            }}
          >
            <p>Access Nigerian law from anywhere in the world</p>
            <p>
              No more having to read through whole books find everything you
              need about the cybercrime act here
            </p>
            <div>
              <div className="search-lg">
                <SearchBar
                  onSetSearchTerm={setSearchTerm}
                  searchTerm={searchTerm}
                  onFormSubmit={handleSubmit}
                />
                <button
                  style={{ color: "#331d5a", backgroundColor: "#fff", fontWeight:"700" }}
                  className="btn btn-sm waves-effect  als-center"
                  onClick={() => {
           
                       history.push("/search");
                  }}
                >
                  Search
                </button>
              </div>
            </div>

            <p className=" px-1 mb-2 ">
              Search through the Nigerian Cybercrime Act using custom key terms
            </p>
          </div>
        </div>

        <img
          className="landing-image"
          src={landingBg}
          alt="landing background"
        />
      </div>

      <div className="part-tabs">
        <div className="content-img-wrapper">
     
          <div className="content-img">
            <div className="border-style"></div>
            <img
              style={{
                width: "100%",
                height: "100%",
                flexShrink: "0",
                zIndex: "1000"
              }}
              className="landing-image-2"
              src={searchLaw}
              alt="Search the entire cybercrime act"
            />
          </div>
          <div /*  className="landing-end" */>
            <h4 style={{ fontWeight: 700 }}>
              The <span style={{ color: "#331d5a" }}>Law</span> in Your{" "}
              <span style={{ color: "#331d5a" }}>Finger Tips</span>
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
          </div>
        </div>
        <div className="container">
          {/* <div className="row">
            <hr />
          </div> */}

          <div style={{ position: "relative", zIndex: "1000" }} className="row">
            <div
              style={{ backgroundColor: "#fff", padding: "2rem" }}
              className="col s12"
            >
              <h1
                style={{ fontWeight: 700, textAlign: "center" }}
                className="center-align"
              >
                View the{" "}
                <span style={{ color: "#331d5a" }}>
                  {" "}
                  Nigerian Cybercrime Act 2015
                </span>
              </h1>

              <p className="center-align">
                Read through the Nigerian Cybercrime Act 2015
              </p>
              <div className="center-align mb-4">
                {" "}
                <Link
                  to="/sections"
                  className="btn btn-large waves-effect  center-align"
                  style={{ backgroundColor: "#331d5a", cursor: "pointer" }}
                >
                  <i className="material-icons">chrome_reader_mode</i>
                </Link>
              </div>
            </div>
            <div className="border-style-3"></div>
            <div className="border-style-4"></div>
          </div>
        </div>
        <div className="pst-rel">
          <div className="content-img-wrapper-2">
            <div /*  className="landing-end" */>
              <h4 style={{ fontWeight: 700, textAlign: "center" }}>
                <span style={{ color: "#331d5a" }}>Access</span> the Nigerian
                Cybercrime Act{" "}
                <span style={{ color: "#331d5a" }}>anytime, anywhere.</span>
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
              </p>
            </div>
        
            <div className="content-img-2">
              <div className="border-style-2"></div>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  flexShrink: "0",
                  zIndex: "1000"
                }}
                src={ReadLaw}
                alt="Search the entire cybercrime act"
              />
            </div>
          </div>
        </div>
        {/*  */}
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
