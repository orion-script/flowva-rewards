import Skeleton from "./Skeleton";

export default function RewardSkeleton() {
  return (
    <div className="card">
      <Skeleton height={24} />
      <div style={{ margin: "10px 0" }}>
        <Skeleton height={14} />
      </div>
      <Skeleton height={32} />
    </div>
  );
}
