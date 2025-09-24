import { Search } from "lucide-react";
import { useState } from "react";

export const Nav = ({ className }: { className?: string }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className={`${className}`}>
      <div className="flex items-center gap-2">
        <Search
          className="text-slate-500 dark:text-slate-400 cursor-pointer block sm:hidden"
          size="16"
          onClick={() => (window.location.href = `/search?kw=${keyword}`)}
        />
        <input
          placeholder="Search"
          className="outline-none text-slate-500 dark:text-slate-400 w-16 focus:w-full sm:focus:w-48 transition-all duration-500"
          onBlur={(e) => {
            setKeyword(e.target.value);
            window.location.href = `/search?kw=${keyword}`;
          }}
        />
        <Search
          className="text-slate-500 dark:text-slate-400 cursor-pointer hidden sm:block"
          size="16"
          onClick={() => (window.location.href = `/search?kw=${keyword}`)}
        />
      </div>
      <a href="/" className="hover:text-orange-500 dark:hover:text-purple-500">
        Home
      </a>
      <a href="/" className="hover:text-orange-500 dark:hover:text-purple-500">
        About me
      </a>
    </div>
  );
};
