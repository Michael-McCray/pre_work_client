import React from 'react'
import Example from './example'
import IDE from './editor'
import Iframe from 'react-iframe'
// import { useMutation } from 'graphql-hooks'

// const ADD_SCORE = `
//   mutation updatePost($id: ID!, $votes: Int) {
//     updatePost(id: $id, votes: $votes) {
//       id
//       __typename
//       votes
//     }
//   }
// `


export default function Question({ text, id, url, user }) {
  // const [addScore] = useMutation(ADD_SCORE)
    // const [skip, setSkip] = useState(0)
  // const { loading, error, data } = useQuery(allExamples)

  // if (error) return <ErrorMessage message="Error loading posts." />
  // if (!data) return <div>Loading</div>

  // const { allQuizes } = data


  return (
    <>
      <h1>{text}</h1>

      <Iframe url={url}
        width="1000px"
        height="800px"
        id="myId"
        title="muddy-bash-zlc1y"
        className="myClassname"
        display="initial"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        position="relative"/>
    </>
  )
}

 // <button
 //      onClick={async () => {
 //        try {
 //          const result = await addScore({
 //            variables: {
 //              id,
 //              user_id,
 //              snapshot,
 //            },
 //          })

 //          onUpdate && onUpdate(result)
 //        } catch (e) {
 //          console.error('error adding score', e)
 //        }
 //      }}
 //    >
 //      submit
 //    </button>