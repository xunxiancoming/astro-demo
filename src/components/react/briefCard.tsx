import { CalendarDays, Tag } from "lucide-react";

export const BriefCard = ({
  title,
  description,
  tags,
  date,
  headImg,
  url,
}: {
  title: string;
  description: string;
  tags: string[];
  date: string;
  headImg: string;
  url: string;
}) => {
  return (
    <div className="flex">
      <div className="w-1/3 h-48 rounded-sm">
        <img src={headImg} className="h-full container rounded-sm" />
      </div>
      <div className="flex-1 ml-4 flex-col flex justify-between rounded-sm">
        <h5 className="font-bold text-lg mb-2">{title}</h5>
        <p className="">{description}</p>
        <div className="flex text-sm gap-6 mt-2">
          <span className="flex items-center gap-2">
            <CalendarDays size={16} />
            {date}
          </span>
          <span className="flex items-center gap-2">
            <Tag size={16} />
            {tags.join("|")}
          </span>
        </div>
        <a className="mt-4 cursor-pointer text-lg font-bold" href={url}>
          阅读
        </a>
      </div>
    </div>
  );
};
