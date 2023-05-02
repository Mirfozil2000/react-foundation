import "./app-filter.css";

const AppFilter = ({ updateFilterHandler, filter }) => {
  const btnsArr = [
    { name: "All", label: "Barcha filmlar" },
    { name: "popular", label: "Mashhur filmlar" },
    { name: "mostViewers", label: "Eng ko'p ko'rilgan filmlar" },
  ];

  return (
    <div className="btn-group">
      {btnsArr.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => updateFilterHandler(btn.name)}
          type="button"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default AppFilter;
