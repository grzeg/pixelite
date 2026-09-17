import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  // Cheap error tracking on a low-traffic portfolio site — no session replay/profiling.
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
