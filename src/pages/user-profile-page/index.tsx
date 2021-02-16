import React, { FunctionComponent } from 'react'
import PageLayout from 'components/PageLayout'
import UserProfileScreen from 'screens/UserProfileScreen'

const UserProfilePage: FunctionComponent = () => {
  return (
    <PageLayout>
      <UserProfileScreen />
    </PageLayout>
  )
}

export default UserProfilePage
