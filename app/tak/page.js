export default function TakPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        background: "#f8fafc"
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          background: "#fff",
          padding: "50px",
          borderRadius: "24px",
          boxShadow: "0 20px 60px rgba(15,23,42,.08)",
          textAlign: "center"
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "#22c55e",
            color: "#fff",
            fontSize: "40px",
            margin: "0 auto 25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          ✓
        </div>

        <h1 style={{ marginBottom: "20px" }}>
          Tak for din henvendelse!
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#64748b",
            lineHeight: "1.7",
            marginBottom: "30px"
          }}
        >
          Vi har modtaget din forespørgsel om en gratis AdPilot-demo.
          <br />
          Vi vender tilbage hurtigst muligt med et eksempel tilpasset din virksomhed.
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            background: "#2563eb",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "700"
          }}
        >
          Tilbage til forsiden
        </a>
      </div>
    </main>
  );
}
