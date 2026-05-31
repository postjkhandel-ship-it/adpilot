```jsx
"use client";

import { useState } from "react";

export default function Dashboard() {
  const stripeLink =
    "https://buy.stripe.com/fZudR1dNoabSaCEeTbebu00";

  const [accessCode, setAccessCode] = useState("");
  const [hasAccess, setHasAccess] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");
  const [checking, setChecking] = useState(false);

  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const [campaigns, setCampaigns] = useState([]);
  const [loadingCampaigns, setLoadingCampaigns] =
    useState(false);

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
    angle: "Problem/løsning",
  });

  function update(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
  }

  function getCTA(goal) {
    if (goal === "Leads") return "Få tilbud";
    if (goal === "Bookinger") return "Book tid";
    if (goal === "Trafik") return "Læs mere";

    return "Kom i gang";
  }

  function angleFocus() {
    if (form.angle === "UGC style") {
      return "Skriv naturligt, personligt og som om en kunde eller ejer taler direkte til kameraet.";
    }

    if (form.angle === "Trust") {
      return "Fokusér på tryghed, kvalitet, proces, erfaring og hvorfor kunden kan stole på virksomheden.";
    }

    if (form.angle === "Direkte salg") {
      return "Gør teksten kort, konkret og handlingsorienteret med tydelig CTA.";
    }

    if (form.angle === "Tilbud") {
      return "Fremhæv tilbud, pris, urgency og hvorfor kunden bør handle nu.";
    }

    if (form.angle === "Retargeting") {
      return "Fokusér på kunder der allerede har vist interesse, men ikke har taget næste skridt.";
    }

    return "Start med kundens problem, vis konsekvensen og præsenter løsningen tydeligt.";
  }

  function createAdStrategy() {
    const business =
      form.business || "virksomheden";

    const industry =
      form.industry || "branchen";

    const product =
      form.product || "produkt/service";

    const audience =
      form.audience || "målgruppen";

    const location =
      form.location || "Danmark";

    const offer = form.offer
      ? `Fra ${form.offer} kr.`
      : "Aktuelt tilbud.";

    const budget =
      Number(form.budget) || 150;

    const cta = getCTA(form.goal);

    const focus = angleFocus();

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
Valgt annoncevinkel: ${form.angle}

Anbefalet fokus:
${focus}
`;
```
```jsx
    const fullMetaAds = `
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
Få hjælp til ${product} i ${location}

CTA:
${cta}

━━━━━━━━━━━━━━━━━━━━

ANNONCE 2 — UGC STYLE

Hook:
"Jeg skulle bare have gjort det her noget før."

Primær tekst:
Hvis du har overvejet ${product}, men ikke har fået gjort noget ved det endnu, så er det her dit tegn.

${business} gør det nemt for ${audience} at komme i gang med en løsning, der føles tryg, enkel og professionel fra start.

${offer}

Headline:
Derfor vælger flere ${business}

Beskrivelse:
En enkel vej til et bedre resultat.

CTA:
${cta}

━━━━━━━━━━━━━━━━━━━━

ANNONCE 3 — TRUST

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
```
```jsx id="x7m2kp"
    const retargeting = `
RETARGETING FOR ${business.toUpperCase()}

Målgrupper:
- Website besøgende sidste 30 dage
- Klik på annoncer sidste 30 dage
- Facebook/Instagram engagement
- Formularstart hvis relevant

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
`;

    return {
      business,
      hooks,
      metaAds: metaAds + fullMetaAds,
      googleAds,
      retargeting,
      ugc,
    };
  }

  async function copyText(text) {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  function generateCampaign() {
    const strategy = createAdStrategy();

    let output = "";

    if (form.outputType === "Kun Meta Ads") {
      output = strategy.metaAds;
    }

    if (form.outputType === "Kun Google Ads") {
      output = strategy.googleAds;
    }

    if (form.outputType === "Kun Hooks") {
      output = strategy.hooks;
    }

    if (form.outputType === "Retargeting") {
      output = strategy.retargeting;
    }

    if (form.outputType === "UGC scripts") {
      output = strategy.ugc;
    }

    if (form.outputType === "Komplet kampagne") {
      output = `
KOMPLET KAMPAGNE FOR ${strategy.business.toUpperCase()}

${strategy.metaAds}

${strategy.hooks}

${strategy.googleAds}

${strategy.retargeting}

${strategy.ugc}
`;
    }

    setResult(output);
  }

  return (
    <main className="dashPage">
      <section className="dashHero">
        <div className="dashBadge">
          AI Campaign Generator
        </div>

        <h1>
          Generer professionelle annoncetekster
        </h1>

        <p>
          Universelt output til alle brancher —
          baseret på virksomhed, produkt,
          målgruppe, annoncevinkel og tilbud.
        </p>
      </section>

      <section className="dashLayout">
        <div className="dashCard">
          <h2>Kampagnebrief</h2>

          <div className="dashFormGrid">

            <Field label="Virksomhedsnavn">
              <input
                value={form.business}
                onChange={(e) =>
                  update("business", e.target.value)
                }
                placeholder="Fx Klinik Nord"
              />
            </Field>

            <Field label="Branche">
              <input
                value={form.industry}
                onChange={(e) =>
                  update("industry", e.target.value)
                }
              />
            </Field>

            <Field label="Produkt/service">
              <input
                value={form.product}
                onChange={(e) =>
                  update("product", e.target.value)
                }
              />
            </Field>

            <Field label="Målgruppe">
              <input
                value={form.audience}
                onChange={(e) =>
                  update("audience", e.target.value)
                }
              />
            </Field>

            <Field label="Tilbud/pris">
              <input
                value={form.offer}
                onChange={(e) =>
                  update("offer", e.target.value)
                }
              />
            </Field>

            <Field label="Lokation">
              <input
                value={form.location}
                onChange={(e) =>
                  update("location", e.target.value)
                }
              />
            </Field>

            <Field label="Målsætning">
              <select
                value={form.goal}
                onChange={(e) =>
                  update("goal", e.target.value)
                }
              >
                <option>Salg</option>
                <option>Leads</option>
                <option>Bookinger</option>
                <option>Trafik</option>
              </select>
            </Field>

            <Field label="Output type">
              <select
                value={form.outputType}
                onChange={(e) =>
                  update(
                    "outputType",
                    e.target.value
                  )
                }
              >
                <option>Komplet kampagne</option>
                <option>Kun Meta Ads</option>
                <option>Kun Google Ads</option>
                <option>Kun Hooks</option>
                <option>Retargeting</option>
                <option>UGC scripts</option>
              </select>
            </Field>

            <Field label="Annoncevinkel">
              <select
                value={form.angle}
                onChange={(e) =>
                  update("angle", e.target.value)
                }
              >
                <option>
                  Problem/løsning
                </option>
                <option>UGC style</option>
                <option>Trust</option>
                <option>
                  Direkte salg
                </option>
                <option>Tilbud</option>
                <option>
                  Retargeting
                </option>
              </select>
            </Field>
          </div>

          <button
            className="dashGenerate"
            onClick={generateCampaign}
          >
            Generer kampagne
          </button>
        </div>
      </section>

      {result && (
        <section className="dashResult">
          <div className="dashResultTop">
            <h2>Dine annoncetekster</h2>

            <button
              onClick={() => copyText(result)}
            >
              {copied
                ? "Kopieret ✓"
                : "Kopiér"}
            </button>
          </div>

          <div className="prettyOutput">
            {result
              .split("\n")
              .map((line, index) => {
                const clean =
                  line.trim();

                if (!clean)
                  return (
                    <br key={index} />
                  );

                if (
                  clean.includes("━━")
                ) {
                  return (
                    <hr key={index} />
                  );
                }

                if (
                  clean ===
                    clean.toUpperCase() &&
                  clean.length > 4
                ) {
                  return (
                    <h3 key={index}>
                      {clean}
                    </h3>
                  );
                }

                if (
                  clean.endsWith(":")
                ) {
                  return (
                    <h4 key={index}>
                      {clean}
                    </h4>
                  );
                }

                return (
                  <p key={index}>
                    {clean}
                  </p>
                );
              })}
          </div>
        </section>
      )}
    </main>
  );
}

function Field({
  label,
  children,
}) {
  return (
    <label className="dashField">
      <span>{label}</span>
      {children}
    </label>
  );
}
```
