import React, { FunctionComponent } from 'react'
import MainLayout from 'components/MainLayout'
import DiaryListScreen from 'screens/DiaryListScreen'

const DiaryListPage: FunctionComponent = () => {
  return (
    <MainLayout>
      <DiaryListScreen />
    </MainLayout>
  )
}

export default DiaryListPage
