import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const BottomNavBlock = styled.ul`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
`

const BottomNav: FunctionComponent = () => {
  return (
    <BottomNavBlock>
      <li>
        <Link href="/">
          <a>HashTag</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Write</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Notification</a>
        </Link>
      </li>
      <li>
        <img src="../static/icon/user.svg" alt="마이페이지" />
        <Link href="/mypage">
          <a>MyPage</a>
        </Link>
      </li>
    </BottomNavBlock>
  )
}

export default BottomNav
