import { useState } from 'react';
import { useAuth } from './AuthProvider';
const Login = () => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const auth = useAuth();
  const handleSubmitEvent = (e) => {
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
    <form>
      <div className="form_control">
        <label htmlFor="user-email">Email:</label>
        <input
          value={input.username}
          type="email"
          id="user-email"
          name="email"
          placeholder="example@yahoo.com"
          aria-invalid="false"
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
          aria-invalid="false"
          onChange={handleInput}
        />
        <div id="user-password" className="sr-only"></div>
      </div>
      <input onClick={handleSubmitEvent} type="submit" className="btn-submit" />
    </form>
  );
};

export default Login;
