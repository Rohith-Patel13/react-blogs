// Write your JS code here
import './index.css'

const BlogList = props => {
  const {eachObj} = props
  const {title, description, publishedDate} = eachObj
  return (
    <li>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{publishedDate}</p>
    </li>
  )
}

export default BlogList
