export const Color = {
    Primary: "primary",
    Secondary: "secondary",
    Success: "success",
    Warning: "warning",
    Danger: "danger"
} as const;

export type Color = (typeof Color)[keyof typeof Color];
