import { Text as TextComponent, TextProps } from "@gravity-ui/uikit";
import { PropsWithChildren } from "react";

type ITextProps = Partial<TextProps> & PropsWithChildren;

export const Text = (props: ITextProps) => {
    return <TextComponent {...props}>{props.children}</TextComponent>;
};
