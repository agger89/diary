import React, { FunctionComponent } from 'react'
import MainLayout from 'components/MainLayout'
import DiaryScreen from 'screens/DiaryScreen'

const DiaryPage: FunctionComponent = () => {
  return (
    <MainLayout>
      <DiaryScreen />
    </MainLayout>
  )
}

export default DiaryPage
