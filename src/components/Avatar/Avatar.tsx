import { Icon } from "../Icon";

interface AvatarProps {
    /**
     * Source location of the avatar file
     */
    src?: string;
}

export function Avatar({ src }: AvatarProps) {
    if (!src) {
        return (
            <div className="flex justify-center items-center w-10 h-10 rounded-[100%]">
                <Icon name="User" size="40" />
            </div>
        );
    }

    return <img className="w-10 h-10 rounded-[100%]" src={src} alt="avatar" />;
}
