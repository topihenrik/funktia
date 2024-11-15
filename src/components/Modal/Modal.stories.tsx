import { StoryObj, Meta } from "@storybook/react";
import { Modal } from "./Modal";
import { Dispatch, SetStateAction, useState } from "react";
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

interface ModalExampleContentProps {
    setOpen: Dispatch<SetStateAction<boolean>>;
}

function ModalExampleContent({ setOpen }: ModalExampleContentProps) {
    return (
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
    );
}

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
                    <ModalExampleContent setOpen={setOpen} />
                </Modal>
            </div>
        );
    }
};

export const Sizes: Story = {
    render: () => {
        const [isOpenSm, setOpenSm] = useState(false);
        const [isOpenMd, setOpenMd] = useState(false);
        const [isOpenLg, setOpenLg] = useState(false);

        const onChangeSm = (nextValue: boolean) => {
            setOpenSm(nextValue);
        };
        const onChangeMd = (nextValue: boolean) => {
            setOpenSm(nextValue);
        };
        const onChangeLg = (nextValue: boolean) => {
            setOpenSm(nextValue);
        };

        return (
            <div className="flex gap-4">
                <Button onPress={() => setOpenSm(true)} color={"primary"}>
                    sm
                </Button>
                <Modal size="sm" isOpen={isOpenSm} onChange={onChangeSm}>
                    <ModalExampleContent setOpen={setOpenSm} />
                </Modal>
                <Button onPress={() => setOpenMd(true)} color={"primary"}>
                    md
                </Button>
                <Modal size="md" isOpen={isOpenMd} onChange={onChangeMd}>
                    <ModalExampleContent setOpen={setOpenMd} />
                </Modal>
                <Button onPress={() => setOpenLg(true)} color={"primary"}>
                    lg
                </Button>
                <Modal size="lg" isOpen={isOpenLg} onChange={onChangeLg}>
                    <ModalExampleContent setOpen={setOpenLg} />
                </Modal>
            </div>
        );
    }
};
