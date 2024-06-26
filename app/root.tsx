import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

import type { LinksFunction } from '@remix-run/node'
import * as stylex from '@stylexjs/stylex';

// import './styles/index.css'
import $styles from './styles/index.css?url'
import { colors } from '~/styles/colors.stylex'

export const links: LinksFunction = () => [
  // Preload CSS as a resource to avoid render blocking
  { rel: 'preload', href: $styles, as: 'style' },
  // These should match the css preloads above to avoid css as render blocking resource
  { rel: 'stylesheet', href: $styles }
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body {...stylex.props(styles.body)}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

const styles = stylex.create({
  body: {
    color: colors.foreground
  }
})