// app/components/layout.tsx
import Link from "next/link";
import { ReactNode } from "react";

const components = [
  { name: "Button", slug: "button" },
  { name: "Card", slug: "card" },
  { name: "Modal", slug: "modal" },
];

export default function ComponentsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-zinc-950 p-4 border-r border-zinc-700">
        <h2 className="text-xl font-semibold mb-4">Components</h2>
        <ul className="space-y-2">
          {components.map((comp) => (
            <li key={comp.slug}>
              <Link
                href={`/components/${comp.slug}`}
                className=" hover:underline text-blue-400"
              >
                {comp.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
