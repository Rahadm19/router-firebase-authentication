import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h1>Please login</h1>
            <div style={{margin: '10px'}}>
                <button onClick={signInWithGoogle}>Google signIn</button>
            </div>
            <form action="submit">
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder=' Your Password' />
                <br />
                <input type="submit" value="LogIn" />
            </form>
        </div>
    );
};

export default Login;