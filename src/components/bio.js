import React from "react"
import config from "../config"

const Bio = () => {
  // use next/image for image optim
  const author = config.author
  const social = config.social
  const avatar = "todo"

  return (
    <div className="bio">
      {avatar && (
        <img
          src="/avatar.jpg"
          alt={author?.name || ``}
          className="bio-avatar"
        />
      )}
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
