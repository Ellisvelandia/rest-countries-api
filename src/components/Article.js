import React from 'react'

const Article = ({flags}) => {
  return (
    <article>
      <img src={flags.svg} alt="flags" />
    </article>
  )
}

export default Article