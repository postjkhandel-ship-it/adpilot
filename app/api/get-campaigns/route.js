import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ success: false }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("campaigns")
      .select("*")
      .eq("customer_email", email)
      .order("created_at", { ascending: false });

    if (error) {
      return Response.json({ success: false }, { status: 500 });
    }

    return Response.json({
      success: true,
      campaigns: data,
    });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}
