import {
    Button as ReactAriaButton,
    Calendar as ReactAriaCalendar,
    CalendarCell as ReactAriaCalendarCell,
    CalendarGrid as ReactAriaCalendarGrid,
    DateInput as ReactAriaDateInput,
    DatePicker as ReactAriaDatePicker,
    DatePickerProps as ReactAriaDatePickerProps,
    DateSegment as ReactAriaDateSegment,
    Dialog as ReactAriaDialog,
    Group as ReactAriaGroup,
    Heading as ReactAriaHeading,
    Popover as ReactAriaPopover
} from "react-aria-components";
import { Label } from "../Label/Label";
import { tv } from "tailwind-variants";
import { Icon } from "../Icon";
import { CalendarDate } from "@internationalized/date";
import { FieldError } from "../FieldError/FieldError";
import { Description } from "../Description/Description";

const datePickerStyle = tv({
    variants: {
        isDisabled: {
            true: "text-gray-500 opacity-50"
        }
    }
});

const dateSegmentStyle = tv({
    variants: {
        isPlaceholder: {
            true: "text-gray-400"
        }
    }
});

const buttonStyle = tv({
    base: "ml-[-1.7rem] flex justify-center gap-3 items-center font-bold capitalize rounded subpixel-antialiased select-none w-4",
    variants: {
        isFocused: {
            true: "outline-none"
        },
        isFocusVisible: {
            true: "outline-2 outline-gray-800"
        }
    }
});

const calendarButtonStyle = tv({
    base: "h-fit w-fit",
    variants: {
        isFocused: {
            true: "outline-none"
        },
        isFocusVisible: {
            true: "outline-2 outline-gray-800"
        },
        isDisabled: {
            true: "opacity-0"
        }
    }
});

const dateInputStyle = tv({
    base: 'min-w-36 flex grow border-2 border-gray-800 rounded-md p-2 text-black"',
    variants: {
        isDisabled: {
            true: "border-gray-500 text-gray-500 hover:border-gray-500 cursor-not-allowed"
        },
        isFocusWithin: {
            true: "border-blue-600"
        },
        isInvalid: {
            true: "border-red-600"
        }
    }
});

const calendarCellStyle = tv({
    base: "flex justify-center items-center p-0.5 box-border w-6 h-7",
    variants: {
        isOutsideVisibleRange: {
            true: "opacity-0"
        },
        isDisabled: {
            true: "text-gray-300"
        },
        isSelected: {
            true: "border-2 border-blue-600 rounded"
        }
    }
});

export interface DatePickerProps extends ReactAriaDatePickerProps<CalendarDate> {
    /**
     * Description text
     */
    description?: string;
    /**
     * Label text
     */
    label?: string;
}

export function DatePicker({ description, label, ...props }: DatePickerProps) {
    return (
        <ReactAriaDatePicker className={datePickerStyle} {...props}>
            <Label isRequired={props.isRequired}>{label}</Label>
            <div>
                <ReactAriaGroup className="flex w-fit items-center">
                    <ReactAriaDateInput className={dateInputStyle}>
                        {(segment) => <ReactAriaDateSegment className={dateSegmentStyle} segment={segment} />}
                    </ReactAriaDateInput>
                    <ReactAriaButton className={buttonStyle}>
                        <Icon name="Calendar" />
                    </ReactAriaButton>
                </ReactAriaGroup>
                {description && <Description>{description}</Description>}
                <FieldError />
            </div>
            <ReactAriaPopover>
                <ReactAriaDialog className="bg-white rounded border-2 border-gray-600">
                    <ReactAriaCalendar className="p-2">
                        <div className="flex justify-center items-center gap-1">
                            <ReactAriaButton className={calendarButtonStyle} slot="previous">
                                <Icon name="ChevronLeft" />
                            </ReactAriaButton>
                            <ReactAriaHeading />
                            <ReactAriaButton className={calendarButtonStyle} slot="next">
                                <Icon name="ChevronRight" />
                            </ReactAriaButton>
                        </div>
                        <ReactAriaCalendarGrid>
                            {(date) => <ReactAriaCalendarCell className={calendarCellStyle} date={date} />}
                        </ReactAriaCalendarGrid>
                    </ReactAriaCalendar>
                </ReactAriaDialog>
            </ReactAriaPopover>
        </ReactAriaDatePicker>
    );
}
