import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [vname, setvname] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(vname);
  };

  return (
    <div className=" search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className=" ui field">
          <label>Search Video</label>
          <input
            type="text"
            value={vname}
            onChange={(e) => {
              setvname(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
