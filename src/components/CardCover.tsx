import { PropsWithChildren } from "react";

export function CardCover({ children }: PropsWithChildren) {
  return (
    <div className="bg-foreground/20">
      <div>{children}</div>
    </div>
  );
}
