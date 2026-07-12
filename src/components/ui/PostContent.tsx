"use client";

import { useState } from "react";

const MAX_LENGTH = 220;

export default function PostContent({ content }: { content: string }) {
  const [expanded, setExpanded] = useState(false);

  const shouldTruncate = content.length > MAX_LENGTH;

  const text = expanded || !shouldTruncate ? content : content.slice(0, MAX_LENGTH);

  return (
    <div className="whitespace-pre-wrap break-words">
      {text}

      {shouldTruncate && (
        <>
          {!expanded && "... "}
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 font-medium text-blue-500 hover:underline"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </>
      )}
    </div>
  );
}
