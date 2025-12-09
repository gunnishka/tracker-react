import "./TechnologyCard.css";

function TechnologyCard({ title, description, status }) {
  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return "✅";
      case "in-progress":
        return "⏳";
      case "not-started":
        return "⭕";
      default:
        return "📌";
    }
  };

  // Определяем текст статуса
  const getStatusText = () => {
    switch (status) {
      case "completed":
        return "Изучено";
      case "in-progress":
        return "В процессе";
      case "not-started":
        return "Не начато";
      default:
        return "Неизвестно";
    }
  };

  return (
    <div className={`technology-card ${status}`}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className="status-icon">{getStatusIcon()}</span>
      </div>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        <span className={`status-badge ${status}`}>{getStatusText()}</span>
      </div>
    </div>
  );
}

export default TechnologyCard;
