import React from 'react'
import Link from 'gatsby-link'

import light_src from '../img/logotype_light.svg'
import dark_src from '../img/logotype_dark.svg'

const Logotype = () => (
  <figure className="image" >
    <img src={dark_src} alt="Skadebyrån" />
  </figure>
)

export default Logotype
