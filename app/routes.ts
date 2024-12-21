import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("./routes/dashboard.tsx"),
  route("Settings", "./routes/settings.tsx"),
] satisfies RouteConfig;
