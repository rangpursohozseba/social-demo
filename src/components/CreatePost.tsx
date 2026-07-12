import { ImageRounded, MoodRounded, VideocamRounded } from "@mui/icons-material";

export function CreatePost() {
  return (
    <div className="mb-4 rounded-2xl border border-outline/20 bg-background-elevated shadow-sm">
      <div className="flex items-center gap-3 p-4">
        <div className="h-11 w-11 rounded-full bg-primary/20" />

        <button className="flex-1 rounded-full bg-background px-5 py-3 text-left text-sm text-foreground-muted transition hover:bg-background-surface">
          What's on your mind, Abir?
        </button>
      </div>

      <div className="grid grid-cols-3 border-t border-outline/20 p-2">
        <button className="flex items-center justify-center gap-2 rounded-lg py-3 transition hover:bg-background">
          <VideocamRounded className="text-red-500" />
          <span>Live</span>
        </button>

        <button className="flex items-center justify-center gap-2 rounded-lg py-3 transition hover:bg-background">
          <ImageRounded className="text-green-500" />
          <span>Photo</span>
        </button>

        <button className="flex items-center justify-center gap-2 rounded-lg py-3 transition hover:bg-background">
          <MoodRounded className="text-yellow-500" />
          <span>Feeling</span>
        </button>
      </div>
    </div>
  );
}
