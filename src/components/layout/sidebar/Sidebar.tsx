import { ReactNode } from "react";

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-16 h-[calc(100vh-64px)] w-80 shrink-0">
      <aside className="h-full overflow-y-auto py-4">{children}</aside>
    </div>
  );
}
