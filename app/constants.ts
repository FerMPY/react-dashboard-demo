import { Dashboard } from "../src/routes/dashboard";
import { Settings } from "../src/routes/settings";

const ROUTES = {
  Dashboard: { component: Dashboard, url: "/" },
  Settings: { component: Settings, url: "/settings" },
} as const;
