import { useState } from 'react';
import { useAuth } from './AuthProvider';
const Login = () => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const auth = useAuth();
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== '' && input.password !== '') {
      auth.loginAction(input);
      return;
    }
    alert('Введите данные!');
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setInput({
        ...input,
        username: value,
      });
    }
    if (name === 'password') {
      setInput({
        ...input,
        password: value,
      });
    }
  };
  return (
    <form onSubmit={handleSubmitEvent}>
      <div className="form_control">
        <label htmlFor="user-email">Email:</label>
        <input
          value={input.username}
          type="email"
          id="user-email"
          name="email"
          placeholder="example@yahoo.com"
          onChange={handleInput}
        />
        <div id="user-email" className="sr-only"></div>
      </div>
      <div className="form_control">
        <label htmlFor="password">Password:</label>
        <input
          value={input.password}
          type="password"
          id="password"
          name="password"
          onChange={handleInput}
        />
        <div id="user-password" className="sr-only"></div>
      </div>
      <button type="submit" className="btn-submit">
        Click!
      </button>
    </form>
  );
};

export default Login;
