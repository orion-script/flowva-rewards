export default function EarnMorePoints() {
  return (
    <>
      <h3 style={{ marginTop: 40, marginBottom: 16, color: "#000" }}>
        Earn More Points
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 24,
        }}
      >
        {/* Refer & Win Card */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 20,
            border: "1px solid #e5e7eb",
            padding: 24,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#f3e8ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                color: "#7c3aed",
              }}
            >
              ⭐
            </div>

            <strong style={{ fontSize: 18, color: "#000" }}>
              Refer and win 10,000 points!
            </strong>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: "#f1f5f9",
              marginBottom: 16,
            }}
          />

          {/* Description */}
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "#374151",
            }}
          >
            Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners
            of{" "}
            <span style={{ color: "#7c3aed", fontWeight: 600 }}>
              10,000 points
            </span>
            . Friends must complete onboarding to qualify.
          </p>
        </div>

        {/* Share Your Stack Card */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 20,
            border: "1px solid #e5e7eb",
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Header */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 6,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "#f3e8ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  color: "#7c3aed",
                }}
              >
                🔗
              </div>

              <strong style={{ fontSize: 18, color: "#000" }}>
                Share Your Stack
              </strong>
            </div>

            <span style={{ color: "#7c3aed", fontWeight: 600 }}>
              Earn +25 pts
            </span>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 24,
            }}
          >
            <span style={{ color: "#374151", fontSize: 15 }}>
              Share your tool stack
            </span>

            <button
              style={{
                background: "#f3f6ff",
                color: "#7c3aed",
                borderRadius: 999,
                padding: "10px 18px",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              🔗 Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
