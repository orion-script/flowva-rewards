import { supabase } from "../lib/supabase";

type Props = {
  profile: any;
  onClaim: () => void;
};

const days = ["M", "T", "W", "T", "F", "S", "S"];

export default function StreakCard({ profile, onClaim }: Props) {
  const today = new Date();
  const todayISO = today.toISOString().split("T")[0];
  const claimedToday = profile.last_claimed_date === todayISO;

  const todayIndex = (today.getDay() + 6) % 7;

  const claim = async () => {
    if (claimedToday) return;

    await supabase
      .from("profiles")
      .update({
        points_balance: profile.points_balance + 5,
        streak_count: profile.streak_count + 1,
        last_claimed_date: todayISO,
      })
      .eq("id", profile.id);

    onClaim();
  };

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
        <span style={{ fontSize: 18 }}>📅</span>
        <strong style={{ fontSize: 16, color: "#000" }}>Daily Streak</strong>
      </div>

      {/* Body */}
      <div
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Streak count */}
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "#7c3aed",
            marginBottom: 16,
          }}
        >
          {profile.streak_count} day
        </div>

        {/* Week days */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 16,
          }}
        >
          {days.map((day, index) => {
            const isToday = index === todayIndex;

            return (
              <div
                key={index}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: isToday ? "#ede9fe" : "#e5e7eb",
                  border: isToday ? "3px solid #7c3aed" : "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  color: "#6b7280",
                }}
              >
                {day}
              </div>
            );
          })}
        </div>

        {/* Helper text */}
        <p
          style={{
            fontSize: 14,
            color: "#6b7280",
            marginBottom: 20,
          }}
        >
          Check in daily to earn +5 points
        </p>

        {/* Action button */}
        <button
          disabled={claimedToday}
          onClick={claim}
          style={{
            width: "100%",
            padding: "14px 0",
            borderRadius: 999,
            border: "none",
            background: claimedToday ? "#e5e7eb" : "#7c3aed",
            color: claimedToday ? "#9ca3af" : "#ffffff",
            fontWeight: 600,
            fontSize: 16,
            cursor: claimedToday ? "not-allowed" : "pointer",
          }}
        >
          ⚡ {claimedToday ? "Already Claimed" : "Claim Today’s Points"}
        </button>
      </div>
    </div>
  );
}
