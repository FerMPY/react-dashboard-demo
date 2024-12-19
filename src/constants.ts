import { Dashboard } from "./routes/dashboard";
import { Settings } from "./routes/settings";

const ROUTES = {
  Dashboard: { component: Dashboard, url: "/" },
  Settings: { component: Settings, url: "/settings" },
} as const;
