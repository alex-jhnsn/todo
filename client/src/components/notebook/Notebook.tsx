import styled from "styled-components";

const NotebookContainer = styled.svg`
    margin: auto auto;
    -webkit-filter: drop-shadow(rgba(149, 157, 165, 0.2) 0px 8px 24px);
    filter: drop-shadow(rgba(149, 157, 165, 0.2) 0px 8px 24px);
`;

interface NotebookProps {
  children: React.ReactNode
}

export default function Notebook ({ children }: NotebookProps) {
  return (
    <NotebookContainer height="520" width="400">
      <g stroke="#AA272F" strokeWidth="20" strokeLinecap="round">
        <path d="M47 15 l15 40" />
        <path d="M89.5 15 l15 40" />
        <path d="M132 15 l15 40" />
        <path d="M174.5 15 l15 40" />
        <path d="M217 15 l15 40" />
        <path d="M259.5 15 l15 40" />
        <path d="M302 15 l15 40" />
        <path d="M344.5 15 l15 40" />
      </g>

      <rect x="15" y="40" height="470" width="370" 
        rx="16" ry="16" fill="#10944c" stroke="#222" strokeWidth={15} />

      <g fill="#222" r="10">
        <circle cx="30" cy="55" r="15" />
        <circle cx="72.5" cy="55" r="15" />
        <circle cx="115" cy="55" r="15" />
        <circle cx="157.5" cy="55" r="15" />
        <circle cx="200" cy="55" r="15" />
        <circle cx="242.5" cy="55" r="15" />
        <circle cx="285" cy="55" r="15" />
        <circle cx="327.5" cy="55" r="15" />
        <circle cx="370" cy="55" r="15" />
      </g>

      <g stroke="#AA272F" strokeWidth="20" strokeLinecap="round">
        <path d="M32 55 l15 -40" />
        <path d="M74.5 55 l15 -40" />
        <path d="M117 55 l15 -40" />
        <path d="M159.5 55 l15 -40" />
        <path d="M202 55 l15 -40" />
        <path d="M244.5 55 l15 -40" />
        <path d="M287 55 l15 -40" />
        <path d="M329.5 55 l15 -40" />
        <path d="M372 55 l15 -40" />
      </g>

      <foreignObject x="15" y="82" width="370" height="425">
        {children}
      </foreignObject>
    </NotebookContainer>
  )
}