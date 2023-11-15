import css from './Filter.module.css';

export const Filter = ({filter, handleFilterChange}) => {
  return (
    <>
      <h2 className={css.name}>Search</h2>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search by name"
      />
    </>
  );
};
