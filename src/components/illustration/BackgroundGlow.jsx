export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[620px] -translate-x-1/2 -translate-y-1/2 opacity-90">
      <div className="absolute inset-0 rounded-[46%_54%_52%_48%/44%_47%_53%_56%] bg-[radial-gradient(ellipse_at_center,rgba(202,123,255,0.3)_0%,rgba(114,23,199,0.16)_40%,rgba(114,23,199,0.06)_68%,rgba(12,3,36,0)_100%)] blur-[44px]" />
      <div className="absolute inset-[10%_9%_13%_9%] rounded-[51%_49%_45%_55%/56%_44%_56%_44%] bg-[radial-gradient(circle_at_50%_45%,rgba(202,123,255,0.16)_0%,rgba(114,23,199,0.08)_46%,rgba(114,23,199,0)_100%)] blur-[70px]" />
      <div className="absolute -inset-[20%] rounded-[48%_52%_50%_50%/52%_48%_52%_48%] bg-[radial-gradient(ellipse_at_center,rgba(202,123,255,0.08)_0%,rgba(114,23,199,0.035)_56%,rgba(10,4,30,0)_100%)] blur-[110px]" />
    </div>
  );
}
