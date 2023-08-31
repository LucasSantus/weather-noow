import { ToggleMode } from "@/components/toggle-mode";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <div className="flex h-16 w-full items-center rounded-lg border border-primary-foreground bg-primary-foreground/40 p-6">
      <div className="flex w-full justify-end">
        <ToggleMode />
      </div>
    </div>
  );
}
