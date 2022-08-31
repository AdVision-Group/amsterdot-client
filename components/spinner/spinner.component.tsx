import styled from "styled-components"

interface IProps {
	variant?: "artist" | "promoter" | "venue" | "admin"
}

const Spinner: React.FC<IProps> = ({ variant }) => {
	return <SpinnerContainer data-testid="spinner" variant={variant} />
}

export default Spinner

export const SpinnerContainer = styled.div<IProps>`
	border: 5px solid transparent;
	border-top: 5px solid ${({ theme }) => theme.color.primary};
	border-radius: 50%;
	width: 38px;
	height: 38px;
	animation: spin 800ms linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
