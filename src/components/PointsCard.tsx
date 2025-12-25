type Props = {
  points: number;
};

export default function PointsCard({ points }: Props) {
  const max = 5000;
  const percent = Math.min((points / max) * 100, 100);

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid #ede9fe",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#f3f6ff",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ fontSize: 18 }}>🏅</span>
        <strong style={{ fontSize: 16, color: "#000" }}>Points Balance</strong>
      </div>

      {/* Body */}
      <div style={{ padding: 20 }}>
        {/* Points + Coin */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#7c3aed",
            }}
          >
            {points}
          </div>

          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#fde68a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
            }}
          >
            ⭐
          </div>
        </div>

        {/* Progress label */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            marginBottom: 8,
            color: "#374151",
          }}
        >
          <span>Progress to $5 Gift Card</span>
          <strong>
            {points}/{max}
          </strong>
        </div>

        {/* Progress bar */}
        <div
          style={{
            height: 10,
            background: "#e5e7eb",
            borderRadius: 999,
            overflow: "hidden",
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              background: "#7c3aed",
            }}
          />
        </div>

        {/* Helper text */}
        <p
          style={{
            fontSize: 14,
            color: "#6b7280",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          🚀 Just getting started — keep earning points!
        </p>
      </div>
    </div>
  );
}
