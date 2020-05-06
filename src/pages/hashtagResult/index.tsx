import React, { FunctionComponent } from 'react'
import MainLayout from 'components/MainLayout'
import HashtagResultScreen from 'screens/HashtagResultScreen'

const HashtagResultPage: FunctionComponent = () => {
  return (
    <MainLayout>
      <HashtagResultScreen />
    </MainLayout>
  )
}

export default HashtagResultPage
