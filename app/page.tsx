export default function Page() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "1.75rem", fontWeight: 600, margin: 0 }}>Avenue</h1>
      <p style={{ color: "#666", margin: 0 }}>Meta Pixel is installed and tracking page views.</p>
    </main>
  )
}
