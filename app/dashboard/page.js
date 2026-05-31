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

  function getCTA(goal) {
    if (goal === "Leads") return "Få tilbud";
    if (goal === "Bookinger") return "Book tid";
    if (goal === "Trafik") return "Læs mere";
    return "Kom i gang";
  }

  function createAdStrategy() {
    const business = form.business || "virksomheden";
    const industry = form.industry || "branchen";
    const product = form.product || "produktet/servicen";
    const audience = form.audience || "målgruppen";
    const location = form.location || "Danmark";
    const offer = form.offer ? `Fra ${form.offer} kr.` : "Aktuelt tilbud.";
    const budget = Number(form.budget) || 150;
    const cta = getCTA(form.goal);

    const base = {
      business,
      industry,
      product,
      audience,
      location,
      offer,
      budget,
      cta,
    };

    const hooks = `
20 PROFESSIONELLE HOOKS

1. Har du brug for en bedre løsning til ${product}?
2. Få professionel hjælp uden at gøre processen besværlig.
3. Derfor vælger flere ${business}.
4. Gør det nemmere at komme i gang med ${product}.
5. En tryg løsning til ${audience}.
6. Få et bedre resultat uden unødvendigt besvær.
7. Leder du efter ${product} i ${location}?
8. Stop med at udskyde det.
9. Få hjælp fra nogen der ved hvad de laver.
10. Det her gør valget nemmere.
11. Klar til at tage næste skridt?
12. Professionel løsning inden for ${industry}.
13. Få styr på ${product} på en enkel måde.
14. En bedre løsning starter her.
15. Gør det nemt at vælge rigtigt.
16. Til dig der vil have et professionelt resultat.
17. Få en løsning der passer til dit behov.
18. Se hvordan ${business} kan hjælpe.
19. En enklere vej til et bedre resultat.
20. Kom godt i gang i dag.
`;

    const metaAds = `
META ADS FOR ${business.toUpperCase()}

Branche: ${industry}
Produkt/service: ${product}
Målgruppe: ${audience}
Lokation: ${location}
Tilbud: ${offer}

━━━━━━━━━━━━━━━━━━━━

ANNONCE 1 — PROBLEM / LØSNING

Hook:
Har du brug for en bedre løsning til ${product}?

Primær tekst:
Mange ${audience} har et behov inden for ${product}, men får det ikke løst, fordi det virker uoverskueligt, tidskrævende eller svært at vælge den rigtige løsning.

Hos ${business} får du en enkel og professionel løsning, der hjælper dig med at komme videre uden unødvendigt besvær.

${offer}

Headline:
Professionel løsning til ${audience}

Beskrivelse:
Få hjælp til ${product} i ${location}.

CTA:
${cta}

━━━━━━━━━━━━━━━━━━━━

ANNONCE 2 — RESULTAT / ØNSKE

Hook:
Få et bedre resultat uden at gøre det kompliceret.

Primær tekst:
Når du vælger ${product}, handler det ikke kun om selve løsningen — det handler om resultatet bagefter.

${business} hjælper ${audience} med en tryg, enkel og professionel løsning inden for ${industry}.

${offer}

Headline:
Få hjælp fra ${business}

Beskrivelse:
En nemmere vej til et bedre resultat.

CTA:
${cta}

━━━━━━━━━━━━━━━━━━━━

ANNONCE 3 — TRUST / TRYGHED

Hook:
Vælg en løsning der føles tryg fra start.

Primær tekst:
Når du skal vælge en løsning inden for ${industry}, vil du gerne føle dig sikker på, at det bliver gjort ordentligt.

Hos ${business} får du tydelig kommunikation, professionel hjælp og fokus på det resultat, du ønsker.

${offer}

Headline:
Trygt valg inden for ${industry}

Beskrivelse:
Professionel hjælp fra start til slut.

CTA:
${cta}

━━━━━━━━━━━━━━━━━━━━

ANNONCE 4 — DIREKTE SALG

Hook:
Klar til at tage næste skridt?

Primær tekst:
Med ${product} fra ${business} får ${audience} en nemmere vej til et professionelt resultat.

Hvis du har overvejet det, er nu et godt tidspunkt at komme i gang.

${offer}

Headline:
Kom i gang med ${product}

Beskrivelse:
Kontakt ${business} i dag.

CTA:
${cta}

━━━━━━━━━━━━━━━━━━━━

ANNONCE 5 — RETARGETING

Hook:
Du kiggede — men nåede ikke videre.

Primær tekst:
Du har allerede vist interesse for ${product}.

Hvis du stadig overvejer det, kan ${business} hjælpe dig videre med en professionel løsning.

${offer}

Headline:
Stadig interesseret?

Beskrivelse:
Tag næste skridt i dag.

CTA:
${cta}
`;

    const googleAds = `
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
- Til ${audience}
- Få et tilbud
- Book i dag
- Tryg proces
- God service
- Start nu
- ${industry}

Descriptions:
- Få professionel hjælp til ${product} hos ${business}. Kom nemt i gang i dag.
- Leder du efter ${product} i ${location}? ${business} hjælper dig videre.
- ${offer} En enkel løsning med fokus på resultat og tryghed.
- Professionel service til ${audience}. Kontakt ${business} i dag.

Sitelinks:
1. Se priser
2. Kontakt os
3. Sådan virker det
4. Kundeanmeldelser
`;

    const retargeting = `
RETARGETING FOR ${business.toUpperCase()}

Målgrupper:
- Website besøgende sidste 30 dage
- Klik på annoncer sidste 30 dage
- Facebook/Instagram engagement
- Formularstart / add to cart hvis relevant

Annonce 1:
Du har allerede vist interesse for ${product}.

Hvis du stadig overvejer det, kan ${business} hjælpe dig videre med en enkel og professionel løsning.

${offer}

CTA:
${cta}

Annonce 2:
Stadig i tvivl?

Det er helt normalt at overveje tingene en ekstra gang. Hos ${business} får du en tryg proces og professionel hjælp fra start.

CTA:
${cta}
`;

    const ugc = `
UGC SCRIPTS FOR ${business.toUpperCase()}

SCRIPT 1 — PROBLEM/LØSNING

Hook:
"Jeg havde overvejet ${product}, men fik det aldrig gjort."

Body:
"Jeg troede det ville være besværligt, men ${business} gjorde processen meget nemmere. Hvis du også har udskudt det, så er det her et godt sted at starte."

CTA:
"${cta}"

━━━━━━━━━━━━━━━━━━━━

SCRIPT 2 — TRUST

Hook:
"Jeg ville bare gerne vælge nogen, der virkede professionelle."

Body:
"Når man skal vælge ${product}, vil man gerne føle sig tryg. Hos ${business} var processen tydelig, enkel og professionel fra start."

CTA:
"${cta}"

━━━━━━━━━━━━━━━━━━━━

SCRIPT 3 — RESULTAT

Hook:
"Det gjorde faktisk en større forskel, end jeg regnede med."

Body:
"${product} gav et langt bedre resultat end forventet. Det var nemt at komme i gang, og det hele føltes professionelt."

CTA:
"${cta}"
`;

    const structure = `
KAMPAGNESTRUKTUR

Cold kampagne:
- Broad målgruppe
- 4-6 creatives
- Test problem/løsning, trust, direkte salg og UGC
- Budget: ${Math.round(budget * 0.7)} kr/dag

Retargeting:
- Website besøgende 30 dage
- Engagement 365 dage
- Formularstart / add to cart hvis relevant
- Budget: ${Math.round(budget * 0.3)} kr/dag

Testplan:
Dag 1-3: Test 4-6 creatives.
Dag 4-7: Sluk svage annoncer.
Efter 7 dage: Skaler vinderen 20-30%.

KPI mål:
- CTR: over 1,2%
- CPC: så lavt som muligt ift. branche
- Leadpris: vurderes efter branche og tilbud
- Fokus: stærk hook + tydeligt tilbud + klar CTA
`;

    return { ...base, hooks, metaAds, googleAds, retargeting, ugc, structure };
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
      if (data.success) setCampaigns(data.campaigns || []);
    } catch {}

    setLoadingCampaigns(false);
  }

  async function saveCampaign(campaignText) {
    if (!customerEmail || !campaignText) return;

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
  }

  async function deleteCampaign(id) {
    if (!confirm("Vil du slette denne kampagne?")) return;

    const res = await fetch("/api/delete-campaign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, email: customerEmail }),
    });

    const data = await res.json();
    if (data.success) setCampaigns((prev) => prev.filter((item) => item.id !== id));
  }

  async function copyText(text) {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  function generateCampaign() {
    const strategy = createAdStrategy();
    let output = "";

    if (form.outputType === "Kun Meta Ads") output = strategy.metaAds;
    if (form.outputType === "Kun Google Ads") output = strategy.googleAds;
    if (form.outputType === "Kun Hooks") output = strategy.hooks;
    if (form.outputType === "Retargeting") output = strategy.retargeting;
    if (form.outputType === "UGC scripts") output = strategy.ugc;

    if (form.outputType === "Komplet kampagne") {
      output = `
KOMPLET KAMPAGNE FOR ${strategy.business.toUpperCase()}

${strategy.metaAds}

${strategy.hooks}

${strategy.googleAds}

${strategy.retargeting}

${strategy.ugc}

${strategy.structure}
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
        <a href="/" className="dashLogo"><span>A</span>AdPilot</a>
        <div className="dashNavRight">
          <span>{customerEmail}</span>
          <a href="/">Forside</a>
        </div>
      </header>

      <section className="dashHero">
        <div className="dashBadge">AI Campaign Generator</div>
        <h1>Generer professionelle annoncetekster</h1>
        <p>Universelt output til alle brancher — baseret på virksomhed, produkt, målgruppe og tilbud.</p>
      </section>

      <section className="dashLayout">
        <div className="dashCard">
          <h2>Kampagnebrief</h2>
          <p>Udfyld felterne præcist. Generatoren tilpasser teksten til det firma, du skriver.</p>

          <div className="dashFormGrid">
            <Field label="Virksomhedsnavn">
              <input value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="Fx Klinik Nord" />
            </Field>

            <Field label="Branche">
              <input value={form.industry} onChange={(e) => update("industry", e.target.value)} placeholder="Fx kosmetisk klinik" />
            </Field>

            <Field label="Produkt/service">
              <input value={form.product} onChange={(e) => update("product", e.target.value)} placeholder="Fx ansigtsbehandling" />
            </Field>

            <Field label="Målgruppe">
              <input value={form.audience} onChange={(e) => update("audience", e.target.value)} placeholder="Fx kvinder 25-55" />
            </Field>

            <Field label="Tilbud/pris">
              <input value={form.offer} onChange={(e) => update("offer", e.target.value)} placeholder="Fx 499" />
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
          {!loadingCampaigns && campaigns.length === 0 && <p>Du har ingen gemte kampagner endnu.</p>}

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
        <section className="dashResult lightOutput">
          <div className="dashResultTop">
            <div>
              <div className="dashBadge">Færdigt output</div>
              <h2>Dine annoncetekster</h2>
            </div>

            <div className="outputToolbar">
              <button onClick={() => copyText(result)}>{copied ? "Kopieret ✓" : "Kopiér"}</button>
              <button onClick={() => saveCampaign(result)}>Gem igen</button>
              <button className="dangerLight" onClick={() => setResult("")}>Ryd</button>
            </div>
          </div>

          <div className="prettyOutput">
            {result.split("\n").map((line, index) => {
              const clean = line.trim();
              if (!clean) return <br key={index} />;
              if (clean.includes("━━━━") || clean.includes("────")) return <hr key={index} />;
              if (clean === clean.toUpperCase() && clean.length > 4) return <h3 key={index}>{clean}</h3>;
              if (clean.endsWith(":")) return <h4 key={index}>{clean}</h4>;
              return <p key={index}>{clean}</p>;
            })}
          </div>
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
