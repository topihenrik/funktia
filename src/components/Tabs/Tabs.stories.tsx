import { StoryObj, Meta } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    title: "Tabs",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: (args) => (
        <div className="w-[500px] h-[600px]">
            <Tabs {...args} />
        </div>
    ),
    args: {
        items: [
            {
                id: "tab1",
                title: "Tab 1",
                panel: (
                    <div>
                        Donec eget feugiat ligula, ut congue metus. Donec hendrerit magna vitae urna commodo, in
                        elementum ex finibus. Quisque lacus justo, finibus vel pellentesque porttitor, mattis gravida
                        metus. Vestibulum sed diam sit amet ipsum varius vulputate sit amet vel mi. Nunc suscipit, lacus
                        a mattis viverra, magna justo mollis massa, posuere porttitor quam dui ac quam. In felis enim,
                        fringilla tempor dictum sed, rhoncus at ante. Sed luctus, massa vel dignissim maximus, felis
                        lectus pretium leo, ut ultrices risus dui sed mauris. Donec efficitur purus a cursus aliquam.
                        Maecenas ultrices sed arcu et mattis. Aliquam commodo posuere lobortis. Nulla semper ullamcorper
                        elit vel sagittis. Ut facilisis ante lacus, ac varius purus tristique at. In quis posuere
                        ligula, ut sodales neque. Nullam turpis mi, pretium ut commodo sed, vestibulum vitae ante.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </div>
                )
            },
            {
                id: "tab2",
                title: "Tab 2",
                panel: (
                    <div>
                        Aliquam eu dolor eget ipsum viverra feugiat. Ut enim dui, gravida a condimentum vitae, viverra
                        quis sem. Quisque consequat libero blandit cursus efficitur. Pellentesque consequat malesuada
                        lacinia. Nam convallis nec ligula non tempus. Etiam a tellus laoreet enim sollicitudin fringilla
                        in at arcu. Nunc sit amet mi vel felis sodales sollicitudin. In commodo faucibus tempor. Nam
                        rutrum tristique congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna
                        sapien, hendrerit nec viverra sed, blandit sed purus. Proin posuere turpis quam, id blandit
                        lacus efficitur eget. Fusce sed eros nec nibh pretium feugiat eget ac diam. In semper leo erat,
                        non scelerisque magna faucibus sit amet. Cras sed neque eu elit condimentum dictum.
                    </div>
                )
            },
            {
                id: "tab3",
                title: "Tab 3",
                panel: (
                    <div>
                        Vestibulum auctor leo placerat, sollicitudin nisi sollicitudin, porta turpis. Sed vel purus
                        nisl. Morbi rhoncus egestas ex, a venenatis est auctor eget. Mauris ut aliquet ante, id
                        pellentesque nunc. Vivamus gravida maximus posuere. Mauris consectetur nec est eu porta.
                        Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Integer ornare nec ligula ac pellentesque. Aenean maximus nisl ac ex aliquam, ut
                        feugiat orci pharetra. Etiam imperdiet lacus sapien, vitae tristique orci dictum vitae. Mauris
                        scelerisque pulvinar est, at congue arcu placerat fermentum. Aliquam convallis sapien id dolor
                        tempus porttitor. Donec est magna, egestas non arcu eu, rhoncus mollis tellus. Donec dapibus sed
                        sapien eget maximus. Nulla urna nunc, accumsan et efficitur ac, dapibus ut tellus.
                    </div>
                )
            }
        ]
    }
};
