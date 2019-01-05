import React from 'react'
import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />

      <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
      <meta charset="utf-8" />
      <meta name='theme-color' content='#000000' />
      <link rel='icon' href='/static/favicon.ico' />

      <title>Meetup GDG Divinópolis</title>
    </Head>
    <main>
      { children }
      <style jsx global>{`
        * {
          font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
        }
        body {
          margin: 0;
          padding: 25px 50px;
        }
      `}</style>
    </main>
  </div>
)
