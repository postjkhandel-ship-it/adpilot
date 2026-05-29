import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const body = await req.json();
    const code = body.code;

    if (!code) {
      return Response.json({ success: false }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("access_codes")
      .select("*")
      .eq("code", code)
      .eq("status", "active")
      .single();

    if (error || !data) {
      return Response.json({ success: false }, { status: 401 });
    }

    return Response.json({
      success: true,
      customer_email: data.customer_email,
    });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}
