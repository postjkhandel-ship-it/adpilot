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
    setForm({ ...form, [field]: value });
  }

  function generateCampaign() {
    const priceText = form.offer
      ? `Lige nu: ${form.offer} kr.`
      : "Særligt tilbud i en begrænset periode.";

    const campaign = `
KAMPAGNESTRUKTUR

Kampagnenavn:
${form.business} - ${form.product} - ${form.goal}

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
${priceText}

ANBEFALET META STRUKTUR

1. Cold kampagne
- Broad målgruppe
- 3-5 forskellige creatives
- Fokus på problem, løsning og resultat
- Budget: 70%

2. Retargeting kampagne
- Besøgende sidste 30 dage
- Add to cart sidste 14 dage
- Engagerede på Facebook/Instagram
- Budget: 30%

3. Test creatives
- UGC video
- Før/efter statics
- Produktbillede med pris
- Kundeanmeldelse
- Problem/løsning annonce

META ADS TEKSTER

ANNONCE 1 - PROBLEM/LØSNING

Primær tekst:
Kender du følelsen af, at almindelig tandbørstning ikke renser helt nok?

Med ${form.product} får ${form.audience} en nem måde at rense mellem tænderne på derhjemme — hurtigt, behageligt og uden besvær.

${priceText}

Headline:
Renere tænder på få minutter

Beskrivelse:
Nem tandpleje derhjemme.

CTA:
Shop nu

ANNONCE 2 - DIREKTE SALG

Primær tekst:
Gør din daglige tandpleje nemmere med ${form.product}.

Perfekt til dig, der vil have en friskere følelse, bedre mundhygiejne og en mere effektiv rutine end almindelig tandtråd.

${priceText}

Headline:
Opgrader din tandpleje i dag

Beskrivelse:
Få en friskere følelse hver dag.

CTA:
Køb nu

ANNONCE 3 - UGC STYLE

Hook:
"Jeg troede tandtråd var nok — indtil jeg prøvede den her."

Primær tekst:
Mange glemmer, hvor svært det faktisk er at rense ordentligt mellem tænderne.

${form.product} gør det nemt at få en renere og friskere følelse på få minutter.

${priceText}

Headline:
Derfor skifter flere til waterflosser

Beskrivelse:
Let, hurtig og effektiv tandpleje.

CTA:
Shop nu

ANNONCE 4 - RETARGETING

Primær tekst:
Du har allerede vist interesse for ${form.product}.

Hvis du vil gøre din tandpleje nemmere og få en friskere følelse i hverdagen, er det her et godt tidspunkt at prøve den.

${priceText}

Headline:
Stadig interesseret?

Beskrivelse:
Bestil i dag og kom i gang.

CTA:
Køb nu

ANNONCE 5 - TRUST/SOCIAL PROOF

Primær tekst:
Flere vælger ${form.business}, fordi de ønsker en nemmere og mere effektiv måde at passe på deres tænder.

Med ${form.product} får du en simpel løsning til daglig brug.

${priceText}

Headline:
Elsket af kunder

Beskrivelse:
Gør tandpleje nemmere.

CTA:
Shop nu

HOOKS

1. Almindelig tandtråd er ikke altid nok
2. Få en friskere følelse på få minutter
3. Rens nemt mellem tænderne derhjemme
4. Derfor skifter flere til waterflosser
5. Gør tandpleje nemmere hver dag
6. Stadig madrester mellem tænderne?
7. En smartere måde at bruge tandtråd på
8. Tandpleje behøver ikke være besværligt

HEADLINES

1. Renere tænder på få minutter
2. Opgrader din tandpleje
3. Prøv waterflosser i dag
4. Friskere følelse hver dag
5. Effektiv tandpleje derhjemme
6. Nem rens mellem tænderne
7. Shop ${form.product} i dag
8. Tandpleje gjort nemt

CREATIVE IDÉER

1. iPhone UGC video:
Person står ved badeværelsesspejl og siger:
"Jeg hadede almindelig tandtråd — den her gør det meget nemmere."

2. Før/efter static:
Venstre: "Tandtråd hver dag?"
Højre: "Waterflosser på få minutter"

3. Produktbillede med pris:
Stort produktbillede + teksten:
"Kun ${form.offer || "299"} kr. i dag"

4. Problem/løsning:
Problem: Madrester mellem tænderne
Løsning: ${form.product}

5. Trust creative:
Gule stjerner + kundeudtalelse:
"Virkelig nem at bruge — føles som professionel tandrensning derhjemme."

GOOGLE ADS

Headlines:
- Køb Waterflosser Online
- Renere Tænder Derhjemme
- Waterflosser Tilbud
- Nem Tandpleje Hver Dag
- Effektiv Rens Mellem Tænder
- Startsmiling Waterflosser
- Friskere Mund På Få Minutter
- Tandtråd Er Ikke Nok

Descriptions:
- Gør tandplejen nemmere med en effektiv waterflosser til daglig brug.
- Få en friskere følelse og rens nemt mellem tænderne derhjemme.
- Bestil ${form.product} hos ${form.business} i dag. ${priceText}
- Opgrader din mundhygiejne med en nem og effektiv løsning.

SITELINKS

1. Waterflosser Pro
Beskrivelse: Se tilbud på vores mest populære waterflosser.

2. Kundeanmeldelser
Beskrivelse: Læs hvad kunder siger om ${form.business}.

3. Fri fragt
Beskrivelse: Hurtig levering og nem bestilling.

4. Tilbud
Beskrivelse: Se aktuelle kampagner og rabatter.

RETARGETING STRATEGI

Målgruppe:
- Besøgende sidste 30 dage
- Produktvisninger sidste 14 dage
- Add to cart sidste 7 dage
- Instagram/Facebook engagement sidste 365 dage

Retargeting tekst:
Du kiggede på ${form.product} — men fik ikke bestilt.

Den er stadig på tilbud, og du kan komme i gang med en nemmere tandplejerutine allerede nu.

CTA:
Bestil nu

BUDGETFORDELING

Samlet budget:
${form.budget || "150"} kr/dag

Cold:
Ca. ${Math.round((Number(form.budget) || 150) * 0.7)} kr/dag

Retargeting:
Ca. ${Math.round((Number(form.budget) || 150) * 0.3)} kr/dag

TESTPLAN

Dag 1-3:
Test 3-5 creatives.

Dag 4-7:
Sluk annoncer med høj CPC og lav CTR.

Efter 7 dage:
Skaler vinderen langsomt med 20-30%.

VIGTIGE KPI'ER

God CTR:
Over 1,5%

Acceptabel CPC:
Under 4 kr.

God CPA:
Afhænger af avance, men sigt efter under 100-150 kr.

God ROAS:
Over 2,5x

KONKLUSION

Start med én stærk kampagne for ${form.product}, brug 3-5 creatives og lad Meta finde de bedste købere. Fokusér på problem/løsning, UGC og retargeting.
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
          <p>Udfyld felterne og få en salgsstærk annoncepakke.</p>

          <div className="grid">
            <label>
              Virksomhedsnavn
              <input
                value={form.business}
                onChange={(e) => updateField("business", e.target.value)}
                placeholder="Fx Startsmiling"
              />
            </label>

            <label>
              Branche
              <input
                value={form.industry}
                onChange={(e) => updateField("industry", e.target.value)}
                placeholder="Fx tandpleje produkter"
              />
            </label>

            <label>
              Produkt/service
              <input
                value={form.product}
                onChange={(e) => updateField("product", e.target.value)}
                placeholder="Fx Waterflosser"
              />
            </label>

            <label>
              Målgruppe
              <input
                value={form.audience}
                onChange={(e) => updateField("audience", e.target.value)}
                placeholder="Fx mænd og kvinder"
              />
            </label>

            <label>
              Tilbud/pris
              <input
                value={form.offer}
                onChange={(e) => updateField("offer", e.target.value)}
                placeholder="Fx 299"
              />
            </label>

            <label>
              Budget pr dag
              <input
                value={form.budget}
                onChange={(e) => updateField("budget", e.target.value)}
                placeholder="Fx 150"
              />
            </label>
          </div>

          <label style={{ marginTop: "16px" }}>
            Målsætning
            <select
              value={form.goal}
              onChange={(e) => updateField("goal", e.target.value)}
            >
              <option>Salg</option>
              <option>Leads</option>
              <option>Bookinger</option>
              <option>Trafik</option>
            </select>
          </label>

          <button className="btn" onClick={generateCampaign}>
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
