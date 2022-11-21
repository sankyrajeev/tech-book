// 

const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#email-login').value.trim();
    const passwordEl = document.querySelector('#password-login').value.trim();
  
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to login');
    }
  };

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);



  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    console.table({ name: username, email, password })
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response);
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
 

    document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);


  
  