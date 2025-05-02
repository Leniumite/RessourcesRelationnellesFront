import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  // * matches all URLs, the ? makes it optional so it will match / as well
  route("/", "Pages/Accueil.tsx"),
  route("/connection", "Pages/Connection.tsx"),
  route("/account", "Pages/Account.tsx"),
  route("/community/:slug", "Pages/Community.tsx"),
  route("/community/:slug/post/:postId", "Pages/Post.tsx"),
  route("*?", "Pages/NoPage.tsx"),
] satisfies RouteConfig;