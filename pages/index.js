import React from 'react'
import Quiz_List from '../components/Quiz_list'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

function Home() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>Welcome New Applicant</h1>

      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
          <p>
            please <i>Login</i> in to begin 
          </p>
        </>
      )}

      {user && (
        <>
          <Quiz_List/>
        </>
      )}
    </Layout>
  )
}

export default Home
