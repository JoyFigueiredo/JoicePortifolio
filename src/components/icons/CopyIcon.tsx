import { SVGProps } from 'react'

interface CopyIconProps extends SVGProps<SVGSVGElement> {
    title?: string;
}

export const CopyIcon = ({title, ...props}: CopyIconProps) => {
    return (
        <svg {...props}
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            {title && <title>{title}</title>} 
            <path fill='nome' d='M0 0h24v24H0z'></path>
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
    );
};
