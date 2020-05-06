import React, { FunctionComponent } from 'react'
import MainLayout from 'components/MainLayout'
import WriteScreen from 'screens/WriteScreen'

const WritePage: FunctionComponent = () => {
  return (
    <MainLayout>
      <WriteScreen />
    </MainLayout>
  )
}

export default WritePage
