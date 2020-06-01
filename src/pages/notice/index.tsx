import React, { FunctionComponent } from 'react'
import MainLayout from 'components/MainLayout'
import NoticeScreen from 'screens/NoticeScreen'

const NoticePage: FunctionComponent = () => {
  return (
    <MainLayout>
      <NoticeScreen />
    </MainLayout>
  )
}

export default NoticePage
