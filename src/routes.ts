import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  // * matches all URLs, the ? makes it optional so it will match / as well
  route("/movie/:id", "pages/details.tsx"),
  route("/", "pages/app.tsx"),
  route("*?", "pages/catchall.tsx"),
] satisfies RouteConfig;
