import "./App.css";
import TechnologyCard from "./TechnologyCard";
import ProgressHeader from "./ProgressHeader";

function App() {
  const technologies = [
    {
      id: 1,
      title: "React Components",
      description:
        "Изучение базовых компонентов React, их структуры и принципов создания",
      status: "completed",
    },
    {
      id: 2,
      title: "JSX Syntax",
      description: "Освоение синтаксиса JSX для создания UI-компонентов",
      status: "in-progress",
    },
    {
      id: 3,
      title: "State Management",
      description: "Работа с состоянием компонентов с помощью useState и хуков",
      status: "not-started",
    },
    {
      id: 4,
      title: "Props System",
      description: "Передача данных между компонентами через систему props",
      status: "completed",
    },
    {
      id: 5,
      title: "Lifecycle Methods",
      description: "Понимание жизненного цикла компонентов React",
      status: "in-progress",
    },
    {
      id: 6,
      title: "Event Handling",
      description: "Обработка пользовательских событий в React компонентах",
      status: "not-started",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Трекер изучения технологий</h1>
        <p>Отслеживайте свой прогресс в изучении React и фронтенд-разработки</p>
      </header>

      <main className="App-main">
        <ProgressHeader technologies={technologies} />

        <div className="technologies-container">
          <h2>📚 Технологии для изучения</h2>
          <div className="technologies-grid">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                title={tech.title}
                description={tech.description}
                status={tech.status}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className="App-footer">
        <p>
          Практическое занятие №19 • Фронтенд и бэкенд разработка • 2025/2026
          уч. год
        </p>
      </footer>
    </div>
  );
}

export default App;
