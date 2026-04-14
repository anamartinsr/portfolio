import { Search } from "lucide-react";
import CommunityPost from "./CommunityPost";
import NavFooter from "./NavFooter";
import GradientCard from "./GradientCard";
import Heading from "../../ui/Heading";
import { getLanguageContent } from "../../../data/content";
import { useLanguage } from "../../../context/LanguageContext";

export default function CreatorPhoneMockup() {
  const { language } = useLanguage();
  const { contentCreator } = getLanguageContent(language);
  const { communityMockup } = contentCreator;

  return (
    <div className="absolute left-10 top-4 h-[620px] w-[340px] rotate-[-6deg] rounded-[3.1rem] bg-[color:var(--secondary-color)] p-4 shadow-[0px_18px_44px_rgba(0,0,0,0.35)] ring-4 ring-(--primary-color)">
      <div className="h-full w-full rounded-[2.6rem] bg-[color:var(--secondary-color)] p-5 overflow-hidden">
        <div className="mb-5 flex items-center justify-between">
          <Heading size="lg">{communityMockup.title}</Heading>
          <Search className="h-5 w-5 text-[color:var(--text-primary)]" />
        </div>

        <div className="mb-4 flex gap-6 text-lg">
          <span className="font-semibold text-(--primary-color) border-b-2 border-(--primary-color) pb-2">
            {communityMockup.tabActive}
          </span>
          <span className="text-[color:var(--text-primary)]/35">
            {communityMockup.tabInactive}
          </span>
        </div>

        <div className="mb-4 border-b border-[color:var(--surface-glass-border)] pb-3">
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
