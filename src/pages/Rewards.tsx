import { useState } from "react";
import AppLayout from "../layout/AppLayout";
import { useRewards } from "../hooks/useRewards";
import PointsCard from "../components/PointsCard";
import StreakCard from "../components/StreakCard";
import RewardCard from "../components/RewardCard";
import Tabs from "../components/Tabs";
import HeaderSkeleton from "../components/HeaderSkeleton";
import RewardSkeleton from "../components/RewardSkeleton";
import LogoutButton from "../components/LogoutButton";
import RewardsTopTabs from "../components/RewardsTopTabs";
import FeaturedToolCard from "../components/FeaturedToolCard";
import EarnMorePoints from "../components/EarnMorePoints";
import ReferAndEarn from "../components/ReferAndEarn";

export default function Rewards() {
  const { rewards, profile, loading, error, refetch } = useRewards();

  const [activeTab, setActiveTab] = useState<
    "all" | "unlocked" | "locked" | "coming_soon"
  >("all");

  const [view, setView] = useState<"earn" | "redeem">("earn");

  /* ---------------- LOADING STATE ---------------- */
  if (loading) {
    return (
      <AppLayout>
        <div style={{ padding: 24 }}>
          <HeaderSkeleton />
          <div className="grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <RewardSkeleton key={i} />
            ))}
          </div>
        </div>
      </AppLayout>
    );
  }

  if (error) {
    return (
      <AppLayout>
        <p style={{ padding: 24 }}>{error}</p>
      </AppLayout>
    );
  }

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredRewards = rewards.filter((reward) => {
    if (activeTab === "all") return true;
    if (activeTab === "coming_soon") return reward.status === "coming_soon";
    if (activeTab === "unlocked")
      return profile.points_balance >= reward.points_required;
    if (activeTab === "locked")
      return profile.points_balance < reward.points_required;
    return true;
  });

  /* ---------------- RENDER ---------------- */
  return (
    <AppLayout>
      <div style={{ padding: 24 }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <h1
            style={{
              fontSize: 24,
              color: "#000",
            }}
          >
            Rewards Hub
          </h1>
          <LogoutButton />
        </div>

        <p style={{ color: "#666", marginBottom: 24 }}>
          Earn points, unlock rewards, and celebrate your progress!
        </p>

        {/* Top Tabs: Earn / Redeem */}
        <RewardsTopTabs active={view} onChange={setView} />

        {/* ---------------- EARN VIEW ---------------- */}
        {view === "earn" && (
          <>
            <h2 style={{ marginBottom: 16, fontSize: 24, color: "#000" }}>
              Your Rewards Journey
            </h2>

            {/* <div className="grid" style={{ marginBottom: 32 }}>
              <PointsCard points={profile.points_balance} />
              <StreakCard profile={profile} onClaim={refetch} />
            </div> */}

            <div
              className="grid"
              style={{
                marginBottom: 32,
                gridTemplateColumns: "1fr 1fr 1.2fr",
              }}
            >
              <PointsCard points={profile.points_balance} />
              <StreakCard profile={profile} onClaim={refetch} />
              <FeaturedToolCard />
            </div>

            <EarnMorePoints />
            <ReferAndEarn />
          </>
        )}

        {/* ---------------- REDEEM VIEW ---------------- */}
        {view === "redeem" && (
          <>
            <h2 style={{ marginBottom: 16, fontSize: 24, color: "#000" }}>
              Redeem Your Points
            </h2>

            <Tabs
              active={activeTab}
              onChange={setActiveTab}
              counts={{
                all: rewards.length,
                unlocked: rewards.filter(
                  (r) => profile.points_balance >= r.points_required
                ).length,
                locked: rewards.filter(
                  (r) => profile.points_balance < r.points_required
                ).length,
                coming_soon: rewards.filter((r) => r.status === "coming_soon")
                  .length,
              }}
            />

            <div className="grid" style={{ marginTop: 24 }}>
              {filteredRewards.length === 0 ? (
                <p>No rewards available</p>
              ) : (
                filteredRewards.map((reward) => (
                  <RewardCard
                    key={reward.id}
                    reward={reward}
                    profile={profile}
                    onRedeem={refetch}
                  />
                ))
              )}
            </div>
          </>
        )}
      </div>
    </AppLayout>
  );
}
