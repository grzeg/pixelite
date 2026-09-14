export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Pusty string zamiast throw: pozwala uruchomić stronę (i pokazać komunikat "CMS
// nieskonfigurowany") zanim powstanie realny projekt Sanity. Studio i requestami
// do datasetu i tak nic sensownego nie zwrócą bez prawdziwego ID.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
