import "./filter.scss";

export default function Filter({ selectCountry }) {
  return (
    <div className="filter">
      <div className="filter__looking-for">
        <label>
          Lookiing for
          <select
            name=""
            id=""
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
          {/* <input type="se" placeholder="start typing here..." /> */}
        </label>
      </div>
      <div className="filter__or-filter">
        <label>
          Or filter
          <input type="button" value="expensive" />
          <input type="button" value="cheaper" />
          <input type="button" value="all" />
        </label>
      </div>
    </div>
  );
}