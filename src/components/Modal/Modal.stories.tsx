import { StoryObj, Meta } from "@storybook/react";
import { Modal } from "./Modal";
import { useState } from "react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { TextField } from "../TextField";

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: "Modal",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: () => {
        const [isOpen, setOpen] = useState(false);

        const onChange = (nextValue: boolean) => {
            setOpen(nextValue);
        };

        return (
            <div className="flex gap-4">
                <Button onPress={() => setOpen(true)} color={"primary"}>
                    Open
                </Button>
                <Modal isOpen={isOpen} onChange={onChange}>
                    <div className="flex flex-col gap-4">
                        <Heading level={3}>Delete account</Heading>
                        <div>
                            <Text>Type your credentials to confirm account deletion</Text>
                            <TextField label="Username" placeholder="Username" />
                            <TextField label="Password" type="password" placeholder="Password" />
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button onPress={() => setOpen(false)} color="secondary">
                                Cancel
                            </Button>
                            <Button onPress={() => setOpen(false)} color="error">
                                Delete
                            </Button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
};
