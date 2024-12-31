import { Dashboard } from "./routes/dashboard";
import { Settings } from "./routes/settings";

export const ROUTES = {
  Dashboard: { Component: Dashboard, path: "/", title: "Dashboard" },
  Settings: { Component: Settings, path: "/settings", title: "Settings" },
} as const;
