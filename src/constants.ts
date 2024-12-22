import { Dashboard } from "./routes/dashboard";
import { Settings } from "./routes/settings";

export const ROUTES = {
  Dashboard: { Component: Dashboard, url: "/", title: "Dashboard" },
  Settings: { Component: Settings, url: "/settings", title: "Settings" },
} as const;
