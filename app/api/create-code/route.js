import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function makeCode() {
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ADP-${random}-PRO`;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const email = body.email;

    if (!email) {
      return Response.json({ success: false }, { status: 400 });
    }

    const existing = await supabase
      .from("access_codes")
      .select("code")
      .eq("customer_email", email)
      .eq("status", "active")
      .single();

    if (existing.data?.code) {
      return Response.json({
        success: true,
        code: existing.data.code,
      });
    }

    const code = makeCode();

    await supabase.from("access_codes").insert({
      code,
      customer_email: email,
      status: "active",
    });

    return Response.json({
      success: true,
      code,
    });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}
