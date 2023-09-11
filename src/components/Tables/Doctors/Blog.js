import Link from "next/link";
import React from "react";

function Blog() {
  return (
    <div className="grid grid-cols-3">
      <div className="space-y-2 p-2 shadow-md">
        <div>
          <img src="/images/blog1.svg" />
        </div>
        <div className="flex space-x-3 text-gray-500 text-sm">
          <div className="flex space-x-1">
            <img src="/images/icon-msg.svg" />
            <p className="self-end">25</p>
          </div>
          <div className="flex space-x-1">
            <img src="/images/Icon-head.svg" />
            <p className="text-end">Amit Kumar</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-base font-medium">Proin fermentum ut massa at</p>
          <p className="text-gray-500 font-normal text-sm">
            Proin lobortis tempus odio eget venenatis. Proin fermentum ut massa
            at bibendum. Proin bibendum...
          </p>

          <a
            href="#"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            read more
          </a>
        </div>
      </div>
      <div className="space-y-2 p-2 shadow-md">
        <div>
          <img src="/images/blog2.svg" />
        </div>
        <div className="flex space-x-3 text-gray-500 text-sm">
          <div className="flex space-x-1">
            <img src="/images/icon-msg.svg" />
            <p className="self-end">25</p>
          </div>
          <div className="flex space-x-1">
            <img src="/images/Icon-head.svg" />
            <p className="text-end">Amit Kumar</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-base font-medium">Proin fermentum ut massa at</p>
          <p className="text-gray-500 font-normal text-sm">
            Proin lobortis tempus odio eget venenatis. Proin fermentum ut massa
            at bibendum. Proin bibendum...
          </p>

          <a
            href="/detailsblog"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            read more
          </a>
        </div>
      </div>
      <div className="space-y-2 p-2 shadow-md">
        <div>
          <img src="/images/blog3.svg" />
        </div>
        <div className="flex space-x-3 text-gray-500 text-sm">
          <div className="flex space-x-1">
            <img src="/images/icon-msg.svg" />
            <p className="self-end">25</p>
          </div>
          <div className="flex space-x-1">
            <img src="/images/Icon-head.svg" />
            <p className="text-end">Amit Kumar</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-base font-medium">Proin fermentum ut massa at</p>
          <p className="text-gray-500 font-normal text-sm">
            Proin lobortis tempus odio eget venenatis. Proin fermentum ut massa
            at bibendum. Proin bibendum...
          </p>

          <a
            href="#"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
