// app/components/layout.tsx
import Link from "next/link";
import { ReactNode } from "react";

const components = [
  { name: "Footer", slug: "footer" },
  { name: "Navbar", slug: "navbar" },
];

export default function ComponentsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full">
      {/* Sticky Components Sidebar */}
      <aside className="w-64 bg-zinc-950 p-4 border-r border-zinc-700 sticky top-0 self-start h-screen">
        <h2 className="text-xl font-semibold mb-4">Component List</h2>
        <ul className="space-y-2">
          {components.map((comp) => (
            <li key={comp.slug}>
              <Link
                href={`/components/${comp.slug}`}
                className="hover:text-blue-600 text-blue-400"
              >
                {comp.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto h-screen">{children}</main>
    </div>
  );
}
