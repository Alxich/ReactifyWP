import { FC } from "react";

import { PostPreviewBlockProps, TagLinkProps } from "@/lib/types";
import {
  Breadcrumbs,
  Container,
  Pagination,
  PostAll,
  TagLink,
} from "@/components";

interface ITagPageProps {}

const TagsPageAll: FC<ITagPageProps> = (props) => {
  const tags: TagLinkProps[] = [
    { link: "#", text: "Leadership", color: "#667085", background: "#F9F5FF" },
    { link: "#", text: "Management", color: "#363F72", background: "#F8F9FC" },
    { link: "#", text: "Product", color: "#026AA2", background: "#F0F9FF" },
    { link: "#", text: "Research", color: "#3538CD", background: "#EEF4FF" },
    { link: "#", text: "Frameworks", color: "#C4320A", background: "#FFF6ED" },
    {
      link: "#",
      text: "Software Development",
      color: "#027A48",
      background: "#ECFDF3",
    },
    { link: "#", text: "Tools", color: "#C11574", background: "#FDF2FA" },
    { link: "#", text: "SaaS", color: "#C01048", background: "#FFF1F3" },
    { link: "#", text: "Marketing", color: "#FF5733", background: "#FFEDDB" },
    {
      link: "#",
      text: "Data Science",
      color: "#7D3C98",
      background: "#F4E8FF",
    },
    { link: "#", text: "UX/UI", color: "#3498DB", background: "#EAF5FF" },
    { link: "#", text: "Frontend", color: "#2ECC71", background: "#E8F9F3" },
    { link: "#", text: "Backend", color: "#E74C3C", background: "#FFEBE6" },
    { link: "#", text: "Mobile", color: "#F39C12", background: "#FFF5E1" },
    { link: "#", text: "AI/ML", color: "#9B59B6", background: "#F5E1F7" },

    {
      link: "#",
      text: "Beautiful Adventure",
      color: "#d767f4",
      background: "#3c0564",
    },
    {
      link: "#",
      text: "Fantastic Harmony",
      color: "#adad2e",
      background: "#c7c775",
    },
    {
      link: "#",
      text: "Incredible Journey",
      color: "#4b0d0d",
      background: "#ff5f5f",
    },
    { link: "#", text: "Epic Nature", color: "#5248be", background: "#97a3f3" },
    {
      link: "#",
      text: "Creative Technology",
      color: "#0b9ed9",
      background: "#a3ebf8",
    },
    {
      link: "#",
      text: "Amazing Wisdom",
      color: "#9b471b",
      background: "#f3c0a3",
    },
    {
      link: "#",
      text: "Majestic Innovation",
      color: "#d1b10a",
      background: "#f8e4a3",
    },
    {
      link: "#",
      text: "Serene Legacy",
      color: "#d91b1b",
      background: "#f3a3a3",
    },
    {
      link: "#",
      text: "Vibrant Adventure",
      color: "#23e13a",
      background: "#a3f3cb",
    },
    {
      link: "#",
      text: "Fantastic Infinity",
      color: "#8616af",
      background: "#f3a3f3",
    },
    {
      link: "#",
      text: "Majestic Adventure",
      color: "#2d62ad",
      background: "#a3c7f3",
    },
    {
      link: "#",
      text: "Vibrant Legacy",
      color: "#1a67b1",
      background: "#a3c7f3",
    },
    {
      link: "#",
      text: "Beautiful Discovery",
      color: "#cb0ed4",
      background: "#f3a3f8",
    },
    {
      link: "#",
      text: "Dynamic Innovation",
      color: "#0e9a58",
      background: "#a3f3cb",
    },
    {
      link: "#",
      text: "Incredible Infinity",
      color: "#d93711",
      background: "#f3a38e",
    },
  ];

  return (
    <Container
      classNames="flex flex-col justify-center items-start post py-7xl px-3xl space-y-7xl"
      width="md"
    >
      <Breadcrumbs />
      <div className="flex w-full flex-row items-start justify-between text-2xl font-semibold leading-normal text-black">
        <h4 className="text-inherit">All available tags</h4>
      </div>
      {tags && (
        <div className="tags flex w-full flex-row flex-wrap gap-x-xs gap-y-xs">
          {tags.map(({ background, color, link, text }, key) => (
            <TagLink
              type="big"
              background={background}
              color={color}
              link={link}
              text={text}
              key={`items_${key}`}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default TagsPageAll;
