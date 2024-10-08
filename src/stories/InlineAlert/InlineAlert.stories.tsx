import { StoryObj, Meta } from "@storybook/react";
import InlineAlert from "./InlineAlert";

const meta: Meta<typeof InlineAlert> = {
    component: InlineAlert,
    title: "InlineAlert",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof InlineAlert>;

export const Default: Story = {
    args: {
        message: "Hello"
    },
    render: (args) => {
        return (
            <div className="w-64">
                <InlineAlert color="info" message="Informative message" />
            </div>
        );
    }
};

export const Colors: Story = {
    render: (args) => {
        return (
            <div className="flex flex-col gap-4 w-64">
                <InlineAlert color="info" message="Informative message" />
                <InlineAlert color="success" message="Success message" />
                <InlineAlert color="warning" message="Warning message" />
                <InlineAlert color="error" message="Error message" />
            </div>
        );
    }
};
