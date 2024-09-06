import Wrapper from "../../css/Subscription"

const Subscription = () => {

  return <Wrapper>
    <div className="subscription-container">
      <div className="message-container">
        <p>Be the first to get the latest news about trends,promotions and much more!</p>
      </div>
      <form className="form-control">
        <input type="email" name="email" placeholder="Enter email address" className="input-control" />
        <button className="join">join</button>
      </form>
    </div>


  </Wrapper >



}

export default Subscription