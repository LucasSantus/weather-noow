import { LucideIcon } from "lucide-react";

interface WeatherDetailsToDayInfoProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

export function WeatherDetailsToDayInfo({
  icon: Icon,
  title,
  content,
}: WeatherDetailsToDayInfoProps) {
  return (
    <div className="flex h-full w-full items-center justify-between">
      <div className="flex items-center justify-start gap-5">
        <Icon className="h-9 w-9 stroke-custom-gray-500" />
        <span className="text-md font-bold text-custom-gray-200">{title}</span>
      </div>

      <span className="text-2xl font-bold text-custom-gray-200">{content}</span>
    </div>
  );
}
