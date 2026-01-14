import "./Button-Style.css";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="btn-primary body-20-semi color-neutral-000"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
