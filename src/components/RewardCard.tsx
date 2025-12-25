import { supabase } from "../lib/supabase";

type Props = {
  reward: any;
  profile: any;
  onRedeem: () => void;
};

export default function RewardCard({ reward, profile, onRedeem }: Props) {
  const isComingSoon = reward.status === "coming_soon";
  const isUnlocked = profile.points_balance >= reward.points_required;

  const handleRedeem = async () => {
    if (!isUnlocked || isComingSoon) return;

    await supabase.from("redemptions").insert({
      reward_id: reward.id,
      user_id: profile.id,
    });

    await supabase
      .from("profiles")
      .update({
        points_balance: profile.points_balance - reward.points_required,
      })
      .eq("id", profile.id);

    onRedeem();
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 20,
        padding: "28px 24px",
        border: "1px solid #ede9fe",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: "#f3e8ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 26,
          marginBottom: 20,
        }}
      >
        {reward.title.toLowerCase().includes("bank") && "💸"}
        {reward.title.toLowerCase().includes("paypal") && "💸"}
        {reward.title.toLowerCase().includes("visa") && "🎁"}
        {reward.title.toLowerCase().includes("apple") && "🎁"}
        {reward.title.toLowerCase().includes("google") && "🎁"}
        {reward.title.toLowerCase().includes("amazon") && "🎁"}
        {reward.title.toLowerCase().includes("udemy") && "📘"}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: 18,
          fontWeight: 600,
          marginBottom: 12,
          color: "#374151",
        }}
      >
        {reward.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          color: "#6b7280",
          lineHeight: 1.6,
          marginBottom: 20,
        }}
      >
        {reward.description}
      </p>

      {/* Points */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: "#a855f7",
          fontWeight: 600,
          marginBottom: 24,
        }}
      >
        <span>⭐</span>
        <span>{reward.points_required} pts</span>
      </div>

      {/* Action button */}
      <button
        disabled={!isUnlocked || isComingSoon}
        onClick={handleRedeem}
        style={{
          width: "100%",
          padding: "14px 0",
          borderRadius: 14,
          border: "none",
          background: isUnlocked && !isComingSoon ? "#7c3aed" : "#e5e7eb",
          color: isUnlocked && !isComingSoon ? "#ffffff" : "#9ca3af",
          fontWeight: 600,
          cursor: isUnlocked && !isComingSoon ? "pointer" : "not-allowed",
        }}
      >
        {isComingSoon ? "Coming Soon" : isUnlocked ? "Redeem" : "Locked"}
      </button>
    </div>
  );
}
