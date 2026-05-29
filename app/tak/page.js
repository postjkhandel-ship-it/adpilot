export default function Tak() {
  return (
    <main className="thankPage">
      <div className="thankBox">
        <div className="badge">Besked sendt</div>
        <h1>Tak for din besked</h1>
        <p>
          Vi vender tilbage hurtigst muligt. Du kan også prøve AdPilot-demoen
          med det samme.
        </p>

        <div className="buttons">
          <a href="/dashboard" className="btn primary">Prøv demo</a>
          <a href="/" className="btn secondary">Til forsiden</a>
        </div>
      </div>
    </main>
  );
}
