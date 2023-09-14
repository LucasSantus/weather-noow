import dayjs from "dayjs";

const images = [
  "/images/storm-night.svg",
  "/images/few-clouds-night.svg",
  "/images/few-clouds-night.svg",
  "/images/clear-night.svg",
  "/images/clear-night.svg",
  "/images/snow-day.svg",
  "/images/snow-day.svg",
  "/images/few-clouds-day.svg",
  "/images/few-clouds-day.svg",
  "/images/clear-day.svg",
  "/images/clear-day.svg",
  "/images/few-clouds-day.svg",
  "/images/few-clouds-day.svg",
  "/images/few-clouds-day.svg",
  "/images/few-clouds-day.svg",
  "/images/rain-day.svg",
  "/images/rain-day.svg",
  "/images/cloudy-day.svg",
  "/images/cloudy-day.svg",
  "/images/storm-day.svg",
  "/images/storm-day.svg",
  "/images/rain-night.svg",
  "/images/rain-night.svg",
  "/images/storm-night.svg",
];

export function formatImagePerHour(): string {
  const hour = dayjs().hour();

  const image = images[hour];

  if (!image) return images[0];

  return image;
}
