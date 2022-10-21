import React, { FC, useState } from "react";
import { useActions } from "./../hooks/useActions";
import { useTypedSelector } from "./../hooks/useTypedSelector";

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState<string>("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  console.log(data);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "50px" }}>
        <h2>SEARCH FOR A PACKAGE</h2>
        <input value={term} onChange={handleChange} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading ...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
