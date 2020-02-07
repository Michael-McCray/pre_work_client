import React from 'react'
import { useRouter } from 'next/router';
import Question from './question';
// import { useQuery } from 'graphql-hooks'

// export const allQuestions = `
//   
// `


export default function Quiz({ user }) {
  const router = useRouter();
  // const [skip, setSkip] = useState(0)
  // const { loading, error, data } = useQuery(allQuizes)

  // if (error) return <ErrorMessage message="Error loading posts." />
  // if (!data) return <div>Loading</div>

  // const { allQuizes } = data

  return (
    <>
      <h1>Profile</h1>

      <div>
        <h1>{router.query.title}</h1>
        <p>Welcome: {user.name}</p>
        <Question 
          index="{index}"
          text="blah"
          id="blah" 
          user="{user}" 
          url="https://codesandbox.io/embed/muddy-bash-zlc1y?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark" 
        />
      </div>
    </>
  )
}

// {allQuestions.map((question, index) => (
//  <Question 
//    title="{qiiz.title}"
//    title="{qiiz.title}" 
//    title="{qiiz.title}" 
//    title="{qiiz.title}" 
//   />
// ))}