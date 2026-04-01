import { actions } from "../../../data/contentCreator";

export default function PostActions() {
  return (
    <div className="flex gap-4 text-xs text-[color:var(--text-primary)]/55">
      {actions.map((action) => (
        <span key={action}>{action}</span>
      ))}
    </div>
  );
}
