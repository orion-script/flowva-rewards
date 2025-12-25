type TabKey = "all" | "unlocked" | "locked" | "coming_soon";

type Props = {
  active: TabKey;
  onChange: (value: TabKey) => void;
  counts?: Record<TabKey, number>;
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "all", label: "All Rewards" },
  { key: "unlocked", label: "Unlocked" },
  { key: "locked", label: "Locked" },
  { key: "coming_soon", label: "Coming Soon" },
];

export default function Tabs({
  active,
  onChange,
  counts = {
    all: 0,
    unlocked: 0,
    locked: 0,
    coming_soon: 0,
  },
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        marginBottom: 24,
      }}
    >
      {tabs.map(({ key, label }) => {
        const isActive = active === key;

        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 16px",
              borderRadius: 14,
              border: "none",
              background: isActive ? "#f3e8ff" : "#f8fafc",
              color: isActive ? "#7c3aed" : "#6b7280",
              fontWeight: isActive ? 600 : 500,
              cursor: "pointer",
            }}
          >
            {label}

            {/* Count badge */}
            <span
              style={{
                minWidth: 22,
                height: 22,
                borderRadius: 999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 600,
                background: isActive ? "#ede9fe" : "#e5e7eb",
                color: isActive ? "#7c3aed" : "#6b7280",
              }}
            >
              {counts[key]}
            </span>

            {/* Bottom active indicator */}
            {isActive && (
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -6,
                  height: 3,
                  borderRadius: 999,
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
