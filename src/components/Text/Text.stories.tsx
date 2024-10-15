import { StoryObj, Meta } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
    component: Text,
    title: "Text",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        children:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum facilisis purus. Ut mi felis, mollis a purus ac, eleifend condimentum ligula. Proin ultricies sapien quis volutpat pellentesque."
    },
    render: (args) => {
        return (
            <div className="w-64">
                <Text>{args.children}</Text>
            </div>
        );
    }
};
