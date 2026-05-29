export default function Adgang() {
  return (
    <main className="thankPage">
      <div className="thankBox">
        <div className="badge">Adgang aktiveret</div>
        <h1>Velkommen til AdPilot Pro</h1>
        <p>
          Tak for dit køb. Du kan nu gå videre til kampagnegeneratoren.
        </p>

        <div className="buttons center">
          <a href="/dashboard" className="btn primary">
            Åbn AdPilot
          </a>
          <a href="/" className="btn secondary">
            Til forsiden
          </a>
        </div>
      </div>
    </main>
  );
}
