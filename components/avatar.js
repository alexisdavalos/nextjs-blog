import Link from "next/link";
import DateFormatter from "./date-formatter";
export default function Avatar({ name, picture, date }) {
  return (
    <Link href="/posts/about">
      <div className="cursor-pointer hover:underline flex items-center">
        <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
        <div className="flex items-start flex-col">
          <div className="text-sm sm:text-base md:text-xl text-left font-bold">
            {name}
          </div>
          <div className="text-sm sm:text-base md:text-xl text-left">
            <DateFormatter
              dateString={date ? date : "0000-01-11T01:11:01.1111"}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
