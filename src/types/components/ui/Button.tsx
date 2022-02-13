export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonType: 'primary' | 'secondary';
    label: string;
}