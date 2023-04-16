import React, {useState} from 'react'

const Form = () => {

  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirm:""
  });

  const [hasBeenSubmitted, setHasBeenSubitted] = useState(false)

  const [allUsers, setAllUsers] = useState([]);

  const changeHandler = (e)=>{
    setUser({...user, [e.target.name]: e.target.value})
  };

  const submitHandler = (e)=>{
    e.preventDefault();
    setAllUsers([...allUsers, user]);
    setUser({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirm:""
    });
    setHasBeenSubitted(true);
  }

  return (
    <div className='container text-bg-info bg-opacity-50 p-3 w-75 rounded-3 mt-5'>
      <h1>Sign-Up Form</h1>
      <div className="row">
        <form action="" className="col-md-4 mx-auto" onSubmit={submitHandler}>
          {
            hasBeenSubmitted ?
            <h3>Thank you for submitting the form!</h3>:
            <h3>Welcome, please submit the form.</h3>
          }
        <div className="form-group mt-5">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name='firstName' id='firstName' className='form-control' value={user.firstName} onChange={changeHandler} />
          {user.firstName && user.firstName.length < 2 ? <p>First Name needs at least 2 characters!</p>: null}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name='lastName' id='lastName' className='form-control' value={user.lastName} onChange={changeHandler} />
          {user.lastName && user.lastName.length < 2 ? <p>Last Name needs at least 2 characters!</p>: null}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' id='email' className='form-control' value={user.email} onChange={changeHandler} />
          {user.email && user.email.length < 2 ? <p>Email needs at least 2 characters!</p>: null}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name='password' id='password' className='form-control' value={user.password} onChange={changeHandler} />
          {user.password && user.password.length < 8 ? <p>Password needs at least 8 characters!</p>: null}
        </div>
        <div className="form-group">
          <label htmlFor="confirm">Confirm Password:</label>
          <input type="password" name='confirm' id='confirm' className='form-control' value={user.confirm} onChange={changeHandler} />
          {user.confirm && user.confirm !== user.password ? <p>Confirm Password has to match Password!</p>: null}
        </div>
        <button className="btn btn-outline-light mt-3">Submit</button>

        </form>
      </div>
      
    </div>
  )
}

export default Form