type Props = {
  active: "earn" | "redeem";
  onChange: (v: "earn" | "redeem") => void;
};

export default function RewardsTopTabs({ active, onChange }: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        marginBottom: 32,
      }}
    >
      {(["earn", "redeem"] as const).map((tab) => {
        const isActive = active === tab;

        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            style={{
              padding: "10px 18px",
              //   borderRadius: 12,
              border: "none",
              background: isActive ? "#f3e8ff" : "transparent",
              color: isActive ? "#7c3aed" : "#6b7280",
              fontWeight: isActive ? 600 : 500,
              position: "relative",
            }}
          >
            {tab === "earn" ? "Earn Points" : "Redeem Rewards"}

            {/* Bottom accent */}
            {isActive && (
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -4,
                  height: 3,
                  //   borderRadius: 5,
                  background: "#7c3aed",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
