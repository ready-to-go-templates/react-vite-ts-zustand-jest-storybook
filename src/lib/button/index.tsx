import React from "react"

interface ButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, onClick, ...rest } = props
    return (
      <button ref={ref} onClick={onClick} {...rest}>
        {children}
      </button>
    )
  },
)

export default React.memo(Button)
