import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const { email, businessName, campaignText } = await req.json();

    if (!email || !campaignText) {
      return Response.json({ success: false }, { status: 400 });
    }

    const { error } = await supabase.from("campaigns").insert({
      customer_email: email,
      business_name: businessName || "Kampagne",
      campaign_text: campaignText,
    });

    if (error) {
      return Response.json({ success: false }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}
