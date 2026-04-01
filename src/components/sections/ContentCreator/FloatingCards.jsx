import { ChevronLeft, MoreHorizontal } from "lucide-react";

function MessageCard({ author, content, position }) {
  return (
    <div
      className={`absolute ${position} max-w-[260px] rounded-xl bg-[color:var(--secondary-color)] p-4 shadow-[0px_12px_28px_rgba(0,0,0,0.22)]`}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-(--primary-color)/20" />
        <p className="text-sm font-semibold text-[color:var(--text-primary)]">
          {author}
        </p>
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
        <div className="h-11 w-11 rounded-full bg-[rgba(144,147,255,0.25)]" />
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
      <button className="w-full rounded-md bg-(--primary-color) py-3 text-sm font-semibold text-white hover:brightness-110 transition cursor-pointer">
        {followButton}
      </button>
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
