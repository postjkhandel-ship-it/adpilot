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
  });

  const [result, setResult] = useState("");

  function updateField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
  }

  function generateCampaign() {
    const campaign = `
KAMPAGNESTRUKTUR

Kampagnenavn:
${form.business} - ${form.goal} kampagne

Formål:
${form.goal}

Branche:
${form.industry}

Produkt/service:
${form.product}

Målgruppe:
${form.audience}

Budget:
${form.budget} kr/dag

Tilbud:
${form.offer}

ANBEFALET STRUKTUR

1. Cold Audience kampagne
- Broad målgruppe
- 3-5 creatives
- Fokus på problem/løsning
- Budget: 70%

2. Retargeting kampagne
- Besøgende sidste 30 dage
- Add to cart sidste 14 dage
- Engagerede på Facebook/Instagram
- Budget: 30%

META ADS TEKSTER

ANNONCE 1 - PROBLEM/LØSNING

Primær tekst:
Kæmper du med at få flere kunder fra dine annoncer?

Med ${form.product} får ${form.audience} en nemmere måde at skabe annoncer, der faktisk virker.

${form.offer ? "Lige nu: " + form.offer : ""}

Headline:
Få bedre annoncer på få minutter

Beskrivelse:
AI-genererede kampagner klar til brug.

CTA:
Læs mere

ANNONCE 2 - UGC STYLE

Hook:
"Jeg brugte alt for lang tid på annoncer — indtil jeg fandt den her løsning."

Primær tekst:
Hvis du driver ${form.industry}, ved du hvor svært det kan være at lave gode annoncer.

${form.product} hjælper dig med hooks, tekster og kampagnestruktur på få minutter.

Headline:
Lav ads uden at gætte

CTA:
Kom i gang

ANNONCE 3 - RETARGETING

Primær tekst:
Du har allerede vist interesse.

Hvis du vil gøre dine annoncer hurtigere og mere professionelle, er ${form.product} bygget til dig.

Headline:
Klar til bedre annoncer?

CTA:
Start nu

HOOKS

1. Stop med at gætte på dine annoncer
2. Lav Meta Ads på få minutter
3. Få hooks og tekster klar med AI
4. Perfekt til små virksomheder
5. Din næste kampagne starter her

CREATIVE IDÉER

1. iPhone UGC video
2. Før/efter annonce setup
3. Skærmoptagelse af AI generatoren
4. Statisk billede med stærkt hook
5. Testimonial-style ad

GOOGLE ADS

Headlines:
- AI Meta Ads Generator
- Lav Ads På Få Minutter
- Professionelle Annoncer
- Få Bedre Annoncetekster

Descriptions:
- Generer hooks, headlines og tekster på få minutter.
- Stop med at gætte. Få en komplet annoncepakke med AI.
`;

    setResult(campaign);
  }

  return (
    <main className="dashboard">
      <aside className="sidebar">
        <div className="logo">AdPilot</div>

        <nav className="nav">
          <div className="nav-active">Dashboard</div>
          <div>Create Campaign</div>
          <div>Campaign History</div>
          <div>Creative Ideas</div>
          <div>Google Ads</div>
          <div>Billing</div>
        </nav>
      </aside>

      <section className="main">
        <div className="card">
          <h2>Generer kampagne</h2>
          <p>Udfyld felterne og få en komplet annoncepakke.</p>

          <div className="grid">
            <label>
              Virksomhedsnavn
              <input
                value={form.business}
                onChange={(e) =>
                  updateField("business", e.target.value)
                }
              />
            </label>

            <label>
              Branche
              <input
                value={form.industry}
                onChange={(e) =>
                  updateField("industry", e.target.value)
                }
              />
            </label>

            <label>
              Produkt/service
              <input
                value={form.product}
                onChange={(e) =>
                  updateField("product", e.target.value)
                }
              />
            </label>

            <label>
              Målgruppe
              <input
                value={form.audience}
                onChange={(e) =>
                  updateField("audience", e.target.value)
                }
              />
            </label>

            <label>
              Tilbud/rabat
              <input
                value={form.offer}
                onChange={(e) =>
                  updateField("offer", e.target.value)
                }
              />
            </label>

            <label>
              Budget pr dag
              <input
                value={form.budget}
                onChange={(e) =>
                  updateField("budget", e.target.value)
                }
              />
            </label>
          </div>

          <label style={{ marginTop: "16px" }}>
            Målsætning
            <select
              value={form.goal}
              onChange={(e) =>
                updateField("goal", e.target.value)
              }
            >
              <option>Salg</option>
              <option>Leads</option>
              <option>Bookinger</option>
              <option>Trafik</option>
            </select>
          </label>

          <button
            className="btn"
            onClick={generateCampaign}
          >
            Generer kampagne
          </button>
        </div>

        {result && (
          <div className="card">
            <h2>Din kampagne</h2>
            <div className="result">{result}</div>
          </div>
        )}
      </section>
    </main>
  );
}
