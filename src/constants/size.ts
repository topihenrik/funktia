export const Size = {
    Small: "sm",
    Medium: "md",
    Large: "lg"
} as const;

export type Size = (typeof Size)[keyof typeof Size];
