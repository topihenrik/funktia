import { tv } from "tailwind-variants";
import { ReactNode } from "react";
import {
    Dialog as ReactAriaDialog,
    Modal as ReactAriaModal,
    ModalOverlay as ReactAriaModalOverlay,
    ModalOverlayProps
} from "react-aria-components";

const overlayStyle = tv({
    base: [
        "fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-20 bg-black/[15%] flex items-center justify-center p-4 text-center backdrop-blur-sm"
    ],
    variants: {
        isEntering: {
            true: "animate-in fade-in duration-200 ease-out"
        },
        isExiting: {
            true: "animate-out fade-out duration-200 ease-in"
        }
    }
});

const modalStyle = tv({
    base: ["w-full max-w-md max-h-full bg-white text-left align-middle shadow-2xl"],
    variants: {
        isEntering: {
            true: "animate-in zoom-in-105 ease-out duration-200"
        },
        isExiting: {
            true: "animate-out zoom-out-95 ease-in duration-200"
        }
    }
});

const dialogBoxStyles = tv({
    base: "p-4"
});

interface ModalProps extends ModalOverlayProps {
    /**
     * Dialog content elements.
     */
    children: ReactNode;
    /**
     * Additional tailwind styles for the element.
     */
    className?: string;
    /**
     * Whether the overlay is open by default (controlled).
     */
    isOpen: boolean;
    /**
     * Handler that is called when the overlay's open state changes.
     */
    onChange?: ((value: boolean) => void) | undefined;
}

export function Modal({ children, ...props }: ModalProps) {
    const onOpenChange = (nextValue: boolean) => {
        if (props.onChange) props.onChange(nextValue);
    };

    return (
        <ReactAriaModalOverlay
            {...props}
            isDismissable
            isOpen={props.isOpen}
            onOpenChange={onOpenChange}
            className={overlayStyle}
        >
            <ReactAriaModal className={modalStyle}>
                <ReactAriaDialog>
                    <div className={dialogBoxStyles()}>{children}</div>
                </ReactAriaDialog>
            </ReactAriaModal>
        </ReactAriaModalOverlay>
    );
}
