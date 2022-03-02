import React from "react";

interface Props{
  data:any
}
const Sections: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="part">
          <h4 style={{ color: "#331d5a" }} className=" center-align">
            The Nigerian CyberCrime Act 2015.
          </h4>
          <ul className="collection">
            <li className="collection-item">
              <a href="#1">Part 1 </a>
              <div className="section-wrapper">
                {data
                  .filter((section: any) => section.partNumber === 1)
                  .map((section: any) => {
                    return (
                      <div key={section._id} className="section">
                        <ol start={section.sectNum} className="section-list">
                          <li className="section-number">
                            {section.sectBody.map((subSection: any) => {
                              return (
                                <ul key={subSection.id}>
                                  <li>{subSection.subBody[0]}</li>
                                </ul>
                              );
                            })}
                          </li>
                        </ol>
                      </div>
                    );
                  })}
              </div>
            </li>
            <li className="collection-item">
              <a href="#1">Part 2 </a>
              <div className="section-wrapper">
                {data
                  .filter((section: any) => section.partNumber === 2)
                  .map((section: any) => {
                    return (
                      <div key={section._id} className="section">
                        <ol start={section.sectNum}>
                          <li>
                            {section.sectBody.map((subSection: any) => {
                              return (
                                <ol
                                  key={subSection.id}
                                  start={subSection.subNum}
                                >
                                  <li>{subSection.subBody[0]}</li>
                                </ol>
                              );
                            })}
                          </li>
                        </ol>
                      </div>
                    );
                  })}
              </div>
            </li>
            <li className="collection-item">
              <a href="#1">Part 3 </a>
              <div className="section-wrapper">
                {data
                  .filter((section: any) => section.partNumber === 3)
                  .map((section: any) => {
                    return (
                      <div key={section._id} className="section">
                        <ol start={section.sectNum}>
                          <li>
                            {section.sectBody.map((subSection:any) => {
                              return (
                                <ol
                                  key={subSection.id}
                                  start={subSection.subNum}
                                >
                                  <li>{subSection.subBody[0]}</li>
                                </ol>
                              );
                            })}
                          </li>
                        </ol>
                      </div>
                    );
                  })}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sections;
