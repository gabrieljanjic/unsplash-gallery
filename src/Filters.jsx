const Filters = ({ orientation, setOrientation }) => {
  return (
    <div className="filters">
      <h2>Orientation</h2>
      <div className="filters-btns">
        <button type="button" className="filters-btn" onClick={() => setOrientation("landscape")}>
          landscape
        </button>
        <button type="button" className="filters-btn" onClick={() => setOrientation("portrait")}>
          portrait
        </button>
        <button type="button" className="filters-btn" onClick={() => setOrientation("squarish")}>
          squarish
        </button>
      </div>
    </div>
  );
};

export default Filters;
