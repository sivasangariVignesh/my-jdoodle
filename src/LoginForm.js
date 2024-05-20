import React, { useState } from 'react';
import SignIn from './SignIn';
import LoggedInPage from './LoggedInPage';
import { useCookies } from 'react-cookie';


function LoginForm({ signOut }) {
    const [isSignOut, setSignOut] = useState(signOut || false)
    const [cookies, setCookie, removeCookie] = useCookies(['jDoodle-users']);
let currentUsers= cookies['jDoodle-users'];

    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username, password) => {
    let isFound = false;
    let isValid =false;
        if(currentUsers){
            currentUsers.forEach(element => {
                if(element.username == username){isFound = true;
                    if(element.password ==password) isValid =true;
                }
            });    
            if(!isFound)      alert("Username not registered , Please Signup!");
            else{
                if(!isValid) alert("Password Incorrect");
                else{
                    setIsLoggedIn(true);
      setUsername(username);
                }
            }

        }
        else{
            alert("Username not registered , Please Signup!")
        }
    // if (username === 'sample' && password === 'sample') {
    //   setIsLoggedIn(true);
    //   setUsername(username);
    // } else {
    //   alert('Invalid credentials');
    // }
  };
  return (
    
    <>
     { <div>
        {(isLoggedIn && !isSignOut) ? (
          <LoggedInPage username={username}/>
        ) : (
          <SignIn  onLogin={handleLogin}/>
        )}
       
      </div>}
      
      </>
    
    
    
  );
}

export default LoginForm;