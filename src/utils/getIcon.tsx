import { Icon } from "../components";

export function getIcon(color: "info" | "success" | "warning" | "error") {
    switch (color) {
        case "info":
            return <Icon name="Info" />;
        case "success":
            return <Icon name="CircleCheck" />;
        case "warning":
            return <Icon name="TriangleAlert" />;
        case "error":
            return <Icon name="CircleAlert" />;
        default:
            return null;
    }
}
