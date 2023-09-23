"use client";

import { Framing } from "@/components/framing";
import { ToggleMode } from "@/components/toggle-mode";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { bounceAnimationVerticalDislocate } from "@/utils/animation/bounceAnimationVerticalDislocate";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  isBackButton: boolean;
  className?: string;
}

export function Header({ isBackButton, className }: HeaderProps) {
  const router = useRouter();

  return (
    <Framing {...bounceAnimationVerticalDislocate({ delay: 0.2 })}>
      <div
        className={cn(
          "flex h-16 w-full items-center justify-between rounded-lg bg-custom-gray-200/40 p-6 shadow-sm dark:border dark:border-custom-gray-500 dark:bg-custom-gray-700",
          className,
        )}
      >
        <div>
          {isBackButton && (
            <Button
              className="flex text-custom-gray-600 dark:text-white/60"
              onClick={() => router.back()}
              aria-label="Retornar para a página anterior"
              variant="link"
            >
              <ChevronLeft />
              Retornar
            </Button>
          )}
        </div>

        <ToggleMode />
      </div>
    </Framing>
  );
}
