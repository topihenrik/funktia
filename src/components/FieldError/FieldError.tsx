import { FieldError as ReactAriaFieldError, FieldErrorProps } from "react-aria-components";
import { tv } from "tailwind-variants";

const fieldErrorStyle = tv({
    base: ["text-red-500 text-sm"]
});

export function FieldError(props: FieldErrorProps) {
    return <ReactAriaFieldError {...props} className={fieldErrorStyle} />;
}
