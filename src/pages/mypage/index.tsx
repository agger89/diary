import React, { FunctionComponent } from 'react'
import MainLayout from 'components/MainLayout'
import MypageScreen from 'screens/MypageScreen'

const Mypage: FunctionComponent = () => {
  return (
    <MainLayout>
      <MypageScreen />
    </MainLayout>
  )
}

export default Mypage
