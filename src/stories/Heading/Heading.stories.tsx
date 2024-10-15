import Heading from "./Heading";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<typeof Heading> = {
    component: Heading,
    title: "Heading",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
    args: {
        children: "Lorem Ipsum",
        level: 1
    }
};

export const Levels: Story = {
    args: {
        children: "Lorem Ipsum"
    },
    render: (args) => {
        return (
            <div>
                <Heading level={1}>{args.children}</Heading>
                <Heading level={2}>{args.children}</Heading>
                <Heading level={3}>{args.children}</Heading>
                <Heading level={4}>{args.children}</Heading>
                <Heading level={5}>{args.children}</Heading>
                <Heading level={6}>{args.children}</Heading>
            </div>
        );
    }
};
