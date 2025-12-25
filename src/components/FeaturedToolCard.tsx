export default function FeaturedToolCard() {
  return (
    <div
      style={{
        borderRadius: 24,
        overflow: "hidden",
        background: "#ffffff",
        border: "1px solid #ede9fe",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: 24,
          background: "linear-gradient(135deg, #7c3aed, #60a5fa)",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <span
            style={{
              background: "rgba(255,255,255,0.25)",
              padding: "6px 14px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            Featured
          </span>

          <h2 style={{ marginTop: 16, marginBottom: 8 }}>Top Tool Spotlight</h2>

          <strong style={{ fontSize: 18 }}>Reclaim</strong>
        </div>

        {/* Right avatar / graphic */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
          }}
        >
          ◼︎ ● ▲
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 24 }}>
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
            marginBottom: 20,
          }}
        >
          <span style={{ fontSize: 22 }}>📅</span>

          <div>
            <strong style={{ fontSize: 16, color: "#000" }}>
              Automate and Optimize Your Schedule
            </strong>
            <p
              style={{
                marginTop: 6,
                color: "#6b7280",
                lineHeight: 1.6,
                fontSize: 14,
              }}
            >
              Reclaim.ai is an AI-powered calendar assistant that automatically
              schedules your tasks, meetings, and breaks to boost productivity.
              Free to try — earn Flowva Points when you sign up!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: 20,
          borderTop: "1px solid #f1f5f9",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          style={{
            background: "#7c3aed",
            color: "#ffffff",
            borderRadius: 999,
            padding: "12px 22px",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          👤 Sign up
        </button>

        <button
          style={{
            background: "#f472b6",
            color: "#ffffff",
            borderRadius: 999,
            padding: "12px 22px",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          🎁 Claim 50 pts
        </button>
      </div>
    </div>
  );
}
