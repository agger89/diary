import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Image = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  margin-right: 8px;
  background-image: ${({ name }) => `url('/static/images/${name}.png')`};
  background-size: contain;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
`

interface ProfileImageProps {
  width: number
  height: number
}

const ProfileImage: FunctionComponent<ProfileImageProps> = ({ width, height }) => {
  return (
    <Link href="/mypage">
      <Image name="mark_zuckerberg" width={width} height={height} />
    </Link>
  )
}

export default ProfileImage
