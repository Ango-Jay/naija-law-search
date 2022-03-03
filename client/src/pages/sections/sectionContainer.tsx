import React, { useState, useEffect } from "react";
import axios from "axios";
import Sections from "./sections";
import Loader from "../../components/loader";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";

interface Props{

}
const SectionContainer: React.FC<Props> = (props) => {
  const [sectionData, setSectionData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://naija-law-search.herokuapp.com/api/`).then(res => {
      setSectionData(res.data);
      setIsLoading(false);
    });
  }, []);
  const {data}: {data?: any} = sectionData;
 
  return (
    <>
      <NavBar activeLink="cyberCrime"/>
      {isLoading ? (
        <Loader />
      ) : (
          <Sections data={data} />
      )}
      <Footer />
    </>
  );
};

export default SectionContainer;
