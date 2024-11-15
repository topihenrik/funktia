export const Severity = {
    Info: "info",
    Success: "success",
    Warning: "warning",
    Danger: "danger"
} as const;

export type Severity = (typeof Severity)[keyof typeof Severity];
