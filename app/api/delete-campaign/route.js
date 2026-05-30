import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, email } = body;

    if (!id || !email) {
      return Response.json({ success: false }, { status: 400 });
    }

    const { error } = await supabase
      .from("campaigns")
      .delete()
      .eq("id", id)
      .eq("customer_email", email);

    if (error) {
      return Response.json({ success: false }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}
