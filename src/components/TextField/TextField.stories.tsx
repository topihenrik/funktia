import { TextField } from "./TextField";
import { StoryObj, Meta } from "@storybook/react";
import { Form } from "react-aria-components";
import { Button } from "../Button";
import { useState } from "react";

const meta: Meta<typeof TextField> = {
    component: TextField,
    title: "TextField",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {
        placeholder: "First Name",
        label: "First Name"
    }
};

export const Variants: Story = {
    render: () => {
        return (
            <div className="box-content flex flex-col gap-2 w-64">
                <TextField value="John" type="text" placeholder="First Name" label="First Name" />
                <TextField value="Doe" type="text" placeholder="Last Name" label="Last Name" />
                <TextField
                    value="john.doe"
                    type="text"
                    placeholder="Username"
                    label="Username"
                    startIcon="UserRound"
                    endIcon="Copy"
                />
                <TextField value="john.doe@mail.com" type="email" placeholder="Email" label="Email" startIcon="Mail" />
                <TextField
                    value="password123"
                    type="password"
                    placeholder="Password"
                    label="Password"
                    startIcon="KeyRound"
                />
            </div>
        );
    }
};

export const Disabled: Story = {
    render: () => {
        return (
            <div className="box-content flex flex-col gap-2 w-64">
                <TextField value="John" type="text" placeholder="First Name" label="First Name" isDisabled={true} />
                <TextField value="Doe" type="text" placeholder="Last Name" label="Last Name" isDisabled={true} />
                <TextField
                    value="john.doe"
                    type="text"
                    placeholder="Username"
                    label="Username"
                    isDisabled={true}
                    startIcon="UserRound"
                    endIcon="Copy"
                />
                <TextField
                    value="john.doe@mail.com"
                    type="email"
                    placeholder="Email"
                    label="Email"
                    isDisabled={true}
                    startIcon="Mail"
                />
                <TextField
                    value="password123"
                    type="password"
                    placeholder="Password"
                    label="Password"
                    isDisabled={true}
                    startIcon="KeyRound"
                />
            </div>
        );
    }
};

export const Error: Story = {
    args: {
        placeholder: "First Name",
        label: "First Name"
    },
    render: () => {
        const [firstName, setFirstName] = useState("John");
        const [lastName, setLastName] = useState("Doe");

        return (
            <Form
                validationErrors={{
                    firstName: "Sorry, this first name is invalid.",
                    lastName: "Sorry, this last name is invalid."
                }}
                className="box-content flex flex-col gap-2 w-64"
            >
                <TextField
                    id="firstName"
                    onChange={setFirstName}
                    value={firstName}
                    type="text"
                    placeholder="First Name"
                    label="First Name"
                    name="firstName"
                    isRequired={true}
                />
                <TextField
                    id="lastName"
                    onChange={setLastName}
                    value={lastName}
                    type="text"
                    placeholder="Last Name"
                    label="Last Name"
                    name="lastName"
                    isRequired
                />
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
};
