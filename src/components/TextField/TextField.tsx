import { useEffect } from "react";
import {
    TextField as ReactAriaTextField,
    TextFieldProps as ReactAriaTextFieldProps,
    Label as ReactAriaLabel,
    Input as ReactAriaInput,
    Text,
    FieldError
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { useState } from "react";
import { Icon } from "../Icon";
import { icons } from "lucide-react";

const style = tv({
    slots: {
        textField: "flex flex-col relative gap-1",
        textInput: [
            "min-w-36 flex grow border-2 border-gray-500 rounded-md p-2 text-black",
            "focus:outline-blue-600 hover:border-gray-950",
            "data-[has-start-icon=true]:pl-10 data-[has-end-icon=true]:pr-10"
        ]
    },
    variants: {
        disabled: {
            true: {
                textField: "text-gray-500 opacity-50",
                textInput: "border-gray-500 text-gray-500 hover:border-gray-500 cursor-not-allowed"
            }
        }
    }
});

interface TextFieldProps extends ReactAriaTextFieldProps {
    /**
     * Label text
     */
    label: string;
    /**
     * Placeholder text
     */
    placeholder: string;
    /**
     * Error state message
     */
    errorText?: string;
    /**
     * Icon at the start of the button container
     */
    startIcon?: keyof typeof icons;
    /**
     * Icon at the end of the button container
     */
    endIcon?: keyof typeof icons;
}

export function TextField({
    value = "",
    type,
    name,
    isDisabled = false,
    label,
    placeholder,
    errorText,
    startIcon,
    endIcon,
    ...props
}: TextFieldProps) {
    const { textField, textInput } = style();
    const [innerValue, setInnerValue] = useState(value);

    const onChange = (nextValue: string) => {
        setInnerValue(nextValue);
        if (props.onChange) props.onChange(nextValue);
    };

    return (
        <ReactAriaTextField {...props} className={textField({ disabled: isDisabled })} onChange={onChange}>
            <ReactAriaLabel>{label}</ReactAriaLabel>
            <div className="relative flex items-center">
                {startIcon && <Icon className="absolute left-2" name={startIcon} color="black" />}
                <ReactAriaInput
                    placeholder={placeholder}
                    value={innerValue}
                    name={name}
                    type={type}
                    className={textInput({ disabled: isDisabled })}
                    data-has-start-icon={startIcon ? "true" : "false"}
                    data-has-end-icon={endIcon ? "true" : "false"}
                />
                {endIcon && <Icon className="absolute right-2" name={endIcon} color="black" />}
            </div>
            <Text slot="errorMessage" />
            <FieldError>{errorText}</FieldError>
        </ReactAriaTextField>
    );
}
