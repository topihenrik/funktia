import { StoryObj, Meta } from "@storybook/react";
import { TextArea } from "./TextArea";
import { useState } from "react";
import { Form } from "react-aria-components";
import { Button } from "../Button";

const meta: Meta<typeof TextArea> = {
    component: TextArea,
    title: "TextArea",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    args: {
        value: "Lorem ipsum",
        label: "Label"
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);

        return <TextArea {...args} value={value} onChange={setValue} />;
    }
};

export const Description: Story = {
    args: {
        label: "Description",
        value: "Lorem ipsum",
        description: "Lorem ipsum"
    }
};

export const Required: Story = {
    args: {
        label: "Lorem ipsum",
        isRequired: true
    }
};

export const Disabled: Story = {
    args: {
        label: "Disabled",
        isDisabled: true
    }
};

export const Error: Story = {
    args: {
        value: "Lorem ipsum",
        label: "Error"
    },
    render: (args) => {
        const [content, setContent] = useState(args.value);

        return (
            <Form
                validationErrors={{
                    content: "Lorem ipsum not allowed."
                }}
                className="box-content flex flex-col gap-2 w-64"
            >
                <TextArea
                    id="content"
                    onChange={setContent}
                    value={content}
                    type="text"
                    label={args.label}
                    name="content"
                    isRequired
                />
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
};
