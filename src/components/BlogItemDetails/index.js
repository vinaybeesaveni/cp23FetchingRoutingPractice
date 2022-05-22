import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      author: data.author,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderSpecificDetails = () => {
    const {blogData} = this.state
    const {title, avatarUrl, imageUrl, content, author} = blogData
    return (
      <>
        <h1 className="specific-title">{title}</h1>
        <div className="specific-details-profile-container">
          <img src={avatarUrl} alt="img" className="specific-avatar-img" />
          <p className="specific-author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="specific-img" />
        <p className="content">{content}</p>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="specific-blog-details-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderSpecificDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
