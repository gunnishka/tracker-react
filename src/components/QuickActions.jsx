import "./QuickActions.css";

function QuickActions({
  technologies,
  onMarkAllCompleted,
  onResetAll,
  onRandomSelect,
}) {
  // Проверка состояния технологий
  const hasNotStarted = technologies.some(
    (tech) => tech.status === "not-started"
  );
  const hasInProgress = technologies.some(
    (tech) => tech.status === "in-progress"
  );
  const hasCompleted = technologies.some((tech) => tech.status === "completed");

  // Подсчет количества по статусам
  const notStartedCount = technologies.filter(
    (tech) => tech.status === "not-started"
  ).length;
  const inProgressCount = technologies.filter(
    (tech) => tech.status === "in-progress"
  ).length;
  const completedCount = technologies.filter(
    (tech) => tech.status === "completed"
  ).length;

  return (
    <div className="quick-actions-container">
      <div className="quick-actions">
        <h3>⚡ Быстрые действия</h3>
        <p className="actions-description">
          Управляйте вашими технологиями одним кликом
        </p>

        <div className="actions-grid">
          <button
            className="action-btn mark-all-btn"
            onClick={onMarkAllCompleted}
            disabled={completedCount === technologies.length}
            title="Отметить все технологии как изученные"
          >
            <div className="btn-content">
              <span className="btn-icon">✅</span>
              <div className="btn-text">
                <span className="btn-title">Отметить все как выполненные</span>
                <span className="btn-subtitle">
                  {completedCount === technologies.length
                    ? "Все уже выполнены"
                    : `Выполнить все (${
                        technologies.length - completedCount
                      } осталось)`}
                </span>
              </div>
            </div>
          </button>

          <button
            className="action-btn reset-all-btn"
            onClick={onResetAll}
            disabled={notStartedCount === technologies.length}
            title="Сбросить все статусы на 'Не начато'"
          >
            <div className="btn-content">
              <span className="btn-icon">🔄</span>
              <div className="btn-text">
                <span className="btn-title">Сбросить все статусы</span>
                <span className="btn-subtitle">
                  {notStartedCount === technologies.length
                    ? "Все уже не начаты"
                    : `Сбросить ${inProgressCount + completedCount} технологий`}
                </span>
              </div>
            </div>
          </button>

          <button
            className="action-btn random-select-btn"
            onClick={onRandomSelect}
            disabled={!hasNotStarted}
            title="Случайно выбрать следующую технологию для изучения"
          >
            <div className="btn-content">
              <span className="btn-icon">🎲</span>
              <div className="btn-text">
                <span className="btn-title">Случайный выбор</span>
                <span className="btn-subtitle">
                  {hasNotStarted
                    ? `Выбрать из ${notStartedCount} не начатых`
                    : "Все технологии уже начаты"}
                </span>
              </div>
            </div>
          </button>
        </div>

        <div className="actions-stats">
          <div className="stat-item">
            <span className="stat-number not-started">{notStartedCount}</span>
            <span className="stat-label">Не начато</span>
          </div>
          <div className="stat-item">
            <span className="stat-number in-progress">{inProgressCount}</span>
            <span className="stat-label">В процессе</span>
          </div>
          <div className="stat-item">
            <span className="stat-number completed">{completedCount}</span>
            <span className="stat-label">Изучено</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickActions;
