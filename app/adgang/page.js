export default function Adgang() {
  return (
    <main className="accessSuccessPage">
      <div className="accessSuccessBox">
        <div className="dashBadge">AdPilot Pro aktiveret</div>

        <h1>Din adgang er klar</h1>

        <p>
          Tak for dit køb. Brug adgangskoden herunder til at åbne AdPilot-dashboardet.
        </p>

        <div className="codeBox">
          ADPILOTPRO
        </div>

        <div className="buttons center">
          <a href="/dashboard" className="btn primary">
            Åbn dashboard
          </a>

          <a href="/" className="btn secondary">
            Til forsiden
          </a>
        </div>
      </div>
    </main>
  );
}
