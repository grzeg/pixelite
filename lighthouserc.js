module.exports = {
  ci: {
    collect: {
      startServerCommand: "pnpm start",
      startServerReadyPattern: "Ready in",
      startServerReadyTimeout: 30000,
      url: ["http://localhost:3000/pl", "http://localhost:3000/pl/portfolio", "http://localhost:3000/pl/kontakt"],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:performance": ["warn", { minScore: 0.8 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
