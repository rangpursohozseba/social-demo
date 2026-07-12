export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  verified: boolean;
}
export interface Media {
  id: string;
  type: "image" | "video";
  url: string;

  width: number;
  height: number;

  alt?: string;

  order: number;
}

export type ReactionType = "like" | "love" | "care" | "haha" | "wow" | "sad" | "angry";

export interface Post {
  // Identity
  id: string;

  // Author
  authorId: string;

  // Content
  text: string | null;
  media: Media[];

  // Shared/Reposted Post
  sharedPostId?: string;

  // Metadata
  privacy: "public" | "friends" | "private";
  createdAt: string;
  updatedAt?: string;
  edited: boolean;

  // Feed Counters
  likeCount: number;
  commentCount: number;
  shareCount: number;
  viewCount: number;

  // Current Viewer State
  viewerReaction: ReactionType | null;
  viewerSaved: boolean;

  // Optional
  location?: string;
  feeling?: string;

  // Moderation
  commentEnabled: boolean;
  deleted: boolean;
}

export interface Database {
  users: Record<string, User>;
  posts: Record<string, Post>;
  media: Record<string, Media>;
}
