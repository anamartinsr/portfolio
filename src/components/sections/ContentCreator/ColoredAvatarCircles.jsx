import { communityColors } from "../../../data/contentCreator";

export default function ColoredAvatarCircles() {
  return (
    <div className="flex items-center gap-3 overflow-hidden">
      {communityColors.map((color, i) => (
        <div
          key={i}
          className="h-11 w-11 rounded-full"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
