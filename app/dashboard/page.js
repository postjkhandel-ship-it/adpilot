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

  function getIndustryAngle(industry, product, audience, business, location) {
    const text = `${industry} ${product}`.toLowerCase();

    if (text.includes("solfilm") || text.includes("bil") || text.includes("klargøring")) {
      return {
        cta: "Book tid",
        pain: "Bilen bliver varm, mangler privatliv og ser ikke så skarp ud som den kunne.",
        benefit: "mere privatliv, mindre varme, mindre genskin og et markant mere eksklusivt look",
        proof: "professionel montering, pæne kanter og et resultat der ser fabriksmonteret ud",
        hook1: "Bliver bilen alt for varm i solen?",
        hook2: "Giv bilen et mere eksklusivt look.",
        local: `Professionel hjælp i ${location}`,
      };
    }

    if (text.includes("frisør") || text.includes("beauty") || text.includes("klinik") || text.includes("behandling")) {
      return {
        cta: "Book tid",
        pain: "Mange udskyder behandlingen, fordi de ikke ved hvem de kan stole på.",
        benefit: "en tryg behandling, et flottere resultat og en mere professionel oplevelse",
        proof: "faglighed, personlig vejledning og fokus på resultater",
        hook1: "Klar til at føle dig mere selvsikker?",
        hook2: "Book en behandling der giver synligt resultat.",
        local: `Book tid i ${location}`,
      };
    }

    if (text.includes("håndværk") || text.includes("tømrer") || text.includes("vvs") || text.includes("elektriker") || text.includes("murer")) {
      return {
        cta: "Få tilbud",
        pain: "Det kan være svært at finde en fagmand der svarer hurtigt, møder op og leverer ordentligt arbejde.",
        benefit: "en professionel løsning, tydelig aftale og et resultat der holder",
        proof: "erfaring, kvalitet og en proces hvor kunden ved hvad der sker",
        hook1: "Mangler du en fagmand du kan regne med?",
        hook2: "Få løst opgaven professionelt fra start.",
        local: `Få tilbud i ${location}`,
      };
    }

    if (text.includes("restaurant") || text.includes("café") || text.includes("mad")) {
      return {
        cta: "Bestil nu",
        pain: "Når folk skal vælge hvor de vil spise, skal oplevelsen se lækker, nem og værd at prøve ud.",
        benefit: "en bedre madoplevelse, god stemning og noget der er nemt at vælge",
        proof: "friske råvarer, god service og en oplevelse kunder får lyst til at komme tilbage til",
        hook1: "Leder du efter noget lækkert i dag?",
        hook2: "Det her sted skal du prøve.",
        local: `Besøg os i ${location}`,
      };
    }

    if (text.includes("webshop") || text.includes("shop") || text.includes("ecommerce")) {
      return {
        cta: "Shop nu",
        pain: "Kunder køber ikke bare et produkt — de køber en løsning på et problem.",
        benefit: "en nemmere hverdag, bedre resultat og en løsning der er let at komme i gang med",
        proof: "tydeligt tilbud, tryg betaling og et produkt der giver mening for målgruppen",
        hook1: "Stop med at nøjes med en dårlig løsning.",
        hook2: "Derfor vælger flere dette produkt.",
        local: "Bestil online i dag",
      };
    }

    if (text.includes("bureau") || text.includes("marketing") || text.includes("hjemmeside") || text.includes("ads")) {
      return {
        cta: "Få tilbud",
        pain: "Mange virksomheder mister kunder, fordi deres online tilstedeværelse ikke sælger godt nok.",
        benefit: "flere henvendelser, bedre synlighed og et mere professionelt udtryk",
        proof: "strategi, tydelig kommunikation og løsninger bygget til at skabe handling",
        hook1: "Får din virksomhed nok ud af online markedsføring?",
        hook2: "Gør din virksomhed mere professionel online.",
        local: `Få hjælp i ${location}`,
      };
    }

    return {
      cta: form.goal === "Leads" ? "Få tilbud" : form.goal === "Bookinger" ? "Book nu" : "Læs mere",
      pain: `Mange ${audience} venter for længe, fordi de tror det er besværligt, dyrt eller tidskrævende.`,
      benefit: "en nemmere proces, et bedre resultat og en løsning der føles professionel fra start",
      proof: "tydelig kommunikation, professionel udførelse og fokus på kundens resultat",
      hook1: `Har du brug for en bedre løsning til ${product}?`,
      hook2: `Gør det nemt at komme i gang med ${product}.`,
      local: `Professionel løsning i ${location}`,
    };
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
    const budget = Number(form.budget) || 150;
    const business = form.business || "Virksomheden";
    const industry = form.industry || "Branche";
    const product = form.product || "produktet/servicen";
    const audience = form.audience || "målgruppen";
    const offer = form.offer ? `Fra ${form.offer} kr.` : "Aktuelt tilbud.";
    const location = form.location || "Danmark";
    const angle = getIndustryAngle(industry, product, audience, business, location);
    const cta = angle.cta;

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
${angle.hook1}

Primær tekst:
${angle.pain}

Med ${product} fra ${business} får du ${angle.benefit}.

${business} hjælper ${audience} med en løsning, der er nem at forstå, nem at vælge og nem at komme i gang med.

${offer}

Headline:
${product} hos ${business}

Beskrivelse:
${angle.local}

CTA:
${cta}

━━━━━━━━━━━━━━━━━━━━

ANNONCE 2 — LOOK / RESULTAT / ØNSKE

Hook:
${angle.hook2}

Primær tekst:
Hvis du overvejer ${product}, handler det ikke kun om selve løsningen — det handler om resultatet bagefter.

Hos ${business} får ${audience} ${angle.benefit}.

Det er en enkel måde at få et mere professionelt resultat uden at gøre processen besværlig.

${offer}

Headline:
Få et resultat du bliver glad for

Beskrivelse:
Professionel hjælp fra start til slut.

CTA:
${cta}

━━━━━━━━━━━━━━━━━━━━

ANNONCE 3 — TRUST

Hook:
Vælg en løsning der føles tryg fra start.

Primær tekst:
Når du vælger ${product}, vil du gerne være sikker på, at det bliver gjort ordentligt.

Derfor fokuserer ${business} på ${angle.proof}.

Det betyder, at du får en løsning der både ser professionel ud og føles rigtig at vælge.

${offer}

Headline:
Trygt valg for ${audience}

Beskrivelse:
Kvalitet, service og tydelig proces.

CTA:
${cta}

━━━━━━━━━━━━━━━━━━━━

ANNONCE 4 — RETARGETING

Hook:
Du kiggede — men nåede ikke videre.

Primær tekst:
Du har allerede vist interesse for ${product}.

Hvis du stadig overvejer det, er nu et godt tidspunkt at tage næste skridt.

${business} gør det nemt for ${audience} at komme i gang.

${offer}

Headline:
Stadig interesseret?

Beskrivelse:
Tag næste skridt i dag.

CTA:
${cta}
`;

    const hooks = `
20 HOOKS FOR ${business.toUpperCase()}

1. ${angle.hook1}
2. ${angle.hook2}
3. Stop med at udskyde det.
4. Få et mere professionelt resultat uden besvær.
5. Derfor vælger flere ${business}.
6. En nemmere løsning til ${audience}.
7. Gør det nemt at komme i gang.
8. Usikker på hvor du skal starte?
9. Det her gør forskellen tydelig.
10. Klar til et bedre resultat?
11. Få ${product} gjort ordentligt.
12. Professionel hjælp fra start til slut.
13. Se hvorfor ${audience} vælger ${business}.
14. Det behøver ikke være kompliceret.
15. Få mere ud af ${product}.
16. En løsning der både er enkel og professionel.
17. Tag næste skridt i dag.
18. Leder du efter ${product} i ${location}?
19. Få et resultat der ser rigtigt ud.
20. Start med en løsning du kan stole på.
`;

    const googleAds = `
GOOGLE ADS FOR ${business.toUpperCase()}

Headlines:
- ${product}
- ${business}
- ${product} ${location}
- Professionel løsning
- ${angle.local}
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

Descriptions:
- Få ${product} hos ${business}. Professionel løsning til ${audience}.
- ${offer} Kom nemt i gang i dag.
- Få en tryg proces, tydelig kommunikation og et professionelt resultat.
- Leder du efter ${product} i ${location}? Kontakt ${business} i dag.

Sitelinks:
1. Se priser
2. Kontakt os
3. Sådan virker det
4. Kundeanmeldelser
`;

    const retargeting = `
RETARGETING FOR ${business.toUpperCase()}

Målgrupper:
- Website besøgende 30 dage
- Klik på annoncer 30 dage
- Facebook/Instagram engagement
- Formularstart / add to cart hvis relevant

Annonce:
Du har allerede vist interesse for ${product}.

Hvis du stadig overvejer det, kan ${business} hjælpe dig videre med en professionel løsning.

${offer}

CTA:
${cta}
`;

    const ugc = `
UGC SCRIPTS FOR ${business.toUpperCase()}

SCRIPT 1:
"Jeg havde overvejet ${product}, men fik det aldrig gjort. Det viste sig at være meget nemmere end jeg troede. ${business} gjorde processen enkel og professionel."

CTA:
"${cta}"

SCRIPT 2:
"Det jeg bedst kunne lide var, at det hele var tydeligt fra start. Ingen besvær — bare en løsning der gav mening."

CTA:
"${cta}"

SCRIPT 3:
"Hvis du også har udskudt ${product}, så er det her dit tegn. ${business} gør det nemt at komme i gang."

CTA:
"${cta}"
`;

    let output = "";

    if (form.outputType === "Kun Meta Ads") output = metaAds;
    if (form.outputType === "Kun Google Ads") output = googleAds;
    if (form.outputType === "Kun Hooks") output = hooks;
    if (form.outputType === "Retargeting") output = retargeting;
    if (form.outputType === "UGC scripts") output = ugc;

    if (form.outputType === "Komplet kampagne") {
      output = `
KOMPLET KAMPAGNE FOR ${business.toUpperCase()}

${metaAds}

${hooks}

${googleAds}

${retargeting}

${ugc}

KAMPAGNESTRUKTUR:

Cold:
- Broad målgruppe
- 4-6 creatives
- Budget: ${Math.round(budget * 0.7)} kr/dag

Retargeting:
- Website besøgende og engagement
- Budget: ${Math.round(budget * 0.3)} kr/dag

Testplan:
Dag 1-3: Test 4-6 creatives.
Dag 4-7: Sluk svage annoncer.
Efter 7 dage: Skaler vinderen 20-30%.
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
        <p>Branche-smart output til Meta Ads, Google Ads, hooks, retargeting og UGC scripts.</p>
      </section>

      <section className="dashLayout">
        <div className="dashCard">
          <h2>Kampagnebrief</h2>
          <p>Jo mere præcist du udfylder felterne, jo stærkere bliver outputtet.</p>

          <div className="dashFormGrid">
            <Field label="Virksomhedsnavn"><input value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="Fx JJ Solfilm" /></Field>
            <Field label="Branche"><input value={form.industry} onChange={(e) => update("industry", e.target.value)} placeholder="Fx solfilm, klinik, webshop" /></Field>
            <Field label="Produkt/service"><input value={form.product} onChange={(e) => update("product", e.target.value)} placeholder="Fx tonede ruder til biler" /></Field>
            <Field label="Målgruppe"><input value={form.audience} onChange={(e) => update("audience", e.target.value)} placeholder="Fx bilejere, lokale kunder, virksomheder" /></Field>
            <Field label="Tilbud/pris"><input value={form.offer} onChange={(e) => update("offer", e.target.value)} placeholder="Fx 1800" /></Field>
            <Field label="Budget pr dag"><input value={form.budget} onChange={(e) => update("budget", e.target.value)} placeholder="Fx 150" /></Field>
            <Field label="Lokation"><input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="Fx Kalundborg" /></Field>

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
              if (line.includes("━━━━━━━━") || line.includes("────")) return <hr key={index} />;
              if (line === line.toUpperCase() && line.trim().length > 4) return <h3 key={index}>{line}</h3>;
              if (line.trim().endsWith(":")) return <h4 key={index}>{line}</h4>;
              if (!line.trim()) return <br key={index} />;
              return <p key={index}>{line}</p>;
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
