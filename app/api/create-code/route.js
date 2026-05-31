import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

function makeCode() {
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ADP-${random}-PRO`;
}

async function sendAccessEmail(email, code) {
  if (!process.env.RESEND_API_KEY) return;

  await resend.emails.send({
    from: "AdPilot <onboarding@resend.dev>",
    to: email,
    subject: "Din AdPilot Pro adgangskode",
    html: `
      <div style="font-family:Arial,sans-serif;background:#f6f8fc;padding:30px;">
        <div style="max-width:600px;margin:0 auto;background:white;border-radius:20px;padding:30px;">
          <h1 style="color:#0f172a;">Velkommen til AdPilot Pro</h1>
          <p style="color:#475569;font-size:16px;line-height:1.6;">
            Tak for dit køb. Her er din personlige adgangskode til AdPilot-dashboardet.
          </p>
          <div style="background:#0f172a;color:white;padding:18px;border-radius:14px;font-size:24px;font-weight:900;text-align:center;letter-spacing:1px;margin:24px 0;">
            ${code}
          </div>
          <a href="https://adpilot.dk/dashboard" style="display:inline-block;background:#2563eb;color:white;padding:14px 20px;border-radius:12px;text-decoration:none;font-weight:900;">
            Åbn AdPilot
          </a>
        </div>
      </div>
    `,
  });
}

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ success: false }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();

    const existing = await supabase
      .from("access_codes")
      .select("code")
      .eq("customer_email", cleanEmail)
      .eq("status", "active")
      .single();

    if (existing.data?.code) {
      await sendAccessEmail(cleanEmail, existing.data.code);

      return Response.json({
        success: true,
        code: existing.data.code,
      });
    }

    const code = makeCode();

    const { error } = await supabase.from("access_codes").insert({
      code,
      customer_email: cleanEmail,
      status: "active",
    });

    if (error) {
      return Response.json({ success: false }, { status: 500 });
    }

    await sendAccessEmail(cleanEmail, code);

    return Response.json({
      success: true,
      code,
    });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}
