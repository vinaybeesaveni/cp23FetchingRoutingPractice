import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blog} = this.props
    const {id, imageUrl, avatarUrl, topic, title, author} = blog
    return (
      <Link to={`/blogs/${id}`} className="link">
        <li className="list-item">
          <img src={imageUrl} alt="img" className="image" />
          <div className="details-container">
            <p className="topic">{topic}</p>
            <h1 className="title-blog">{title}</h1>
            <div className="profile-container">
              <img src={avatarUrl} alt="img" className="avatar-img" />
              <p className="author">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
