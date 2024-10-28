import { AriaToastRegionProps, useToastRegion } from "@react-aria/toast";
import { ToastState } from "@react-stately/toast";
import { useRef } from "react";
import { Toast, ToastContent } from "./Toast";
import { tv } from "tailwind-variants";

const toastRegionStyle = tv({
    base: "absolute bottom-4 left-1/2 flex flex-col gap-2 -translate-x-1/2"
});

interface ToastRegionProps<T> extends AriaToastRegionProps {
    state: ToastState<T>;
}

export function ToastRegion<T extends ToastContent>({ state, ...props }: ToastRegionProps<T>) {
    const ref = useRef(null);
    const { regionProps } = useToastRegion(props, state, ref);

    return (
        <div {...regionProps} ref={ref} className={toastRegionStyle()}>
            {state.visibleToasts.map((toast) => (
                <Toast key={toast.key} toast={toast} state={state} />
            ))}
        </div>
    );
}
