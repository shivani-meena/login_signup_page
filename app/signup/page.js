import './page.css';

const Signup = () => {
    return (
        <form className="input-form">
            <h2>Signup</h2>
            <div className='email'>Enter Your Email</div>
            <input type="value" placeholder="Enter Email" className='input-email' />
            <div className='password'>Enter Your Password</div>
            <input type="value" placeholder="Enter Password" className='input-password' />
            <div>
                <button className='button'>Click to Signup</button>
            </div>
        </form>
    )
}
export default Signup;