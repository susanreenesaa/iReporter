import {React, Components} from 'react';

class SignUp extends Components{

    state ={
        email : "",
        password : "",
        firstname: "",
        Lastname: ""

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
                <h5 className="grey-text text-darken-3">SignUp</h5>
              
                    <div className="inputField">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.onChangeHandler}></input>
                    </div>
                    <div className="inputField">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" onChange={this.onChangeHandler}></input>
                    </div>
                    <div className="inputField">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" onChange={this.onChangeHandler}></input>
                    </div>
                    <div className="inputField">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.onChangeHandler}></input>
                    </div>
                   
                    <div className="inputField">
                        <button className=" btn pink lighten-1 z-depth-0" >SignUp</button>
                    </div> 
                </form>
            
                </div>
        );
    }
    }

export default SignUp;
