import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const {signInWithGoogle} = useFirebase({});
    return (
        <div>
            <h1>Please Register for your log in</h1>
            <button onClick={signInWithGoogle}>Google</button>
            <form action="submit">
                <input type="name" name="" id="" placeholder='Your name' />
                <br />
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder=' Your Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;