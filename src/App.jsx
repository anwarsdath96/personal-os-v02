import { useState } from "react";

const layers = [
  { id: 1, name: "Personal Engine" },
  { id: 2, name: "Productivity Engine" },
  { id: 3, name: "Domain Engine" }
];

function App() {
  const [currentLayer, setCurrentLayer] = useState(1);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">PERSONAL OS <span>V02</span></div>
        <div className="topbar-status">Architecture rebuild</div>
      </header>

      <div className="app-body">
        <aside className="sidebar">
          <div className="sidebar-label">LAYERS</div>

          {layers.map((layer) => (
            <button
              key={layer.id}
              className={`nav-item ${currentLayer === layer.id ? "active" : ""}`}
              onClick={() => setCurrentLayer(layer.id)}
            >
              <span className="nav-number">{layer.id}</span>
              <span>{layer.name}</span>
            </button>
          ))}
        </aside>

        <main className="workspace">
          <div className="workspace-header">
            <div>
              <div className="eyebrow">PERSONAL OS V02</div>
              <h1>{layers.find((layer) => layer.id === currentLayer)?.name}</h1>
            </div>
            <div className="status-card">
              <span className="status-dot" />
              Foundation
            </div>
          </div>

          <section className="foundation-card">
            <div className="card-kicker">PHASE 1</div>
            <h2>Architecture foundation</h2>
            <p>
              V02 starts with a clean React + Vite structure. The next layers
              will be added deliberately rather than reproducing the V01
              monolith.
            </p>

            <div className="architecture">
              <div>React UI</div>
              <span>↓</span>
              <div>Application / Domain Logic</div>
              <span>↓</span>
              <div>Data Access</div>
              <span>↓</span>
              <div>Supabase</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
