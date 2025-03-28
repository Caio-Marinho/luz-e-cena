export type ButtonProps = {
    variavel: "default" | "icon";
    aoClicar?: MouseEventHandler<HTMLButtonElement>
} & React.ButtonHTMLAttributes<HTMLButtonElement>;