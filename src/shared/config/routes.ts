const ROUTES_PATHS = {
  AUTH: ['sing-in', 'sign-up'],
  MAIN: ['/', '/news', '/news/:id'],
} as const;

type RoutesPath = (typeof ROUTES_PATHS)[keyof typeof ROUTES_PATHS][number];

export const ROUTES = Object.fromEntries(
  Object.values(ROUTES_PATHS)
    .flat()
    .map((path) => [path, path]),
) as Record<RoutesPath, RoutesPath>;
