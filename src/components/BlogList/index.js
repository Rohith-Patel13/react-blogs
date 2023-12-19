// Write your JS code here
import BlogItem from '../BlogItem/index'

const BlogList = props => {
  const {arrayOfObjects} = props

  return (
    <ul>
      {arrayOfObjects.map(each => (
        <BlogItem eachObj={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
