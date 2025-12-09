import "./ProgressHeader.css";

function ProgressHeader({ technologies }) {
  const totalCount = technologies.length;
  const completedCount = technologies.filter(
    (tech) => tech.status === "completed"
  ).length;
  const progressPercentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const getProgressColor = () => {
    if (progressPercentage < 30) return "#ff6b6b";
    if (progressPercentage < 70) return "#ffa726";
    return "#4caf50";
  };

  return (
    <div className="progress-header">
      <h2>📊 Прогресс изучения технологий</h2>

      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-number">{totalCount}</span>
          <span className="stat-label">Всего технологий</span>
        </div>

        <div className="stat-item">
          <span className="stat-number">{completedCount}</span>
          <span className="stat-label">Изучено</span>
        </div>

        <div className="stat-item">
          <span className="stat-number">{progressPercentage}%</span>
          <span className="stat-label">Прогресс</span>
        </div>
      </div>

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: getProgressColor(),
          }}
        ></div>
      </div>

      <div className="progress-info">
        <p>
          {progressPercentage === 100
            ? "🎉 Поздравляем! Вы изучили все технологии!"
            : progressPercentage >= 70
            ? "🔥 Отличный прогресс! Продолжайте в том же духе!"
            : progressPercentage >= 30
            ? "📚 Хорошее начало! Продолжайте изучать технологии."
            : "🚀 Начинаем наш путь изучения технологий!"}
        </p>
      </div>
    </div>
  );
}

export default ProgressHeader;
