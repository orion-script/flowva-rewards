export default function ReferAndEarn() {
  const referralLink = "https://app.flowvahub.com/signup/?ref=john4202";

  return (
    <>
      {/* Section title */}
      <h3
        style={{
          marginTop: 40,
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            width: 4,
            height: 24,
            background: "#7c3aed",
            borderRadius: 4,
            display: "inline-block",
          }}
        />
        Refer & Earn
      </h3>

      <div
        style={{
          background: "#ffffff",
          borderRadius: 20,
          border: "1px solid #e5e7eb",
          overflow: "hidden",
        }}
      >
        {/* Top banner */}
        <div
          style={{
            background: "#f3f6ff",
            padding: 20,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 22, color: "#7c3aed" }}>👥</span>
          <div>
            <strong style={{ fontSize: 16 }}>Share Your Link</strong>
            <p style={{ margin: 0, color: "#6b7280" }}>
              Invite friends and earn 25 points when they join!
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "28px 20px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#7c3aed",
              }}
            >
              0
            </div>
            <span style={{ color: "#6b7280" }}>Referrals</span>
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#7c3aed",
              }}
            >
              0
            </div>
            <span style={{ color: "#6b7280" }}>Points Earned</span>
          </div>
        </div>

        {/* Referral link */}
        <div
          style={{
            background: "#faf7ff",
            padding: 20,
          }}
        >
          <label
            style={{
              display: "block",
              fontSize: 14,
              color: "#374151",
              marginBottom: 8,
            }}
          >
            Your personal referral link:
          </label>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <input
              readOnly
              value={referralLink}
              style={{
                flex: 1,
                padding: 14,
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                fontSize: 14,
              }}
            />

            <button
              onClick={() => navigator.clipboard.writeText(referralLink)}
              style={{
                background: "#ede9fe",
                border: "none",
                borderRadius: 10,
                padding: 12,
                cursor: "pointer",
                fontSize: 18,
                color: "#7c3aed",
              }}
            >
              📋
            </button>
          </div>
        </div>

        {/* Social icons */}
        <div
          style={{
            padding: 20,
            display: "flex",
            justifyContent: "center",
            gap: 16,
          }}
        >
          {["f", "x", "in", "wa"].map((icon, i) => (
            <div
              key={i}
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background:
                  icon === "f"
                    ? "#1877F2"
                    : icon === "x"
                    ? "#000000"
                    : icon === "in"
                    ? "#0A66C2"
                    : "#25D366",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {icon.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
