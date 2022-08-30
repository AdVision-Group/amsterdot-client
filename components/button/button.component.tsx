import { ButtonContainer } from "./button.styles"

export interface IButtonProps {
	left?: string
	right?: string
	top?: string
	bottom?: string
	type?: "button" | "submit" | "reset" | undefined
	disabled?: boolean
	disabledHover?: boolean
	width?: string
	rounded?: boolean
	onClick?: (e: any) => void
	loading?: boolean
	outline?: boolean | string
}

const Button: React.FC<IButtonProps> = ({
	children,
	type,
	loading,
	onClick,
	disabled,
	disabledHover,
	...rest
}) => {
	return (
		<ButtonContainer
			{...rest}
			type={type}
			onClick={onClick}
			whileHover={{
				scale: disabledHover || disabled ? 1 : 1.05,
			}}
			whileTap={{
				scale: disabledHover || disabled ? 1 : 0.97,
			}}
			disabled={disabled}
		>
			{loading ? "loading..." : children}
		</ButtonContainer>
	)
}

export default Button
