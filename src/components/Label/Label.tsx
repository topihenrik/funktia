import { Label as ReactAriaLabel, LabelProps as ReactAriaLabelProps } from "react-aria-components";

interface LabelProps extends ReactAriaLabelProps {
    /**
     * Whether the associated field is required
     */
    isRequired?: boolean;
}

export function Label({ children, isRequired, ...props }: LabelProps) {
    return (
        <div>
            <ReactAriaLabel {...props}>{children}</ReactAriaLabel>
            {isRequired && <span className="text-red-600">*</span>}
        </div>
    );
}
