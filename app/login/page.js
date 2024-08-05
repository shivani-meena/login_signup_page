import './page.css';

const Login = () => {
    return (
        <form className="input-form">
            <h2>Login</h2>
            <div className='email'>Enter Your Email</div>
            <input type="value" placeholder="Enter Email" className='input-email' />
            <div className='password'>Enter Your Password</div>
            <input type="value" placeholder="Enter Password" className='input-password' />
            <div>
                <button className='button'>Click to Login</button>
            </div>
        </form>
    )
}
export default Login;