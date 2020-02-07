import React from 'react'
import { useRouter } from 'next/router';
// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'
import Quiz from '../components/quiz'



function Page() {
  const { user, loading } = useFetchUser({ required: true })

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <Quiz user={user} />}
    </Layout>
  )
}

export default Page


