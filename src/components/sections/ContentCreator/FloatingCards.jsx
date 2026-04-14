import { ChevronLeft, MoreHorizontal } from "lucide-react";
import profileImg from "../../../assets/profileBackground.jpeg";
import { sharedSocialLinks } from "../../../data/content.jsx";

function MessageCard({ author, content, position }) {
  return (
    <div
      className={`absolute ${position} max-w-[260px] rounded-xl bg-[color:var(--secondary-color)] p-4 shadow-[0px_12px_28px_rgba(0,0,0,0.22)]`}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--primary-color)/20">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 text-[color:var(--primary-color)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="8" r="3.2" />
            <path d="M5 19c1.9-3.6 4.2-5.2 7-5.2s5.1 1.6 7 5.2" />
          </svg>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-[color:var(--text-muted-foreground)]">
        {content}
      </p>
    </div>
  );
}

function ProfileCard({ handle, likes, bio, position, followButton }) {
  return (
    <div
      className={`absolute ${position} max-w-[320px] rounded-xl bg-[color:var(--secondary-color)] p-4 shadow-[0px_12px_28px_rgba(0,0,0,0.22)]`}
    >
      <div className="mb-3 flex items-center justify-between text-[color:var(--text-primary)]/60">
        <ChevronLeft className="h-5 w-5" />
        <MoreHorizontal className="h-5 w-5" />
      </div>
      <div className="mb-3 flex items-center gap-3">
        <img
          src={profileImg}
          alt={`Foto de perfil de ${handle}`}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="text-xl font-bold text-[color:var(--text-primary)]">
            {handle}
          </p>
          <p className="text-xs text-[color:var(--text-primary)]/55">{likes}</p>
        </div>
      </div>
      <p className="mb-3 text-sm leading-relaxed text-[color:var(--text-muted-foreground)]">
        {bio}
      </p>
      <a
        href={sharedSocialLinks.linktree}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-md bg-(--primary-color) py-3 text-center text-sm font-semibold text-white transition hover:brightness-110 cursor-pointer"
      >
        {followButton}
      </a>
    </div>
  );
}

export default function FloatingCards({ cards }) {
  return (
    <>
      {cards.map((card) =>
        card.type === "message" ? (
          <MessageCard
            key={card.id}
            author={card.author}
            content={card.content}
            position={card.position}
          />
        ) : (
          <ProfileCard
            key={card.id}
            handle={card.handle}
            likes={card.likes}
            bio={card.bio}
            position={card.position}
            followButton={card.followButton}
          />
        ),
      )}
    </>
  );
}
