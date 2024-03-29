import "./filter.scss";

export default function Filter({ selectCountry, costValue }) {
  return (
    <div className="filter">
      <div className="filter__looking-for">
        <label htmlFor="country-select">Lookiing for</label>
        <select
          id="country-select"
          name="country-select"
          className="filter__select"
          defaultValue={"select-country"}
          onChange={(e) => selectCountry(e.target.value)}
        >
          <option value="select-country" disabled>
            Select country
          </option>
          <option value="">All countries</option>
          <option value="brazil">Brazil</option>
          <option value="kenya">Kenya</option>
          <option value="africa">Africa</option>
          <option value="colombia">Colombia</option>
          <option value="guatemala">Guatemala</option>
        </select>
      </div>
      <div className="filter__or-filter">
        <label htmlFor="expensive">Or filter</label>
        <input
          id="expensive"
          type="button"
          value="expensive"
          onClick={(e) => costValue(e.target.value)}
        />
        <input
          type="button"
          value="cheaper"
          onClick={(e) => costValue(e.target.value)}
        />
        <input
          type="button"
          value="random"
          onClick={(e) => costValue(e.target.value)}
        />
        <input
          type="button"
          value="initial"
          onClick={(e) => costValue(e.target.value)}
        />
      </div>
    </div>
  );
}
