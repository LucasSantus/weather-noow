import {
  CloudMoonIcon,
  CloudMoonRainIcon,
  CloudRainIcon,
  CloudSunIcon,
  CloudSunRainIcon,
  CloudyIcon,
  MoonIcon,
  SunIcon,
  XIcon,
} from "lucide-react";

export function convertNumberToIcon(weatherIcon: number) {
  if (weatherIcon >= 0 && weatherIcon <= 6) return SunIcon;
  else if (weatherIcon >= 7 && weatherIcon <= 11) return CloudyIcon;
  else if (weatherIcon >= 12 && weatherIcon <= 18) return CloudSunRainIcon;
  else if (weatherIcon >= 19 && weatherIcon <= 24) return CloudSunIcon;
  else if (weatherIcon >= 25 && weatherIcon <= 29) return CloudRainIcon;
  else if (weatherIcon >= 30 && weatherIcon <= 34) return MoonIcon;
  else if (weatherIcon >= 35 && weatherIcon <= 38) return CloudMoonIcon;
  else if (weatherIcon >= 39 && weatherIcon <= 44) return CloudMoonRainIcon;
  else return XIcon;
}
