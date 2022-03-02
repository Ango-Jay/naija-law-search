import React, { ChangeEvent } from "react";

interface Props {
onSetSearchTerm: React.Dispatch<React.SetStateAction<string>>;
onFormSubmit:(e:ChangeEvent<HTMLFormElement>)=>void;
searchTerm:string;
}

const SearchBar: React.FC<Props> = (props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onSetSearchTerm(e.target.value);
  };

  return (
    <div style={{ width: "100%" }} className=" search_bar ">
      <div className="y">
        <form onSubmit={props.onFormSubmit}>
          <div className="input-field ">
            <input
              id="search-input"
              placeholder="Enter search term..."
              type="text"
              className="browser-default search-field  z-depth-1"
              name="search-input"
              value={props.searchTerm}
              onChange={handleChange}
              autoComplete="off"
              aria-label="Search box"
              required
            />

            <label className="label-icon" htmlFor="search-input">
              <i
                style={{ visibility: "visible" }}
                className="material-icons search-icon"
              >
                search
              </i>
            </label>
            <i className="material-icons search-close-icon">close</i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
