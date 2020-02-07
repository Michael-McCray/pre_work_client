import React, { Fragment, useState } from 'react'
import Link from 'next/link';
// import { useQuery } from 'graphql-hooks'

// export const allQuizes = `
//   
// `



const QuizLink = props => (
  <li>
    <Link href={`/quiz?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);





export default function Quiz_List() {
  // const [skip, setSkip] = useState(0)
  // const { loading, error, data } = useQuery(allQuizes)

  // if (error) return <ErrorMessage message="Error loading posts." />
  // if (!data) return <div>Loading</div>

  // const { allQuizes } = data

  return (
    <Fragment>
      <section>
        <ul>
          <QuizLink title="Advance Javascript" />
          <QuizLink title="Data Science with Python" />
        </ul>
      </section>
    </Fragment>
  )
}

// {allQuizes.map((post, index) => (
//   <PostLink title="{qiiz.title}" />
// ))}
