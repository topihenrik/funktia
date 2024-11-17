import { StoryObj, Meta } from "@storybook/react";
import { DatePicker } from "./DatePicker";
import { parseDate } from "@internationalized/date";
import { useState } from "react";
import { Form } from "react-aria-components";
import { Button } from "../Button";

const meta: Meta<typeof DatePicker> = {
    component: DatePicker,
    title: "DatePicker",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = { args: { label: "Date" } };

export const ControlledWithInitialValue: Story = {
    render: () => {
        const [date, setDate] = useState(parseDate("2024-08-22"));

        return <DatePicker value={date} onChange={setDate} label="Date" />;
    }
};

export const LimitedRange: Story = {
    render: () => {
        const [date, setDate] = useState(parseDate("2025-05-15"));

        return (
            <DatePicker
                minValue={parseDate("2025-05-05")}
                maxValue={parseDate("2025-05-25")}
                value={date}
                onChange={setDate}
                label="Date"
            />
        );
    }
};

export const Description: Story = { args: { description: "Pick free vacation" } };

export const Required: Story = { args: { label: "Date", isRequired: true } };

export const Disabled: Story = { args: { label: "Disabled", isDisabled: true } };

export const Error: Story = {
    render: () => {
        const [date, setDate] = useState(parseDate("2025-05-15"));

        return (
            <Form
                validationErrors={{
                    date: "Invalid date"
                }}
                className="box-content flex flex-col gap-2 w-64"
            >
                <DatePicker name="date" value={date} onChange={setDate} label="Date" />
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
};
