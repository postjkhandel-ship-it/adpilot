import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function makeCode() {
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ADP-${random}-PRO`;
}

export default async function Adgang({ searchParams }) {
  const sessionId = searchParams?.session_id;

  let code = null;

  if (sessionId) {
    const existing = await supabase
      .from("access_codes")
      .select("code")
      .eq("stripe_session_id", sessionId)
      .single();

    if (existing.data?.code) {
      code = existing.data.code;
    } else {
      code = makeCode();

      await supabase.from("access_codes").insert({
        code,
        stripe_session_id: sessionId,
        status: "active",
      });
    }
  }

  return (
    <main className="accessSuccessPage">
      <div className="accessSuccessBox">
        <div className="dashBadge">AdPilot Pro aktiveret</div>

        <h1>Din adgang er klar</h1>

        <p>
          Tak for dit køb. Brug din personlige adgangskode herunder til at åbne
          AdPilot-dashboardet.
        </p>

        <div className="codeBox">
          {code || "Ingen betalingssession fundet"}
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
