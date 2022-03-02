import React from "react";
import ResultCard from "../../components/resultCard";

interface Props{
  results: any[];

}
const SearchResult: React.FC<Props> = (props) => {
  const results = props.results;
  return (
    <div className="col s12">
      {results.map((section) => {
        const sectionBody = section.sectBody;

        return (
          <ResultCard
            partNum={section.partNumber}
            partName={section.partTitle}
            sectionNum={section.sectNum}
            subSectionBody={sectionBody.map((subSect: any) => {
              const subBody = {
                subSectionBody: subSect.subBody[0],
                subSectionId: subSect._id
              };

              return subBody;
            })}
            key={section._id}
          />
        );
      })}
    </div>
  );
};

export default SearchResult;
