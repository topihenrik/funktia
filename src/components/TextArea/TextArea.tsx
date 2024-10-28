import { tv } from "tailwind-variants";
import {
    TextArea as ReactAriaTextArea,
    TextField as ReactAriaTextField,
    TextFieldProps as ReactAriaTextFieldProps
} from "react-aria-components";
import { useCallback, useLayoutEffect, useRef } from "react";
import { FieldError } from "../FieldError/FieldError";
import { Description } from "../Description/Description";
import { Label } from "../Label/Label";

const textFieldStyle = tv({
    base: ["flex flex-col"],
    variants: {
        isDisabled: {
            true: "text-gray-500 opacity-50"
        }
    }
});

const textAreaStyle = tv({
    base: ["flex flex-col grow border-2 border-gray-500 rounded-md p-2 text-black resize-none"],
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

interface TextAreaProps extends ReactAriaTextFieldProps {
    /**
     * Label text.
     */
    label: string;
    /**
     * Additional tailwind styles for the element.
     */
    className?: string;
    /**
     * Description text.
     */
    description?: string;
}

export function TextArea({ label, description, ...props }: TextAreaProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

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
    }, [onHeightChange, props.value, textAreaRef]);

    return (
        <ReactAriaTextField {...props} className={textFieldStyle}>
            {label && <Label isRequired={props.isRequired}>{label}</Label>}
            <ReactAriaTextArea ref={textAreaRef} className={textAreaStyle} />
            {description && <Description>{description}</Description>}
            <FieldError />
        </ReactAriaTextField>
    );
}
