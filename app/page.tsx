import { Metadata } from "next"
import { MainNav } from "@/components/main-nav"

import { Overview } from "@/components/sections/overview"
import { Energy } from "@/components/sections/energy"

export const metadata: Metadata = {
  title: "MEPP",
  description: "Minecraft ME System Interface Program",
}

export default function Home() {
  return (
    <>
      <div className="flex-col flex">
        <div className="border-b bg-gray-50">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
          </div>
        </div>

        <Overview/>

        <Energy/>

      </div>
    </>
  )
}
