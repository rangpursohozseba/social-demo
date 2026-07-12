import RightSidebar from "@/components/layout/sidebar/RightSidebar";
import { CreatePost } from "@/components/CreatePost";
import { PostList } from "@/components/PostList";
import LeftSidebar from "@/components/layout/sidebar/LeftSidebar";

export default function Page() {
  return (
    <main className="flex justify-between items-start w-full gap-6">
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Feed */}
      <section className="min-w-0 flex-1 pt-4">
        <div className="mx-auto max-w-2xl space-y-4">
          <CreatePost />
          <PostList />
        </div>
      </section>

      {/* Right Sidebar */}
      <RightSidebar />
    </main>
  );
}
