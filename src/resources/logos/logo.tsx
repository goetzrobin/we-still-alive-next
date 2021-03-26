interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps): React.ReactElement => {
  return (
    <svg
      className={className}
      width="47"
      height="41"
      viewBox="0 0 47 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47 2.70551e-07V41H40.8158V23.6761H33.8895H6.18421V26.1509H33.3947V29.2857V32.338V34.8129V38.8551V41H8.24508e-07V34.8129H27.2105V32.338H8.24508e-07L7.86687e-07 30.9356L8.24508e-07 26.1509V23.6761V18.8913V17.4889L0 0.00226215L6.18421 0.00226188L6.18421 17.4889H13.6053L13.6053 0.00226215L19.7895 0.00226188L19.7895 17.4889H27.2105V0.00226215L27.7053 0.00226212V2.70551e-07L40.8158 0L46.9175 2.70551e-07H47ZM33.8895 17.4889H33.3947V6.18712H40.8158V17.4889H33.8895Z"
        fill="#222222"
      />
    </svg>
  );
};

export default Logo;
