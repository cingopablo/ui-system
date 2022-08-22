import { Meta } from '@storybook/react'
import React from 'react'

import { Codebox } from '../Codebox'

export default {
  title: 'UI System/Codebox',
  component: Codebox,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'var(--color-background)' },
        { name: 'dark', value: 'var(--color-background)' },
      ],
    },
  },
} as Meta

const code =
  `import * as querystring from 'node:querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
` +
  "const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')" +
  `
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      ` +
  'Authorization: `Basic ${basic}`,' +
  `
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      ` +
  'Authorization: `Bearer ${access_token}`,' +
  `
    },
  })
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
     ` +
  'Authorization: `Bearer ${access_token}`,' +
  `
    },
  })
}
`

export const _Codebox = () => {
  return (
    <React.Fragment>
      {/*<Codebox autorun />*/}
      <Codebox
        files={{
          '/App.js': code,
        }}
        options={{
          readOnly: true,
        }}
        autorun
        editorOnly
      />
    </React.Fragment>
  )
}
