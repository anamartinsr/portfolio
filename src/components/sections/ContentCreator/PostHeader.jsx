import profileImg from "../../../assets/profile.jpg";

export default function PostHeader({ author, timeAgo }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <img
        src={profileImg}
        alt={`Foto de perfil de ${author}`}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div>
        <p className="text-base font-bold text-[color:var(--text-primary)]">
          {author}
        </p>
        <p className="text-xs text-[color:var(--text-primary)]/55">{timeAgo}</p>
      </div>
    </div>
  );
}
