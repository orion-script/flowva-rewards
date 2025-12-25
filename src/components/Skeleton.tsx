type Props = {
  height?: number;
};

export default function Skeleton({ height = 20 }: Props) {
  return (
    <div
      style={{
        height,
        borderRadius: 8,
        background:
          //   "linear-gradient(90deg, #1f2547 25%, #2a3160 37%, #1f2547 63%)",
          "linear-gradient(90deg, #D7E0ED 25%, #D7E0ED 37%, #D7E0ED 63%)",
        backgroundSize: "400% 100%",
        animation: "skeleton 1.4s ease infinite",
      }}
    />
  );
}
