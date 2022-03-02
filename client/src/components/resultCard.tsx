import React from "react";

interface Props{
  sectionNum: string | number;
  partNum:string | number;
  subSectionBody: any[];
  partName:string | number;
}
const ResultCard: React.FC<Props> = (props) => {
  return (
    <div className="card result-card z-depth-1">
      <div className="card-content ">
        <span className="card-title">Section {props.sectionNum}</span>
        <h6>
          Part {props.partNum}: {props.partName}
        </h6>
        <div className="list">
          {props.subSectionBody.map((subSection) => {
            const { subSectionBody, subSectionId } = subSection;
            return <div key={subSectionId}>{subSectionBody}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
