import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import { getLanguageContent } from "../../../data/content";
import { useLanguage } from "../../../context/useLanguage";

export default function CommunityPost() {
  const { language } = useLanguage();
  const { contentCreator } = getLanguageContent(language);
  const { post } = contentCreator.communityMockup;

  return (
    <article className="rounded-2xl bg-[color:var(--color-card-soft)] p-4 shadow-[0px_10px_24px_rgba(28,28,23,0.08)]">
      <PostHeader author={post.author} timeAgo={post.timeAgo} />
      <p className="text-sm leading-relaxed text-[color:var(--color-text-muted)]">
        {post.content}
      </p>
      <div className="mt-4">
        <PostActions />
      </div>
    </article>
  );
}
