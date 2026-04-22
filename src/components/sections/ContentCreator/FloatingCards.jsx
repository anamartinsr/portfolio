import { ChevronLeft, MoreHorizontal } from "lucide-react";
import profileImg from "../../../assets/profileBackground.jpeg";
import { sharedSocialLinks } from "../../../data/content.jsx";

function MessageCard({ content, position, mobileStack = false }) {
  const cardClass = mobileStack
    ? "w-full rounded-xl bg-[color:var(--color-secondary)] p-3 shadow-[0px_12px_28px_rgba(0,0,0,0.22)]"
    : `absolute ${position} max-w-[220px] rounded-xl bg-[color:var(--color-secondary)] p-3 shadow-[0px_12px_28px_rgba(0,0,0,0.22)] sm:max-w-[260px] sm:p-4`;

  return (
    <div className={cardClass}>
      <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-primary)]/20 sm:h-10 sm:w-10">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5 text-[color:var(--color-primary)] sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="8" r="3.2" />
            <path d="M5 19c1.9-3.6 4.2-5.2 7-5.2s5.1 1.6 7 5.2" />
          </svg>
        </div>
      </div>
      <p className="text-xs leading-relaxed text-[color:var(--color-text-muted)] sm:text-sm">
        {content}
      </p>
    </div>
  );
}

function ProfileCard({
  handle,
  likes,
  bio,
  position,
  followButton,
  mobileStack = false,
}) {
  const cardClass = mobileStack
    ? "w-full rounded-xl bg-[color:var(--color-secondary)] p-3 shadow-[0px_12px_28px_rgba(0,0,0,0.22)]"
    : `absolute ${position} max-w-[260px] rounded-xl bg-[color:var(--color-secondary)] p-3 shadow-[0px_12px_28px_rgba(0,0,0,0.22)] sm:max-w-[320px] sm:p-4`;

  return (
    <div className={cardClass}>
      <div className="mb-2 flex items-center justify-between text-[color:var(--color-text-primary)]/60 sm:mb-3">
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        <MoreHorizontal className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
        <img
          src={profileImg}
          alt={`Foto de perfil de ${handle}`}
          className="h-9 w-9 rounded-full object-cover sm:h-11 sm:w-11"
        />
        <div>
          <p className="text-base font-bold text-[color:var(--color-text-primary)] sm:text-xl">
            {handle}
          </p>
          <p className="text-xs text-[color:var(--color-text-primary)]/55">
            {likes}
          </p>
        </div>
      </div>
      <p className="mb-2 text-xs leading-relaxed text-[color:var(--color-text-muted)] sm:mb-3 sm:text-sm">
        {bio}
      </p>
      <a
        href={sharedSocialLinks.linktree}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full cursor-pointer rounded-md bg-[color:var(--color-primary)] py-2 text-center text-xs font-semibold text-white transition hover:brightness-110 sm:py-3 sm:text-sm"
      >
        {followButton}
      </a>
    </div>
  );
}

export default function FloatingCards({ cards, mobileStack = false }) {
  return (
    <div className={mobileStack ? "flex flex-col gap-3" : "contents"}>
      {cards.map((card) =>
        card.type === "message" ? (
          <MessageCard
            key={card.id}
            author={card.author}
            content={card.content}
            position={card.position}
            mobileStack={mobileStack}
          />
        ) : (
          <ProfileCard
            key={card.id}
            handle={card.handle}
            likes={card.likes}
            bio={card.bio}
            position={card.position}
            followButton={card.followButton}
            mobileStack={mobileStack}
          />
        ),
      )}
    </div>
  );
}
