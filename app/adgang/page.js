"use client";

import { useState } from "react";

export default function Adgang() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  async function createCode() {
    setLoading(true);

    try {
      const res = await fetch("/api/create-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setCode(data.code);
      } else {
        alert("Kunne ikke oprette adgangskode");
      }
    } catch {
      alert("Der skete en fejl");
    }

    setLoading(false);
  }

  return (
    <main className="accessSuccessPage">
      <div className="accessSuccessBox">
        <div className="dashBadge">AdPilot Pro aktiveret</div>

        <h1>Opret din adgangskode</h1>

        <p>
          Indtast den email du brugte ved betaling. Så opretter vi din
          personlige AdPilot-kode.
        </p>

        {!code && (
          <>
            <input
              className="accessEmailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Din email"
              type="email"
            />

            <button className="accessCreateBtn" onClick={createCode}>
              {loading ? "Opretter..." : "Opret adgangskode"}
            </button>
          </>
        )}

        {code && (
          <>
            <p>Din personlige adgangskode:</p>

            <div className="codeBox">{code}</div>

            <div className="buttons center">
              <a href="/dashboard" className="btn primary">
                Åbn dashboard
              </a>

              <a href="/" className="btn secondary">
                Til forsiden
              </a>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
