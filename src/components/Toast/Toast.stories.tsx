import { StoryObj, Meta } from "@storybook/react";
import { Toast } from "./Toast";
import { Button } from "../Button";
import { GlobalToastRegion, toastQueue } from "./GlobalToastRegion";

const meta: Meta<typeof Toast> = {
    component: Toast,
    title: "Toast",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
    render: () => {
        return (
            <div className="flex flex-col gap-4">
                <Button
                    color="primary"
                    onPress={() => toastQueue.add({ element: "Update incoming", severity: "info" })}
                >
                    Show primary
                </Button>
                <Button
                    color="success"
                    onPress={() => toastQueue.add({ element: "Post created", severity: "success" })}
                >
                    Show success
                </Button>
                <Button
                    color="warning"
                    onPress={() => toastQueue.add({ element: "Enable 2FA Enable 2FA Enable 2FA", severity: "warning" })}
                >
                    Show warning
                </Button>
                <Button
                    color="danger"
                    onPress={() => toastQueue.add({ element: "Account deleted", severity: "danger" })}
                >
                    Show danger
                </Button>
                <GlobalToastRegion />
            </div>
        );
    }
};
