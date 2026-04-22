export default function BackgroundBlurs({ blurs }) {
  return (
    <>
      {blurs.map((blur, i) => (
        <div
          key={i}
          className={`pointer-events-none ${blur.position} rounded-full ${blur.size} ${blur.color} blur-3xl`}
        />
      ))}
    </>
  );
}
