import type { HeadingProps } from "../types/component.types.ts";

export default function Heading({
  children,
  align = "start",
  lineColor = "bg-blue-600",
  type = "h2",
}: HeadingProps) {
  switch (type) {
    case "h3":
      return (
        <div className={`flex flex-col items-${align} gap-2`}>
          <h3 className={`text-xl font-semibold text-gray-800`}>
            {children}
          </h3>
        </div>
      )
    case "h2":
      return (
        <div className={`flex flex-col items-${align} gap-2`}>
          <div className={`w-12 h-1 rounded ${lineColor}`}></div>
          <h2 className={`text-3xl font-semibold text-gray-800`}>
            {children}
          </h2>
        </div>
      )
    case "h1":
      return (
        <div className={`flex flex-col items-${align} gap-2`}>
          <h1 className="text-6xl text-white font-bold">{children}</h1>
        </div>
      );

  }
}

