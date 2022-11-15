import { Stack } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Stack>
        <Stack>
          <img src={require ('../assets/logo-white.png')} alt='logo image' />
          <Stack >
            <img src={require ('../assets/fb.png')} alt='facebook logo' />
            <img src={require ('../assets/IG.png')} alt='instagram logo' />
            <img src={require ('../assets/twitter.png')} alt='twitter logo' />
          </Stack>
          <p><span>&copy;</span> 2022 Metabnb </p>
        </Stack>
        <Stack>
            <ul>
              <li>Community</li>
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>

            <ul>
              <li>Places</li>
              <li>Castle</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn more</li>
            </ul>

            <ul>
              <li>About us</li>
              <li>Road map</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
        </Stack>
    </Stack>
  )
}

export default Footer