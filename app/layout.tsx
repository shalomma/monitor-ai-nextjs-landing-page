// import { theme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'

import { Provider } from './provider'
import React from "react";

export default function Layout(props: { children: React.ReactNode }) {
    const colorMode = "dark"
    // const colorMode = theme.config.initialColorMode

    return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
          <title></title>
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
