import type { Icon } from "../types";

const LeftArrow: Icon = props => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className={props.className}
        width={props.width}
        height={props.height}
        fill={props.fill || "#000000"}>
        <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
    </svg>
);

export default LeftArrow;
