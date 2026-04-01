export default function PostHeader({ author, timeAgo }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-[rgba(144,147,255,0.3)]" />
      <div>
        <p className="text-base font-bold text-[color:var(--text-primary)]">
          {author}
        </p>
        <p className="text-xs text-[color:var(--text-primary)]/55">{timeAgo}</p>
      </div>
    </div>
  );
}
