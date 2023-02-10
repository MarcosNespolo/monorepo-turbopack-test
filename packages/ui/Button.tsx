type ButtonProps = {
  text: string
  color: string
  className?: string
  top?: string
  left?: string
  onClick: () => void
}

export const Button = ({ color, text, className, top, left, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, top: top, left: left }}
      className={`hover:brightness-110 h-24 w-fit p-4 rounded-lg shadow-lg text-white font-semibold border border-white ${className}`}
    >
      {text}
    </button>
  )
};
