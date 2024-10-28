import { Text as ReactAriaText, TextProps as ReactAriaTextProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { Icon } from "../Icon";

const containerStyle = tv({
    base: "flex gap-1 items-center"
});

const descriptionStyle = tv({
    base: "text-sm text-gray-800"
});

export function Description(props: ReactAriaTextProps) {
    return (
        <div className={containerStyle()}>
            <Icon className={descriptionStyle()} name="Info" size={14} />
            <ReactAriaText {...props} slot="description" className={descriptionStyle()} />
        </div>
    );
}
