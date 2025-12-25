import Skeleton from "./Skeleton";

export default function HeaderSkeleton() {
  return (
    <div className="grid" style={{ marginBottom: 24 }}>
      <div className="card">
        <Skeleton height={24} />
        <Skeleton height={40} />
      </div>
      <div className="card">
        <Skeleton height={24} />
        <Skeleton height={40} />
      </div>
    </div>
  );
}
