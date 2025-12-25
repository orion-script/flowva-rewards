export default function FeaturedCard() {
  return (
    <div
      style={{
        borderRadius: 20,
        padding: 24,
        background: "linear-gradient(135deg, #7c3aed, #60a5fa)",
        color: "#fff",
      }}
    >
      <span
        style={{
          background: "rgba(255,255,255,0.2)",
          padding: "4px 10px",
          borderRadius: 999,
          fontSize: 12,
        }}
      >
        Featured
      </span>

      <h2 style={{ marginTop: 16 }}>Top Tool Spotlight</h2>
      <p>Reclaim</p>

      <p style={{ opacity: 0.9 }}>
        Automate and optimize your schedule with AI.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <button>Sign up</button>
        <button>Claim 50 pts</button>
      </div>
    </div>
  );
}
