import {React, Component} from 'react';

class SignIn extends Component{
    state ={
        email : "",
        password : ""

    }

    onChangeHandler =(e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();
        this.setState({

        })
    }
  render (){      
    return (
        <div className="container">
            <form onSubmit ={this.onSubmitHandler} className="white">
               <h5 className="grey-text text-darken-3">SignIn</h5>
                <div className="inputField">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.onChangeHandler}></input>
                </div>
                <div className="inputField">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.onChangeHandler}></input>
                </div>
                <div className="inputField">
                    <button className=" btn pink lighten-1 z-depth-0" >LogIn</button>
                </div> 
            </form>
        
            </div>
    );
}
}
export default SignIn;
