"use client"

import Link from "next/link"
import { FC } from "react"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <div className="pl-16">
      <div className="mb-2 pl-14">
        <img src="../sensegrass_logo.jpeg" alt="logo" width="100px" height="100px"/>
      </div>

      <div className="text-4xl font-bold tracking-wide">Agri ChatBot</div>
    </div>
  )
}
