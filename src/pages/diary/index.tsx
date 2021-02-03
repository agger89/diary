import React, { FunctionComponent } from 'react'
import PageLayout from 'components/PageLayout'
import DiaryScreen from 'screens/DiaryScreen'

const DiaryPage: FunctionComponent = () => {
  return (
    <PageLayout>
      <DiaryScreen />
    </PageLayout>
  )
}

export default DiaryPage
