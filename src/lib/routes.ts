// Centralized route path constants
export const ROUTES = {
  home: "/",
  findWork: "/find-work",
  findTalent: "/find-talent",
  skillSwap: "/skill-swap",
  projectJourney: "/project-journey",
  about: "/about",
  contact: "/contact",
  login: "/login",
  signUp: "/sign-up",
  dashboard: "/dashboard",
  adminStudio: "/admin-studio",
} as const;

export type RouteKey = keyof typeof ROUTES;
