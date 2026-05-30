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
    if (!customerEmail) return;

    try {
      await fetch("/api/save-campaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: customerEmail,
          businessName: form.business || "Kampagne",
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

  async function copyCampaignText(text) {
    await navigator.clipboard.writeText(text);
    alert("Kampagne kopieret");
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

    const output = `
KAMPAGNEPAKKE FOR ${business.toUpperCase()}

Branche: ${industry}
Produkt/service: ${product}
Målgruppe: ${audience}
Lokation: ${location}
Budget: ${budget} kr/dag
Tilbud: ${offer}
Mål: ${form.goal}

────────────────────────────

ANBEFALET KAMPAGNESTRUKTUR

1. COLD AUDIENCE
- Broad målgruppe
- 4-6 creatives
- Test problem/løsning, UGC, trust og direkte tilbud
- Budget: ${Math.round(budget * 0.7)} kr/dag

2. RETARGETING
- Website besøgende 30 dage
- Klik på annonce 30 dage
- Facebook/Instagram engagement 365 dage
- Add to cart / formularstart hvis relevant
- Budget: ${Math.round(budget * 0.3)} kr/dag

3. CREATIVE TEST
- 2 UGC-vinkler
- 1 trust-annonce
- 1 tilbudsannonce
- 1 retargeting-annonce

────────────────────────────

META ADS TEKSTER

ANNONCE 1 — STÆRK PROBLEM/LØSNING

Hook:
Stop med at udskyde det, når løsningen er enkel.

Primær tekst:
Mange ${audience} venter for længe med at få styr på ${product}, fordi de tror det er besværligt, dyrt eller tidskrævende.

Men hos ${business} får du en nem og professionel løsning, der hjælper dig med at få et bedre resultat uden unødvendigt besvær.

${offer}

Hvis du vil gøre det nemt at komme i gang, er det her et godt tidspunkt at tage næste skridt.

Headline:
Få en nemmere løsning i dag

Beskrivelse:
Professionel løsning til ${audience}.

CTA:
${cta}

────────────────────────────

ANNONCE 2 — UGC STYLE

Hook:
"Jeg skulle bare have prøvet det her noget før."

Primær tekst:
Hvis du har overvejet ${product}, men ikke har fået gjort noget ved det endnu, så er det her dit tegn.

${business} gør det nemt for ${audience} at komme i gang med en løsning, der føles tryg, enkel og professionel.

${offer}

Det behøver ikke være kompliceret at få et bedre resultat.

Headline:
Derfor vælger flere ${business}

Beskrivelse:
Nemt, trygt og professionelt.

CTA:
${cta}

────────────────────────────

ANNONCE 3 — TRUST / OBJECTION

Hook:
Usikker på om det er noget for dig?

Primær tekst:
Det forstår vi godt. Når man vælger ${product}, vil man gerne være sikker på, at det giver mening.

Derfor fokuserer ${business} på en enkel proces, tydelig kommunikation og et professionelt resultat.

Uanset om du er klar nu eller stadig overvejer det, kan du nemt tage næste skridt.

${offer}

Headline:
Trygt valg for ${audience}

Beskrivelse:
Få en løsning der gør det nemt at komme i gang.

CTA:
${cta}

────────────────────────────

ANNONCE 4 — DIREKTE SALG

Hook:
Klar til at tage næste skridt?

Primær tekst:
Med ${product} fra ${business} får ${audience} en nemmere vej til et bedre resultat.

${offer}

Det tager kun få minutter at komme i gang — og du slipper for at gøre det mere besværligt end nødvendigt.

Headline:
Kom i gang med ${product}

Beskrivelse:
En professionel løsning uden besvær.

CTA:
${cta}

────────────────────────────

ANNONCE 5 — RETARGETING

Hook:
Du kiggede — men nåede ikke videre.

Primær tekst:
Du har allerede vist interesse for ${product}.

Hvis du stadig overvejer det, er nu et godt tidspunkt at tage næste skridt.

${business} hjælper ${audience} med en nem og professionel løsning.

${offer}

Headline:
Stadig interesseret?

Beskrivelse:
Tag næste skridt i dag.

CTA:
${cta}

────────────────────────────

ANNONCE 6 — LOKAL / BRANCHEVINKEL

Hook:
Leder du efter en løsning i ${location}?

Primær tekst:
Hvis du søger en professionel løsning inden for ${industry}, kan ${business} hjælpe dig godt videre.

Med ${product} får ${audience} en enkel og tryg måde at komme i gang på.

${offer}

Headline:
${product} i ${location}

Beskrivelse:
Professionel hjælp gjort enkelt.

CTA:
${cta}

────────────────────────────

10 STÆRKE HOOKS

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

────────────────────────────

GOOGLE ADS

Headlines:
- ${product}
- ${business}
- ${product} ${location}
- Professionel Løsning
- Kom I Gang I Dag
- ${offer}
- Få Hjælp Nu
- Nemt Og Professionelt
- Bedre Resultat Uden Besvær
- Til ${audience}
- Få Et Tilbud
- Book I Dag
- Se Mulighederne
- Tryg Og Enkel Proces
- Start Nu

Descriptions:
- Få en professionel løsning hos ${business}. Kom nemt i gang i dag.
- ${product} til ${audience}. En enkel løsning med fokus på resultat.
- ${offer}. Kontakt os eller bestil direkte i dag.
- Gør det nemt at tage næste skridt med ${business}.

Sitelinks:
1. Se priser
2. Kontakt os
3. Sådan virker det
4. Kundeanmeldelser

────────────────────────────

RETARGETING STRATEGI

Målgrupper:
- Website besøgende sidste 30 dage
- Klik på annoncer sidste 30 dage
- Facebook/Instagram engagement 365 dage
- Add to cart / formularstart hvis relevant

Retargeting tekst:
Du har allerede vist interesse for ${product}.

Hvis du stadig overvejer det, kan ${business} hjælpe dig videre med en nem og professionel løsning.

${offer}

CTA:
${cta}

────────────────────────────

CREATIVE IDÉER

1. UGC video:
Person taler direkte til kameraet:
"Jeg havde overvejet ${product}, men fik det aldrig gjort. Det viste sig at være meget nemmere end jeg troede."

2. Før/efter:
Vis problemet før og resultatet efter. Brug kort tekst og tydelig CTA.

3. Trust annonce:
Brug kundeudtalelse, stjerner og kort forklaring af hvorfor ${business} er et trygt valg.

4. Tilbudsannonce:
Vis ${offer} tydeligt sammen med ${product}.

5. Lokal annonce:
Fokusér på ${location} og gør annoncen relevant for lokale kunder.

────────────────────────────

TESTPLAN

Dag 1-3:
Test 4-6 creatives. Rør ikke for meget i kampagnen.

Dag 4-7:
Sluk annoncer med lav CTR og høj CPC.

Efter 7 dage:
Flyt mere budget til den bedste annonce.

Skalering:
Hvis en annonce performer stabilt, øg budgettet med 20-30%.

────────────────────────────

KPI MÅL

Meta Ads:
- CTR: over 1,5%
- CPC: under 4-8 kr.
- Frekvens: under 3 på cold audience
- ROAS: over 2,5x hvis webshop

Leads:
- Leadpris: 30-150 kr. afhængigt af branche
- CTR: over 1,2%

────────────────────────────

KONKLUSION

Start simpelt:
1 cold kampagne + 1 retargeting kampagne.

Fokusér på:
- stærk problem/løsning
- troværdighed
- klart tilbud
- nem CTA
- flere kreative vinkler

Den vigtigste annonce at teste først er:
UGC + problem/løsning + ${offer}.
`;

    setResult(output);
    setCopied(false);
    saveCampaign(output);
  }

  async function copyResult() {
    await navigator.clipboard.writeText(result);
    setCopied(true);
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
          Udfyld briefen og få Meta Ads, Google Ads, hooks, retargeting og
          creative idéer.
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
          </div>

          <button className="dashGenerate" onClick={generateCampaign}>
            Generer kampagne
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
                <button onClick={() => copyCampaignText(campaign.campaign_text)}>
                  Kopiér
                </button>

                <button className="danger" onClick={() => deleteCampaign(campaign.id)}>
                  Slet
                </button>
              </div>
            </div>
          ))}
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
