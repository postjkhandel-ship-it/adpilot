"use client";

import { useState } from "react";

export default function Dashboard() {
  const stripeLink = "https://buy.stripe.com/fZudR1dNoabSaCEeTbebu00";

  const [accessCode, setAccessCode] = useState("");
  const [hasAccess, setHasAccess] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");
  const [checking, setChecking] = useState(false);

  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [loadingCampaigns, setLoadingCampaigns] = useState(false);

  const [form, setForm] = useState({
    business: "",
    industry: "",
    product: "",
    audience: "",
    offer: "",
    budget: "",
    goal: "Salg",
    location: "",
    outputType: "Komplet kampagne",
  });

  function update(field, value) {
    setForm({ ...form, [field]: value });
  }

  async function checkAccessCode() {
    setChecking(true);

    try {
      const res = await fetch("/api/check-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: accessCode.trim() }),
      });

      const data = await res.json();

      if (data.success) {
        setHasAccess(true);
        setCustomerEmail(data.customer_email);
        loadCampaigns(data.customer_email);
      } else {
        alert("Forkert adgangskode");
      }
    } catch {
      alert("Der opstod en fejl. Prøv igen.");
    }

    setChecking(false);
  }

  async function loadCampaigns(email) {
    setLoadingCampaigns(true);

    try {
      const res = await fetch("/api/get-campaigns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setCampaigns(data.campaigns || []);
      }
    } catch {
      console.log("Kunne ikke hente kampagner");
    }

    setLoadingCampaigns(false);
  }

  async function saveCampaign(campaignText) {
    if (!customerEmail || !campaignText) return;

    try {
      await fetch("/api/save-campaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: customerEmail,
          businessName: form.business || form.outputType || "Kampagne",
          campaignText,
        }),
      });

      loadCampaigns(customerEmail);
    } catch {
      console.log("Kunne ikke gemme kampagne");
    }
  }

  async function deleteCampaign(id) {
    const confirmed = confirm("Vil du slette denne kampagne?");
    if (!confirmed) return;

    try {
      const res = await fetch("/api/delete-campaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, email: customerEmail }),
      });

      const data = await res.json();

      if (data.success) {
        setCampaigns((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert("Kunne ikke slette kampagnen");
      }
    } catch {
      alert("Der opstod en fejl");
    }
  }

  async function copyText(text) {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  function clearOutput() {
    setResult("");
    setCopied(false);
  }

  function generateCampaign() {
    const budget = Number(form.budget) || 150;
    const offer = form.offer || "Aktuelt tilbud";
    const business = form.business || "virksomheden";
    const product = form.product || "produktet/servicen";
    const audience = form.audience || "målgruppen";
    const industry = form.industry || "branchen";
    const location = form.location || "Danmark";

    const cta =
      form.goal === "Leads"
        ? "Få tilbud"
        : form.goal === "Bookinger"
        ? "Book nu"
        : form.goal === "Trafik"
        ? "Læs mere"
        : "Køb nu";

    let output = "";

    if (form.outputType === "Kun Hooks") {
      output = `
HOOKS FOR ${business.toUpperCase()}

Produkt/service:
${product}

Målgruppe:
${audience}

Tilbud:
${offer}

1. Stop med at udskyde det
2. Du behøver ikke gøre det mere besværligt
3. En nemmere løsning til ${audience}
4. Derfor vælger flere ${business}
5. Klar til at tage næste skridt?
6. ${product} gjort enkelt
7. Få et bedre resultat uden besvær
8. Det her gør processen nemmere
9. Usikker? Så start her
10. Professionel hjælp uden at starte fra nul
11. Leder du efter ${product} i ${location}?
12. Det her er løsningen mange venter for længe med
13. Gør det nemt at komme i gang
14. Få mere ud af ${product}
15. Se hvorfor ${audience} vælger ${business}
`;
    }

    if (form.outputType === "Kun Google Ads") {
      output = `
GOOGLE ADS FOR ${business.toUpperCase()}

Headlines:
- ${product}
- ${business}
- ${product} ${location}
- Professionel løsning
- Kom i gang i dag
- ${offer}
- Få hjælp nu
- Nemt og professionelt
- Bedre resultat uden besvær
- Til ${audience}
- Få et tilbud
- Book i dag
- Se mulighederne
- Tryg og enkel proces
- Start nu

Descriptions:
- Få en professionel løsning hos ${business}. Kom nemt i gang i dag.
- ${product} til ${audience}. En enkel løsning med fokus på resultat.
- ${offer}. Kontakt os eller bestil direkte i dag.

Sitelinks:
1. Se priser
2. Kontakt os
3. Sådan virker det
4. Kundeanmeldelser
`;
    }

    if (form.outputType === "Retargeting") {
      output = `
RETARGETING KAMPAGNE FOR ${business.toUpperCase()}

Målgrupper:
- Website besøgende sidste 30 dage
- Klik på annoncer sidste 30 dage
- Facebook/Instagram engagement 365 dage
- Add to cart / formularstart hvis relevant

ANNONCE 1

Hook:
Du kiggede — men nåede ikke videre.

Primær tekst:
Du har allerede vist interesse for ${product}.

Hvis du stadig overvejer det, er nu et godt tidspunkt at tage næste skridt.

${business} hjælper ${audience} med en nem og professionel løsning.

${offer}

Headline:
Stadig interesseret?

CTA:
${cta}

ANNONCE 2

Hook:
Er du stadig i tvivl?

Primær tekst:
Det er helt normalt at overveje tingene en ekstra gang.

Men hvis du gerne vil have en nemmere og mere professionel løsning, kan ${business} hjælpe dig videre.

Headline:
Tag næste skridt

CTA:
${cta}
`;
    }

    if (form.outputType === "UGC scripts") {
      output = `
UGC SCRIPTS FOR ${business.toUpperCase()}

SCRIPT 1 — PROBLEM/LØSNING

Hook:
"Jeg havde overvejet ${product}, men fik det aldrig gjort."

Body:
"Jeg troede det ville være besværligt, men ${business} gjorde det faktisk ret nemt. Hvis du også har udskudt det, så er det her et godt sted at starte."

CTA:
"${cta}"

SCRIPT 2 — TRUST

Hook:
"Jeg var lidt i tvivl i starten."

Body:
"Når man vælger ${product}, vil man gerne være sikker på, at det føles trygt og professionelt. Det var præcis det jeg oplevede her."

CTA:
"${cta}"

SCRIPT 3 — DIREKTE TILBUD

Hook:
"Hvis du har ventet på et godt tidspunkt, så er det nu."

Body:
"${offer}. ${business} hjælper ${audience} med en nem og professionel løsning."

CTA:
"${cta}"
`;
    }

    if (form.outputType === "Kun Meta Ads" || form.outputType === "Komplet kampagne") {
      output = `
META ADS FOR ${business.toUpperCase()}

Branche:
${industry}

Produkt/service:
${product}

Målgruppe:
${audience}

Tilbud:
${offer}

ANNONCE 1 — PROBLEM/LØSNING

Hook:
Stop med at udskyde det, når løsningen er enkel.

Primær tekst:
Mange ${audience} venter for længe med at få styr på ${product}, fordi de tror det er besværligt, dyrt eller tidskrævende.

Men hos ${business} får du en nem og professionel løsning, der hjælper dig med at få et bedre resultat uden unødvendigt besvær.

${offer}

Headline:
Få en nemmere løsning i dag

CTA:
${cta}

ANNONCE 2 — UGC STYLE

Hook:
"Jeg skulle bare have prøvet det her noget før."

Primær tekst:
Hvis du har overvejet ${product}, men ikke har fået gjort noget ved det endnu, så er det her dit tegn.

${business} gør det nemt for ${audience} at komme i gang med en løsning, der føles tryg, enkel og professionel.

${offer}

Headline:
Derfor vælger flere ${business}

CTA:
${cta}

ANNONCE 3 — TRUST

Hook:
Usikker på om det er noget for dig?

Primær tekst:
Det forstår vi godt. Når man vælger ${product}, vil man gerne være sikker på, at det giver mening.

Derfor fokuserer ${business} på en enkel proces, tydelig kommunikation og et professionelt resultat.

${offer}

Headline:
Trygt valg for ${audience}

CTA:
${cta}
`;
    }

    if (form.outputType === "Komplet kampagne") {
      output += `

────────────────────────────

KAMPAGNESTRUKTUR

Cold kampagne:
- Broad målgruppe
- 4-6 creatives
- Budget: ${Math.round(budget * 0.7)} kr/dag

Retargeting:
- Website besøgende 30 dage
- Engagement 365 dage
- Budget: ${Math.round(budget * 0.3)} kr/dag

────────────────────────────

GOOGLE ADS

Headlines:
- ${product}
- ${business}
- ${product} ${location}
- Professionel løsning
- Kom i gang i dag
- ${offer}
- Få hjælp nu
- Til ${audience}

Descriptions:
- Få en professionel løsning hos ${business}. Kom nemt i gang i dag.
- ${product} til ${audience}. En enkel løsning med fokus på resultat.
- ${offer}. Kontakt os eller bestil direkte i dag.

────────────────────────────

CREATIVE IDÉER

1. UGC-video med ejer eller kunde
2. Før/efter-annonce
3. Trust-annonce med kundeudtalelse
4. Tilbudsannonce med ${offer}
5. Lokal annonce med fokus på ${location}

────────────────────────────

TESTPLAN

Dag 1-3:
Test 4-6 creatives.

Dag 4-7:
Sluk annoncer med lav CTR og høj CPC.

Efter 7 dage:
Flyt budget mod vinderen og skalér 20-30%.
`;
    }

    setResult(output);
    setCopied(false);
    saveCampaign(output);
  }

  if (!hasAccess) {
    return (
      <main className="accessPage">
        <div className="accessBox">
          <div className="dashBadge">AdPilot Pro</div>
          <h1>Adgang til dashboard</h1>
          <p>Indtast din personlige adgangskode for at åbne AdPilot Pro.</p>

          <input
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            placeholder="Indtast adgangskode"
          />

          <button onClick={checkAccessCode} disabled={checking}>
            {checking ? "Tjekker..." : "Åbn dashboard"}
          </button>

          <a href={stripeLink} target="_blank" rel="noopener noreferrer">
            Start AdPilot Pro – 299 kr/md
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="dashPage">
      <header className="dashNav">
        <a href="/" className="dashLogo">
          <span>A</span>AdPilot
        </a>

        <div className="dashNavRight">
          <span>{customerEmail}</span>
          <a href="/">Forside</a>
        </div>
      </header>

      <section className="dashHero">
        <div className="dashBadge">AI Campaign Generator</div>
        <h1>Generer en komplet annoncepakke</h1>
        <p>
          Vælg output-type og få Meta Ads, Google Ads, hooks, retargeting eller
          UGC scripts.
        </p>
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

            <Field label="Output type">
              <select value={form.outputType} onChange={(e) => update("outputType", e.target.value)}>
                <option>Komplet kampagne</option>
                <option>Kun Meta Ads</option>
                <option>Kun Google Ads</option>
                <option>Kun Hooks</option>
                <option>Retargeting</option>
                <option>UGC scripts</option>
              </select>
            </Field>
          </div>

          <button className="dashGenerate" onClick={generateCampaign}>
            Generer {form.outputType}
          </button>
        </div>

        <aside className="dashSummary">
          <h3>Mine kampagner</h3>

          {loadingCampaigns && <p>Henter kampagner...</p>}

          {!loadingCampaigns && campaigns.length === 0 && (
            <p>Du har ingen gemte kampagner endnu.</p>
          )}

          {campaigns.map((campaign) => (
            <div key={campaign.id} className="savedCampaignItem">
              <button className="savedCampaignBtn" onClick={() => setResult(campaign.campaign_text)}>
                <strong>{campaign.business_name || "Kampagne"}</strong>
                <small>{new Date(campaign.created_at).toLocaleDateString("da-DK")}</small>
              </button>

              <div className="savedCampaignActions">
                <button onClick={() => copyText(campaign.campaign_text)}>Kopiér</button>
                <button className="danger" onClick={() => deleteCampaign(campaign.id)}>Slet</button>
              </div>
            </div>
          ))}
        </aside>
      </section>

      {result && (
        <section className="dashResult">
          <div className="dashResultTop">
            <div>
              <div className="dashBadge">Færdig output</div>
              <h2>Dit output</h2>
            </div>

            <div className="outputToolbar">
              <button onClick={() => copyText(result)}>
                {copied ? "Kopieret ✓" : "Kopiér"}
              </button>
              <button onClick={() => saveCampaign(result)}>Gem igen</button>
              <button className="dangerLight" onClick={clearOutput}>Ryd</button>
            </div>
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
