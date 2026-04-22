import { Search } from "lucide-react";
import CommunityPost from "./CommunityPost";
import NavFooter from "./NavFooter";
import GradientCard from "./GradientCard";
import Heading from "../../ui/Heading";
import { getLanguageContent } from "../../../data/content";
import { useLanguage } from "../../../context/useLanguage";

export default function CreatorPhoneMockup() {
  const { language } = useLanguage();
  const { contentCreator } = getLanguageContent(language);
  const { communityMockup } = contentCreator;

  return (
    <div className="absolute left-1/2 top-4 h-[500px] w-[280px] -translate-x-1/2 rotate-[-4deg] rounded-[2.5rem] bg-[color:var(--color-secondary)] p-3 shadow-[0px_18px_44px_rgba(0,0,0,0.35)] ring-4 ring-[color:var(--color-primary)] sm:h-[580px] sm:w-[320px] sm:rounded-[3rem] sm:p-4 md:left-10 md:h-[620px] md:w-[340px] md:-translate-x-0 md:rotate-[-6deg] md:rounded-[3.1rem]">
      <div className="h-full w-full overflow-hidden rounded-[2.1rem] bg-[color:var(--color-secondary)] p-4 sm:rounded-[2.6rem] sm:p-5">
        <div className="mb-4 flex items-center justify-between sm:mb-5">
          <Heading size="lg">{communityMockup.title}</Heading>
          <Search className="h-4 w-4 text-[color:var(--color-text-primary)] sm:h-5 sm:w-5" />
        </div>

        <div className="mb-3 flex gap-4 text-base sm:mb-4 sm:gap-6 sm:text-lg">
          <span className="font-semibold text-[color:var(--color-primary)] border-b-2 border-[color:var(--color-primary)] pb-2">
            {communityMockup.tabActive}
          </span>
          <span className="text-[color:var(--color-text-primary)]/35">
            {communityMockup.tabInactive}
          </span>
        </div>

        <div className="mb-3 border-b border-[color:var(--color-surface-glass-border)] pb-3 sm:mb-4">
          <Heading size="md">{communityMockup.communityLabel}</Heading>
        </div>

        <CommunityPost />
        <GradientCard />

        <div className="mt-4">
          <NavFooter />
        </div>
      </div>
    </div>
  );
}
