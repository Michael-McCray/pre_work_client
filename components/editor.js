import React from 'react'
import Iframe from 'react-iframe'
// import { useMutation } from 'graphql-hooks'

// const CREATE_SCORE = `

// `





export default function IDE({ url }) {
  // const [addScore] = useMutation(ADD_SCORE)
    // const [skip, setSkip] = useState(0)
  // const { loading, error, data } = useQuery(allExamples)

  // if (error) return <ErrorMessage message="Error loading posts." />
  // if (!data) return <div>Loading</div>

  // const { allQuizes } = data


  return (
  	<>
  	{url}
	<Iframe url="{url}"
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
