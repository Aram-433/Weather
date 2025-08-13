import styles from "../Input/input.module.css";

function Input({ setSearchParam }) {
  return (
    <div className={styles.form}>
      <label htmlFor="search">
        <i className="bi bi-search"></i>
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search Place"
        onChange={(e) => setSearchParam(e.target.value)}
      />
    </div>
  );
}

export default Input;
