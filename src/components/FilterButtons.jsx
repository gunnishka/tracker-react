import "./FilterButtons.css";

function FilterButtons({ activeFilter, onFilterChange, technologies }) {
  // Подсчет количества технологий по статусам
  const counts = {
    all: technologies.length,
    "not-started": technologies.filter((t) => t.status === "not-started")
      .length,
    "in-progress": technologies.filter((t) => t.status === "in-progress")
      .length,
    completed: technologies.filter((t) => t.status === "completed").length,
  };

  const filters = [
    { id: "all", label: "Все технологии", icon: "📚", color: "#667eea" },
    { id: "not-started", label: "Не начатые", icon: "⭕", color: "#ff6b6b" },
    { id: "in-progress", label: "В процессе", icon: "⏳", color: "#4ecdc4" },
    { id: "completed", label: "Изученные", icon: "✅", color: "#45b7d1" },
  ];

  return (
    <div className="filter-buttons-container">
      <div className="filter-buttons">
        <h4>🔍 Фильтр по статусу</h4>
        <p className="filter-description">
          Показать технологии с определенным статусом
        </p>

        <div className="filters-grid">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => onFilterChange(filter.id)}
              style={{
                "--filter-color": filter.color,
                borderColor:
                  activeFilter === filter.id ? filter.color : "#e0e0e0",
              }}
            >
              <div className="filter-content">
                <span className="filter-icon">{filter.icon}</span>
                <div className="filter-text">
                  <span className="filter-label">{filter.label}</span>
                  <span className="filter-count">{counts[filter.id]}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterButtons;
