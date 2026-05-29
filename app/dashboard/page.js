"use client";

import { useState } from "react";

export default function Dashboard() {
  const [form, setForm] = useState({
    business: "",
    industry: "",
    product: "",
    audience: "",
    offer: "",
    budget: "",
    goal: "Salg",
    location: "",
  });

  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  function update(field, value) {
    setForm({ ...form, [field]: value });
  }

  function generateCampaign() {
    const budget = Number(form.budget) || 150;
    const offer = form.offer || "Aktuelt tilbud";
    const cta =
      form.goal === "Leads" ? "Få tilbud" :
      form.goal === "Bookinger" ? "Book nu" :
      form.goal === "Trafik" ? "Læs mere" :
      "Køb nu";

    const output = `
KAMPAGNEPAKKE FOR ${form.business || "DIN VIRKSOMHED"}

Branche: ${form.industry || "Ikke angivet"}
Produkt/service: ${form.product || "Ikke angivet"}
Målgruppe: ${form.audience || "Ikke angivet"}
Lokation: ${form.location || "Ikke angivet"}
Budget: ${budget} kr/dag
Tilbud: ${offer}
Mål: ${form.goal}

META ADS

Annonce 1:
Har du brug for en nemmere og mere professionel løsning?

Med ${form.product || "løsningen"} hjælper ${form.business || "virksomheden"} ${form.audience || "målgruppen"} med at få et bedre resultat uden besvær.

${offer}

Headline:
Kom i gang med ${form.product || "løsningen"}

CTA:
${cta}

HOOKS

1. Stop med at udskyde det
2. En nemmere løsning til ${form.audience || "din målgruppe"}
3. Få et bedre resultat uden besvær
4. Derfor vælger flere ${form.business || "os"}

GOOGLE ADS

Headlines:
- ${form.product || "Professionel løsning"}
- ${form.business || "Din virksomhed"}
- Få Hjælp I Dag
- Kom I Gang Nu

Retargeting:
Du har allerede vist interesse. Nu er det tid til at tage næste skridt.
`;

    setResult(output);
    setCopied(false);
  }

  async function copyResult() {
    await navigator.clipboard.writeText(result);
    setCopied(true);
  }

  return (
    <main className="dashPage">
      <header className="dashNav">
        <a href="/" className="dashLogo"><span>A</span>AdPilot</a>
        <div className="dashNavRight">
          <span>Pro demo</span>
          <a href="/">Forside</a>
        </div>
      </header>

      <section className="dashHero">
        <div className="dashBadge">AI Campaign Generator</div>
        <h1>Generer en komplet annoncepakke</h1>
        <p>Udfyld briefen og få Meta Ads, Google Ads, hooks, retargeting og creative idéer.</p>
      </section>

      <section className="dashLayout">
        <div className="dashCard">
          <h2>Kampagnebrief</h2>
          <p>Jo mere præcist du udfylder felterne, jo stærkere bliver outputtet.</p>

          <div className="dashFormGrid">
            <Field label="Virksomhedsnavn">
              <input value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="Fx firmanavn" />
            </Field>

            <Field label="Branche">
              <input value={form.industry} onChange={(e) => update("industry", e.target.value)} placeholder="Fx webshop, klinik, håndværker" />
            </Field>

            <Field label="Produkt/service">
              <input value={form.product} onChange={(e) => update("product", e.target.value)} placeholder="Fx service eller produkt" />
            </Field>

            <Field label="Målgruppe">
              <input value={form.audience} onChange={(e) => update("audience", e.target.value)} placeholder="Fx lokale kunder" />
            </Field>

            <Field label="Tilbud/pris">
              <input value={form.offer} onChange={(e) => update("offer", e.target.value)} placeholder="Fx 20% rabat" />
            </Field>

            <Field label="Budget pr dag">
              <input value={form.budget} onChange={(e) => update("budget", e.target.value)} placeholder="Fx 150" />
            </Field>

            <Field label="Lokation">
              <input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="Fx København" />
            </Field>

            <Field label="Målsætning">
              <select value={form.goal} onChange={(e) => update("goal", e.target.value)}>
                <option>Salg</option>
                <option>Leads</option>
                <option>Bookinger</option>
                <option>Trafik</option>
              </select>
            </Field>
          </div>

          <button className="dashGenerate" onClick={generateCampaign}>
            Generer kampagne
          </button>
        </div>

        <aside className="dashSummary">
          <h3>Output inkluderer</h3>
          <span>✓ Meta Ads tekster</span>
          <span>✓ Google Ads forslag</span>
          <span>✓ Hooks</span>
          <span>✓ Retargeting strategi</span>
          <span>✓ Creative idéer</span>
          <span>✓ Budgetfordeling</span>
        </aside>
      </section>

      {result && (
        <section className="dashResult">
          <div className="dashResultTop">
            <div>
              <div className="dashBadge">Færdig kampagne</div>
              <h2>Din annoncepakke</h2>
            </div>

            <button onClick={copyResult}>
              {copied ? "Kopieret ✓" : "Kopiér kampagne"}
            </button>
          </div>

          <pre>{result}</pre>
        </section>
      )}
    </main>
  );
}

function Field({ label, children }) {
  return (
    <label className="dashField">
      <span>{label}</span>
      {children}
    </label>
  );
}
