import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Authentication = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log('email', email)
    console.log('pass', password)




    return (
        <div className='auth-page'>


            <div className='container page'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 col-xs-12'>
                        <h1 className='text-xs-center'>Login</h1>
                        <p className='text-xs-center'>
                            <Link to='register'> Need an account? </Link>
                        </p>
                        <form>
                            <fieldset>
                                <fieldset className='form-group'>
                                    <input type='email'
                                           className='form-control form-control-lg'
                                           placeholder='Email'
                                           value={email}
                                           onChange={event => setEmail(event.target.value)}
                                            />
                                </fieldset>
                                <fieldset className='form-group'>
                                    <input type='password'
                                           className='form-control form-control-lg'
                                           placeholder='Password'
                                           value={password}
                                           onChange={event => setPassword(event.target.value)} />
 
                                </fieldset>
                                <button className='btn btn-lg btn-primary pull-xs-right' type='submit'>Sign in</button>
                            </fieldset>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication