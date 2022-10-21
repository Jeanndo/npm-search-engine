import React, { FC, useState } from "react";

import { actionCreators } from "./../redux";
import { useAppDispatch } from "./../redux";

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actionCreators.searchRepositories(term));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
