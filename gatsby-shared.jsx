import React from "react"
import { Script } from "gatsby"

export const wrapPageElement = ({element}) => {
  return (
    <>
      {element}
      <Script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charSet="UTF-8" />
    </>
  )
}
