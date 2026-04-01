import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import { communityMockupData } from "../../../data/contentCreator";

export default function CommunityPost() {
  return (
    <article className="rounded-2xl bg-[color:var(--card-soft)] p-4 shadow-[0px_10px_24px_rgba(28,28,23,0.08)]">
      <PostHeader
        author={communityMockupData.author}
        timeAgo={communityMockupData.timeAgo}
      />
      <p className="text-sm leading-relaxed text-[color:var(--text-muted-foreground)]">
        {communityMockupData.content}
      </p>
      <div className="mt-4">
        <PostActions />
      </div>
    </article>
  );
}
