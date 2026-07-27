import { Link } from "react-router-dom";

interface Props {
  text: string;
  linkText: string;
  to: string;
}

export default function AuthFooter({
  text,
  linkText,
  to,
}: Props) {
  return (
    <div className="pt-2 text-center text-sm">
      {text}{" "}
      <Link
        to={to}
        className="font-semibold text-blue-600 hover:underline"
      >
        {linkText}
      </Link>
    </div>
  );
}