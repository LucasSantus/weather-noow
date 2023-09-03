import { Framing } from "@/components/framing";
import { ToggleMode } from "@/components/toggle-mode";
import { bounceAnimationVerticalDislocate } from "@/utils/animation/bounceAnimationVerticalDislocate";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <Framing {...bounceAnimationVerticalDislocate({ delay: 0.2 })}>
      <div className="flex h-16 w-full items-center rounded-lg border bg-muted/40 p-6 dark:bg-background">
        <div className="flex w-full justify-end">
          <ToggleMode />
        </div>
      </div>
    </Framing>
  );
}
