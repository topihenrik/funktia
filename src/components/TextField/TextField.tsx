import {
    TextField as ReactAriaTextField,
    Label as ReactAriaLabel,
    Input as ReactAriaInput
} from "react-aria-components";
import { AriaTextFieldProps as ReactAriaTextFieldProps } from "@react-types/textfield";
import { tv } from "tailwind-variants";
import { Icon } from "../Icon";
import { icons } from "lucide-react";
import { FieldError } from "../FieldError/FieldError";

const textFieldStyle = tv({
    base: ["flex flex-col relative gap-1"],
    variants: {
        isDisabled: {
            true: "text-gray-500 opacity-50"
        }
    }
});

const textInputStyle = tv({
    base: [
        "min-w-36 flex grow border-2 border-gray-500 rounded-md p-2 text-black",
        "data-[has-start-icon=true]:pl-10 data-[has-end-icon=true]:pr-10"
    ],
    variants: {
        isDisabled: {
            true: "border-gray-500 text-gray-500 hover:border-gray-500 cursor-not-allowed"
        },
        isFocused: {
            true: "outline-blue-600"
        },
        isHovered: {
            true: "border-gray-950"
        },
        isInvalid: {
            true: "border-red-600"
        }
    }
});

interface TextFieldProps extends ReactAriaTextFieldProps {
    /**
     * Label text
     */
    label?: string;
    /**
     * Icon at the start of the button container
     */
    startIcon?: keyof typeof icons;
    /**
     * Icon at the end of the button container
     */
    endIcon?: keyof typeof icons;
}

export function TextField({ label, startIcon, endIcon, ...props }: TextFieldProps) {
    return (
        <ReactAriaTextField {...props} className={textFieldStyle}>
            {label && <ReactAriaLabel>{label}</ReactAriaLabel>}
            <div className="relative flex items-center">
                {startIcon && <Icon className="absolute left-2" name={startIcon} color="black" />}
                <ReactAriaInput
                    className={textInputStyle}
                    data-has-start-icon={startIcon ? "true" : "false"}
                    data-has-end-icon={endIcon ? "true" : "false"}
                />
                {endIcon && <Icon className="absolute right-2" name={endIcon} color="black" />}
            </div>
            <FieldError />
        </ReactAriaTextField>
    );
}
