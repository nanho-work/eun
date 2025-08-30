"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "대시보드", path: "/" },
  { name: "회원 관리", path: "/members" },
  { name: "트레이너 관리", path: "/trainers" },
  { 
    name: "PT 스케줄 관리", 
    path: "/schedule",
    children: [
      { name: "일정 보기", path: "/schedule" },
      { name: "일정 추가", path: "/schedule/add" },
    ],
  },
  { name: "홈페이지 관리", path: "/cms" },
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
        {menuItems.map((item) => {
          const activeParent = isActive(item.path) || (item.children && item.children.some(child => isActive(child.path)));
          return (
            <div key={item.path} className="mb-1">
              {item.children ? (
                <div
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${
                    activeParent ? "bg-orange-500 text-white" : "text-gray-900"
                  }`}
                >
                  {item.name}
                </div>
              ) : (
                <Link
                  href={item.path}
                  className={`block px-4 py-2 rounded transition-colors ${
                    isActive(item.path) ? "bg-orange-500 text-white" : "text-gray-900 hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              )}
              {item.children && (
                <div className="ml-6 mt-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      href={child.path}
                      className={`block px-4 py-2 rounded transition-colors ${
                        isActive(child.path) ? "bg-orange-500 text-white" : "text-gray-900 hover:bg-orange-500 hover:text-white"
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}