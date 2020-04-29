import React, { FunctionComponent } from 'react'
import MainLayout from 'components/MainLayout'
import HashtagScreen from 'screens/HashtagScreen'

const HashtagPage: FunctionComponent = () => {
  return (
    <MainLayout>
      <HashtagScreen />
    </MainLayout>
  )
}

export default HashtagPage
