import css from './Filter.module.css';

export const Filter = props => {
  return (
    <>
      <h2 className={css.name}>Search</h2>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={props.filter}
        onChange={props.handleFilterChange}
        placeholder="Search by name"
      />
    </>
  );
};
