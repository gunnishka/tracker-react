import { useState } from "react";
import "./App.css";
import TechnologyCard from "./components/TechnologyCard.jsx";
import ProgressHeader from "./components/ProgressHeader.jsx";
import QuickActions from "./components/QuickActions.jsx";
import FilterButtons from "./components/FilterButtons.jsx";

function App() {
  // Состояние для хранения массива технологий
  const [technologies, setTechnologies] = useState([
    {
      id: 1,
      title: "React Components",
      description:
        "Изучение базовых компонентов React, их структуры и принципов создания",
      status: "not-started",
      category: "React Basics",
    },
    {
      id: 2,
      title: "JSX Syntax",
      description: "Освоение синтаксиса JSX для создания UI-компонентов",
      status: "not-started",
      category: "React Basics",
    },
    {
      id: 3,
      title: "State Management",
      description: "Работа с состоянием компонентов с помощью useState и хуков",
      status: "not-started",
      category: "React Hooks",
    },
    {
      id: 4,
      title: "Props System",
      description: "Передача данных между компонентами через систему props",
      status: "not-started",
      category: "React Basics",
    },
    {
      id: 5,
      title: "Lifecycle Methods",
      description: "Понимание жизненного цикла компонентов React",
      status: "not-started",
      category: "Advanced React",
    },
    {
      id: 6,
      title: "Event Handling",
      description: "Обработка пользовательских событий в React компонентах",
      status: "not-started",
      category: "React Basics",
    },
    {
      id: 7,
      title: "Conditional Rendering",
      description: "Условный рендеринг компонентов в зависимости от состояния",
      status: "not-started",
      category: "React Basics",
    },
    {
      id: 8,
      title: "Lists and Keys",
      description: "Работа со списками и ключами для эффективного рендеринга",
      status: "not-started",
      category: "React Basics",
    },
  ]);

  // Состояние для активного фильтра
  const [activeFilter, setActiveFilter] = useState("all");

  // Функция для изменения статуса конкретной технологии по id
  const handleStatusChange = (id, newStatus) => {
    setTechnologies((prev) =>
      prev.map((tech) =>
        tech.id === id ? { ...tech, status: newStatus } : tech
      )
    );
  };

  // Функция для отметки всех технологий как выполненных
  const handleMarkAllCompleted = () => {
    setTechnologies((prev) =>
      prev.map((tech) => ({ ...tech, status: "completed" }))
    );
  };

  // Функция для сброса всех статусов
  const handleResetAll = () => {
    setTechnologies((prev) =>
      prev.map((tech) => ({ ...tech, status: "not-started" }))
    );
  };

  // Функция для случайного выбора технологии
  const handleRandomSelect = () => {
    const notStartedTechs = technologies.filter(
      (tech) => tech.status === "not-started"
    );

    if (notStartedTechs.length === 0) {
      alert("Все технологии уже начаты или завершены!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * notStartedTechs.length);
    const randomTech = notStartedTechs[randomIndex];

    // Изменяем статус выбранной технологии на "in-progress"
    handleStatusChange(randomTech.id, "in-progress");

    alert(
      `🎲 Выбрана технология: "${randomTech.title}"\n\nСтатус изменен на "В процессе"`
    );
  };

  // Функция для фильтрации технологий
  const getFilteredTechnologies = () => {
    switch (activeFilter) {
      case "not-started":
        return technologies.filter((tech) => tech.status === "not-started");
      case "in-progress":
        return technologies.filter((tech) => tech.status === "in-progress");
      case "completed":
        return technologies.filter((tech) => tech.status === "completed");
      default:
        return technologies;
    }
  };

  const filteredTechnologies = getFilteredTechnologies();

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Трекер изучения технологий</h1>
        <p>Отслеживайте свой прогресс в изучении React и фронтенд-разработки</p>
      </header>

      <main className="App-main">
        <ProgressHeader technologies={technologies} />

        <QuickActions
          technologies={technologies}
          onMarkAllCompleted={handleMarkAllCompleted}
          onResetAll={handleResetAll}
          onRandomSelect={handleRandomSelect}
        />

        <FilterButtons
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          technologies={technologies}
        />

        <div className="technologies-container">
          <div className="section-header">
            <h2>
              {activeFilter === "all"
                ? "📚 Все технологии"
                : activeFilter === "not-started"
                ? "⭕ Не начатые технологии"
                : activeFilter === "in-progress"
                ? "⏳ Технологии в процессе"
                : "✅ Изученные технологии"}
              <span className="count-badge">{filteredTechnologies.length}</span>
            </h2>
            <p className="section-description">
              {activeFilter === "all"
                ? "Нажмите на карточку, чтобы изменить статус технологии"
                : activeFilter === "not-started"
                ? "Технологии, которые еще не начаты"
                : activeFilter === "in-progress"
                ? "Технологии, которые в процессе изучения"
                : "Технологии, которые уже изучены"}
            </p>
          </div>

          {filteredTechnologies.length === 0 ? (
            <div className="empty-state">
              <p className="empty-message">
                {activeFilter === "not-started"
                  ? "🎉 Все технологии начаты или изучены!"
                  : activeFilter === "in-progress"
                  ? "📝 Нет технологий в процессе изучения"
                  : "🎯 Нет изученных технологий"}
              </p>
              <p className="empty-hint">
                {activeFilter !== "all" &&
                  "Попробуйте выбрать другой фильтр или изменить статусы технологий"}
              </p>
            </div>
          ) : (
            <div className="technologies-grid">
              {filteredTechnologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  id={tech.id}
                  title={tech.title}
                  description={tech.description}
                  status={tech.status}
                  category={tech.category}
                  onStatusChange={handleStatusChange}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="App-footer">
        <p>
          Практическое занятие №20 • Фронтенд и бэкенд разработка • 2025/2026
          уч. год
        </p>
        <p className="footer-hint">
          💡 Нажмите на любую карточку, чтобы изменить ее статус
        </p>
      </footer>
    </div>
  );
}

export default App;
