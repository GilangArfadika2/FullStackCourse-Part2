const Notification = ({ type, message }) => {
    if (message === '') {
      return null
    }
    else if (type === 'success') {
        return (
            <div className='success'>
            {message}
          </div>
        )
    }
    else if (type === 'error'){
        return (
            <div className='error'>
            {message}
          </div>
        )
    } 
  
    return (
      <div className='success'>
        {message}
      </div>
    )
  }

export default Notification;