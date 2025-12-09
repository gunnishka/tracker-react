import "./ProgressHeader.css";

function ProgressHeader({ technologies }) {
  // Расчет статистики
  const totalCount = technologies.length;
  const completedCount = technologies.filter(
    (tech) => tech.status === "completed"
  ).length;
  const inProgressCount = technologies.filter(
    (tech) => tech.status === "in-progress"
  ).length;
  const notStartedCount = technologies.filter(
    (tech) => tech.status === "not-started"
  ).length;

  const progressPercentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Определение цвета прогресс-бара в зависимости от процента
  const getProgressColor = () => {
    if (progressPercentage < 30) return "#ff6b6b";
    if (progressPercentage < 70) return "#4ecdc4";
    return "#45b7d1";
  };

  // Определение сообщения в зависимости от прогресса
  const getProgressMessage = () => {
    if (progressPercentage === 100) {
      return "🎉 Поздравляем! Вы изучили все технологии!";
    } else if (progressPercentage >= 70) {
      return "🔥 Отличный прогресс! Продолжайте в том же духе!";
    } else if (progressPercentage >= 30) {
      return "📚 Хорошее начало! Продолжайте изучать технологии.";
    } else {
      return "🚀 Начинаем наш путь изучения технологий!";
    }
  };

  return (
    <div className="progress-header">
      <h2>📊 Статистика изучения технологий</h2>

      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-number">{totalCount}</span>
          <span className="stat-label">Всего</span>
        </div>

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

        <div className="stat-item">
          <span className="stat-number percentage">{progressPercentage}%</span>
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
        <p>{getProgressMessage()}</p>
        {completedCount === totalCount && totalCount > 0 && (
          <p className="celebration">🎊 Вы прошли весь путь! Так держать!</p>
        )}
      </div>
    </div>
  );
}

export default ProgressHeader;
