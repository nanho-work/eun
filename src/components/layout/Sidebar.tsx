"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "크롤링", path: "/crawling" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-48 h-screen bg-orange-200 text-orange-500 flex flex-col">
      <div className="p-4 text-2xl font-bold ">
        Orangym
      </div>
      <nav className="flex-1 p-2">
        {menuItems.map((item) => (
          <div key={item.path} className="mb-1">
            <Link
              href={item.path}
              className={`block px-4 py-2 rounded transition-colors ${
                isActive(item.path)
                  ? "bg-orange-500 text-white"
                  : "text-gray-900 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
}