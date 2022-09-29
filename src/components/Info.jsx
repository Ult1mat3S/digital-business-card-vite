import Profile from "../assets/profile.jpg";
import Email from "../assets/Email.svg";

function Info() {
  return (
    <>
      <main className="main-info">
        <img src={Profile} alt="" className="main-image"></img>
        <h1>Bob Smith</h1>
        <p>Software Engineer</p>
        <p>
          <small>BobSmith.dev</small>
        </p>
        <button>
          <img src={Email} alt=""></img> Email
        </button>
      </main>
    </>
  );
}

export default Info;
