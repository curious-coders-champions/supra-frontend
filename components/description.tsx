"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Description({
  description,
}: {
  description: string;
}) {
  const [showMore, setShowMore] = useState(false);
  const showMoreButton = description?.length > 100;
  const displayedDescription =
    showMoreButton && !showMore
      ? `${description.slice(0, 200)}...`
      : description;

  return (
    <div className="flex flex-col gap-2">
      <p className="text-card-foreground text-pretty">{displayedDescription}</p>
      {showMoreButton && (
        <Button
          className="h-max px-0 w-max text-primary"
          variant="link"
          size="sm"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less" : "Show more"}
        </Button>
      )}
    </div>
  );
}
