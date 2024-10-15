import Button from "./Button";
import { StoryObj, Meta } from "@storybook/react";
import Heading from "../Heading/Heading";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Button",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Button",
        color: "primary"
    }
};

export const Colors: Story = {
    render: () => {
        return (
            <div className="grid grid-cols-3 gap-4">
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="error">Error</Button>
            </div>
        );
    }
};
export const Icons: Story = {
    render: () => {
        return (
            <div className="grid grid-cols-3 gap-4 justify-items-center">
                <Button color="primary" startIcon="KeyRound">
                    Button
                </Button>
                <Button color="primary" endIcon="ChevronRight">
                    Button
                </Button>
                <Button color="primary" startIcon="KeyRound" endIcon="ChevronRight">
                    Button
                </Button>
                <Button color="secondary" startIcon="KeyRound">
                    Button
                </Button>
                <Button color="secondary" endIcon="ChevronRight">
                    Button
                </Button>
                <Button color="secondary" startIcon="KeyRound" endIcon="ChevronRight">
                    Button
                </Button>
                <Button color="success" startIcon="ShieldCheck">
                    Button
                </Button>
                <Button color="success" endIcon="ChevronRight">
                    Button
                </Button>
                <Button color="success" startIcon="ShieldCheck" endIcon="ChevronRight">
                    Button
                </Button>
                <Button color="warning" startIcon="TriangleAlert">
                    Button
                </Button>
                <Button color="warning" endIcon="ChevronRight">
                    Button
                </Button>
                <Button color="warning" startIcon="TriangleAlert" endIcon="ChevronRight">
                    Button
                </Button>
                <Button color="error" startIcon="CircleAlert">
                    Button
                </Button>
                <Button color="error" endIcon="ChevronRight">
                    Button
                </Button>
                <Button color="error" startIcon="CircleAlert" endIcon="ChevronRight">
                    Button
                </Button>
            </div>
        );
    }
};

export const Disabled: Story = {
    render: () => {
        return (
            <div className="grid grid-cols-3 gap-4">
                <Button color="primary" isDisabled={true}>
                    Primary
                </Button>
                <Button color="secondary" isDisabled={true}>
                    Secondary
                </Button>
                <Button color="success" isDisabled={true}>
                    Success
                </Button>
                <Button color="warning" isDisabled={true}>
                    Warning
                </Button>
                <Button color="error" isDisabled={true}>
                    Error
                </Button>
            </div>
        );
    }
};

export const Loading: Story = {
    render: () => {
        return (
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <Heading className="text-center" level={4}>
                        Loading button
                    </Heading>
                    <div className="grid grid-cols-3 gap-4">
                        <Button color="primary" isLoading={true}>
                            Button
                        </Button>
                        <Button color="secondary" isLoading={true}>
                            Button
                        </Button>
                        <Button color="success" isLoading={true}>
                            Button
                        </Button>
                        <Button color="warning" isLoading={true}>
                            Button
                        </Button>
                        <Button color="error" isLoading={true}>
                            Button
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Heading className="text-center" level={4}>
                        with starIcon and endIcon
                    </Heading>
                    <div className="grid grid-cols-3 gap-4">
                        <Button color="primary" isLoading={true} startIcon="KeyRound" endIcon="ChevronRight">
                            Button
                        </Button>
                        <Button color="secondary" isLoading={true} startIcon="KeyRound" endIcon="ChevronRight">
                            Button
                        </Button>
                        <Button color="success" isLoading={true} startIcon="KeyRound" endIcon="ChevronRight">
                            Button
                        </Button>
                        <Button color="warning" isLoading={true} startIcon="KeyRound" endIcon="ChevronRight">
                            Button
                        </Button>
                        <Button color="error" isLoading={true} startIcon="KeyRound" endIcon="ChevronRight">
                            Button
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
};
