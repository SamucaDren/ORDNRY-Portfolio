export {};

type GtagCommand = "event" | "config" | "js";

interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
}

declare global {
  interface Window {
    gtag?: (
      command: GtagCommand,
      eventName: string | Date,
      params?: GtagEventParams,
    ) => void;
  }
}
