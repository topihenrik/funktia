import { tv } from "tailwind-variants";
import { useToast, AriaToastProps } from "@react-aria/toast";
import { ReactNode, useRef } from "react";
import { ClickElement } from "../ClickElement";
import { ToastState } from "@react-stately/toast";
import { getIcon } from "../../utils/getIcon";

const toastStyle = tv({
    base: ["flex items-center gap-4 p-2 rounded w-80 justify-between"],
    variants: {
        color: {
            info: ["bg-blue-600 text-white"],
            success: ["bg-green-600 text-white"],
            warning: ["bg-yellow-600 text-white"],
            error: ["bg-red-600 text-white"]
        },
        isEntering: {
            true: "animate-in slide-in-from-bottom duration-300"
        },
        isExiting: {
            true: "animate-out fade-out duration-300"
        }
    }
});

const containerStyle = tv({
    base: "overflow-hidden flex gap-2 items-center"
});

interface ToastProps<T> extends AriaToastProps<T> {
    state: ToastState<T>;
}

export interface ToastContent {
    element: ReactNode;
    color: "info" | "success" | "warning" | "error";
}

export function Toast<T extends ToastContent>({ state, ...props }: ToastProps<T>) {
    const ref = useRef<HTMLDivElement>(null);
    const { toastProps, contentProps, titleProps, closeButtonProps } = useToast(props, state, ref);
    console.log("props.toast.animation", props.toast.animation);
    return (
        <div
            {...toastProps}
            ref={ref}
            className={toastStyle({
                color: props.toast.content.color,
                isEntering: props.toast.animation === "entering",
                isExiting: props.toast.animation === "exiting"
            })}
            data-animation={props.toast.animation}
            onAnimationEnd={() => {
                if (props.toast.animation === "exiting") {
                    state.remove(props.toast.key);
                }
            }}
        >
            <div {...contentProps} className={containerStyle()}>
                <div>{getIcon(props.toast.content.color)}</div>
                <div {...titleProps}>{props.toast.content.element}</div>
            </div>
            <ClickElement {...closeButtonProps} variant="button" icon="X" />
        </div>
    );
}
