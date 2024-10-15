import { StoryObj, Meta } from "@storybook/react";
import { Divider } from "./Divider";
import { Text } from "../Text";
import { Heading } from "../Heading";

const meta: Meta<typeof Divider> = {
    component: Divider,
    title: "Divider",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
    render: () => {
        return (
            <div className="w-96 rounded p-4">
                <Divider />
            </div>
        );
    }
};

export const Variants: Story = {
    render: () => {
        return (
            <div className="flex flex-col gap-4">
                <div className="w-96 bg-gray-100 rounded p-4">
                    <Heading className="text-center" level={3}>
                        No children
                    </Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum facilisis purus. Ut
                        mi felis, mollis a purus ac, eleifend condimentum ligula. Proin ultricies sapien quis volutpat
                        pellentesque.
                    </Text>
                    <Divider />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum facilisis purus. Ut
                        mi felis, mollis a purus ac, eleifend condimentum ligula. Proin ultricies sapien quis volutpat
                        pellentesque.
                    </Text>
                </div>
                <div className="w-96 bg-gray-100 rounded p-4">
                    <Heading className="text-center" level={3}>
                        Children
                    </Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum facilisis purus. Ut
                        mi felis, mollis a purus ac, eleifend condimentum ligula. Proin ultricies sapien quis volutpat
                        pellentesque.
                    </Text>
                    <Divider>Hello World!</Divider>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum facilisis purus. Ut
                        mi felis, mollis a purus ac, eleifend condimentum ligula. Proin ultricies sapien quis volutpat
                        pellentesque.
                    </Text>
                </div>
            </div>
        );
    }
};
