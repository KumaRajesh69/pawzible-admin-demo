import Link from "next/link";
import React from "react";

const data = [
  {
    image: "/images/blog1.svg",
    msg: "25",
    person: "Amit Kumar",
    prion: "Proin fermentum ut massa at",
    para: "Proin lobortis tempus odio eget venenatis. Proin fermentum ut massa at bibendum. Proin bibendum...",
    link: "/detailsblog",
  },
  {
    image: "/images/blog2.svg",
    msg: "25",
    person: "Amit Kumar",
    prion: "Proin fermentum ut massa at",
    para: "Proin lobortis tempus odio eget venenatis. Proin fermentum ut massa at bibendum. Proin bibendum...",
    link: "/detailsblog",
  },
  {
    image: "/images/blog3.svg",
    msg: "25",
    person: "Amit Kumar",
    prion: "Proin fermentum ut massa at",
    para: "Proin lobortis tempus odio eget venenatis. Proin fermentum ut massa at bibendum. Proin bibendum...",
    link: "/detailsblog",
  },
];

function Blog() {
  return (
    <div className="grid md:grid-cols-3">
      {data.map((each) => (
        <div className="space-y-2 p-2 shadow-md">
          <div>
            <img src={each.image} />
          </div>
          <div className="flex space-x-3 text-gray-500 text-sm">
            <div className="flex space-x-1">
              <img src="/images/icon-msg.svg" />
              <p className="self-end">{each.msg}</p>
            </div>
            <div className="flex space-x-1">
              <img src="/images/Icon-head.svg" />
              <p className="text-end">{each.person}</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-base font-medium">{each.proin}</p>
            <p className="text-gray-500 font-normal text-sm">{each.para}</p>

            <a
              href={each.link}
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
