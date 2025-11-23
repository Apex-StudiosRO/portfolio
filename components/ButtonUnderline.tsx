import React from 'react'

const ButtonUnderline = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  return <span className="text-white/50 text-lg hover:cursor-pointer hover:text-blue-300 hover:underline transition duration-200 linear underline-offset-4">{children}</span>
}

export default ButtonUnderline
