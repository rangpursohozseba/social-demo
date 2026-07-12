"use client";
import {
  ChatBubbleRounded,
  ImageRounded,
  MoreHorizRounded,
  PublicRounded,
  ShareRounded,
  ThumbUpRounded,
} from "@mui/icons-material";
import { POSTS, USERS, IMAGES } from "@/constants/post";
import { forEach } from "eslint-config-next";
import { useEffect, useState } from "react";
import PostContent from "@/components/ui/PostContent";

export function PostList() {
  const rawPosts = [...POSTS];
  const users = [...USERS];
  const images = [...IMAGES];

  const [posts, setPosts] = useState<any[]>([]);

  function shuffle<T>(array: T[]): T[] {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  function generatePosts() {
    let postIndex = 0;
    let imageIndex = 0;

    const postList = [];
    const postTypes = ["text", "image", "both"] as const;

    for (const user of users) {
      // Each user gets 2 posts
      for (let i = 0; i < 2; i++) {
        const post = rawPosts[postIndex % rawPosts.length];

        const type = postTypes[Math.floor(Math.random() * postTypes.length)];

        const hasText = type !== "image";
        const hasImages = type !== "text";

        const imageCount = hasImages ? Math.floor(Math.random() * 8) + 1 : 0;

        postList.push({
          ...post,
          id: postIndex + 1,
          author: user,
          content: hasText ? post.body : "",
          images: Array.from({ length: imageCount }, () => images[imageIndex++ % images.length]),
        });

        postIndex++;
      }
    }

    setPosts(shuffle(postList));
  }
  useEffect(() => {
    generatePosts();
  }, []);
  console.log(posts);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article
          key={post.id}
          className="overflow-hidden rounded-2xl border border-outline/20 bg-background-elevated shadow-sm"
        >
          {/* Header */}
          <div className="flex items-center gap-3 p-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-11 w-11 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <h3 className="font-semibold">{post.author.name}</h3>

                {post.author.verified && <span className="text-xs text-primary">✔</span>}
              </div>
              <div className="flex items-center gap-1 text-sm text-foreground-muted">
                <span>{post.author.username}</span>
                <span>•</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                <PublicRounded className="text-base" />
              </div>
            </div>

            <button className="rounded-full p-2 hover:bg-background">
              <MoreHorizRounded />
            </button>
          </div>

          {/* Text */}
          <div className="px-4 pb-4">
            <PostContent content={post.content} />
          </div>

          {/* Images */}
          {post.images.length === 1 ? (
            <img src={post.images[0]} alt="" className="w-full object-cover" />
          ) : post.images.length === 2 ? (
            <div className="grid grid-cols-2 gap-0.5">
              {post.images.map((image: string) => (
                <img key={image} src={image} alt="" className="aspect-square w-full object-cover" />
              ))}
            </div>
          ) : post.images.length === 3 ? (
            <div className="grid grid-cols-2 gap-0.5">
              <img src={post.images[0]} alt="" className="row-span-2 h-full w-full object-cover" />

              {post.images.slice(1).map((image: string) => (
                <img key={image} src={image} alt="" className="aspect-square w-full object-cover" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-0.5">
              {post.images.slice(0, 4).map((image: string, index: number) => (
                <div key={image} className="relative">
                  <img src={image} alt="" className="aspect-square w-full object-cover" />

                  {index === 3 && post.images.length > 4 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-4xl font-bold text-white backdrop-blur-[2px]">
                      +{post.images.length - 4}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center justify-between border-b border-outline/20 px-4 py-3 text-sm text-foreground-muted">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                <ThumbUpRounded className="text-sm" />
              </div>

              <span>{post.reactions.likes}</span>
            </div>

            <div className="flex gap-4">
              <span>{Math.floor(Math.random() * 1000) + 1} Comments</span>
              <span>{Math.floor(Math.random() * 1000) + 1} Shares</span>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-3 gap-2 p-2">
            <button className="flex items-center justify-center gap-2 rounded-lg py-3 transition hover:bg-background">
              <ThumbUpRounded />
              Like
            </button>

            <button className="flex items-center justify-center gap-2 rounded-lg py-3 transition hover:bg-background">
              <ChatBubbleRounded />
              Comment
            </button>

            <button className="flex items-center justify-center gap-2 rounded-lg py-3 transition hover:bg-background">
              <ShareRounded />
              Share
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
