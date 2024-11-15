import { Icon } from "../components";
import { Severity } from "../constants";

export function getIcon(severity: Severity) {
    switch (severity) {
        case "info":
            return <Icon name="Info" />;
        case "success":
            return <Icon name="CircleCheck" />;
        case "warning":
            return <Icon name="TriangleAlert" />;
        case "danger":
            return <Icon name="CircleAlert" />;
        default:
            return null;
    }
}
