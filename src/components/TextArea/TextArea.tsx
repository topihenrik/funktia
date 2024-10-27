import { tv } from "tailwind-variants";
import {
    TextArea as ReactAriaTextArea,
    TextField as ReactAriaTextField,
    Label as ReactAriaLabel,
    TextFieldProps as ReactAriaTextFieldProps
} from "react-aria-components";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

const textFieldStyle = tv({
    base: ["flex flex-col"],
    variants: {
        disabled: {
            true: "text-gray-500 opacity-50"
        }
    }
});

const textAreaStyle = tv({
    base: [
        "flex flex-col grow border-2 border-gray-500 rounded-md p-2 text-black resize-none",
        "focus:outline-blue-600 hover:border-gray-950"
    ],
    variants: {
        disabled: {
            true: "border-gray-500 text-gray-500 hover:border-gray-500 cursor-not-allowed"
        }
    }
});

interface TextAreaProps extends ReactAriaTextFieldProps {
    /**
     * Label text
     */
    label: string;
    /**
     * Additional tailwind styles for the element.
     */
    className?: string;
}

export function TextArea({ label, value = "", isDisabled = false, ...props }: TextAreaProps) {
    const [innerValue, setInnerValue] = useState(value);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const onChange = (nextValue: string) => {
        setInnerValue(nextValue);
        if (props.onChange) props.onChange(nextValue);
    };

    const onHeightChange = useCallback(() => {
        if (textAreaRef.current) {
            const textArea = textAreaRef.current;
            textArea.style.height = "auto";
            textArea.style.height = `${textArea.scrollHeight + (textArea.offsetHeight - textArea.clientHeight)}px`;
        }
    }, [textAreaRef]);

    useLayoutEffect(() => {
        if (textAreaRef.current) {
            onHeightChange();
        }
    }, [onHeightChange, innerValue, textAreaRef]);

    return (
        <ReactAriaTextField
            className={textFieldStyle({ disabled: isDisabled })}
            onChange={onChange}
            isDisabled={isDisabled}
        >
            <ReactAriaLabel>{label}</ReactAriaLabel>
            <ReactAriaTextArea
                ref={textAreaRef}
                className={textAreaStyle({ disabled: isDisabled })}
                value={innerValue}
            />
        </ReactAriaTextField>
    );
}
