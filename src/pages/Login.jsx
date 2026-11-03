import { useState } from "react";
import campusImage from "../assets/talentos-campus.png";
import capImage from "../assets/talentos-cap.png";
import {
  ArrowRight,
  UserRound,
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  User,
} from "lucide-react";

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      isRegister &&
      email.trim().toLowerCase() !== username.trim().toLowerCase()
    ) {
      const usernameInput = event.currentTarget.elements.username;
      usernameInput.setCustomValidity(
        "Username must be the same as your email address."
      );
      usernameInput.reportValidity();
      return;
    }

    if (isRegister) {
      event.currentTarget.elements.username.setCustomValidity("");
    }
  };

  const switchMode = () => {
    setIsRegister((previous) => !previous);
    setShowPassword(false);
    setShowConfirmPassword(false);
    setEmail("");
    setUsername("");
  };

  return (
    <main className="auth-page">
      <div className={`auth-card ${isRegister ? "register-mode" : ""}`}>
        <section className="auth-image-panel">
          <img
            src={campusImage}
            alt="TalentOS campus"
            className="campus-image"
          />

          <div className="talentos-brand">
            <img
              src={capImage}
              alt="Graduation cap"
              className="brand-cap"
            />
            <h2>
              Talent<span>OS</span>
            </h2>
            <p>Learn. Grow. Achieve.</p>
          </div>

          <div className="campus-quote">
            <p>“A smarter campus</p>
            <p>for a brighter future.”</p>
          </div>
        </section>

        <section className="auth-form-panel">
          <div className="auth-content">
            <div className="auth-heading">
              <h1>{isRegister ? "Create an account" : "Welcome Back!"}</h1>
              <p>
                {isRegister
                  ? "Register with your institute code to connect to your campus."
                  : "Sign in to continue your journey"}
              </p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              {isRegister ? (
                <div className="register-form-grid">
                  <div className="register-field">
                    <label htmlFor="firstName">First name *</label>
                    <div className="input-group">
                      <User className="input-icon" size={20} />
                      <input
                        id="firstName"
                        type="text"
                        placeholder="e.g. John"
                        autoComplete="given-name"
                        required
                      />
                    </div>
                  </div>

                  <div className="register-field">
                    <label htmlFor="lastName">Last name</label>
                    <div className="input-group">
                      <User className="input-icon" size={20} />
                      <input
                        id="lastName"
                        type="text"
                        placeholder="e.g. Doe"
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  <div className="register-field">
                    <label htmlFor="registerUsername">Username *</label>
                    <div className="input-group">
                      <UserRound className="input-icon" size={20} />
                      <input
                        id="registerUsername"
                        name="username"
                        type="email"
                        value={username}
                        onChange={(event) => {
                          setUsername(event.target.value);
                          event.target.setCustomValidity("");
                        }}
                        placeholder="Enter your email as username"
                        autoComplete="username"
                        required
                      />
                    </div>
                  </div>

                  <div className="register-field">
                    <label htmlFor="registerEmail">Email address *</label>
                    <div className="input-group">
                      <Mail className="input-icon" size={20} />
                      <input
                        id="registerEmail"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          const usernameInput =
                            event.currentTarget.form.elements.username;
                          usernameInput.setCustomValidity("");
                        }}
                        placeholder="john@campus.edu"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="register-field">
                    <label htmlFor="accountRole">Account Role *</label>
                    <div className="input-group">
                      <UserRound className="input-icon" size={20} />
                      <select
                        id="accountRole"
                        name="accountRole"
                        className="register-select"
                        required
                      >
                        <option value="Student">Student</option>
                        <option value="Faculty">Faculty</option>
                        <option value="Principal">Principal</option>
                      </select>
                    </div>
                  </div>

                  <div className="register-field">
                    <label htmlFor="instituteCode">Institute Code *</label>
                    <div className="input-group">
                      <input
                        id="instituteCode"
                        name="instituteCode"
                        type="text"
                        placeholder="E.G. INS-101"
                        required
                      />
                    </div>
                  </div>

                  <div className="register-field">
                    <label htmlFor="registerPassword">Password *</label>
                    <div className="input-group">
                      <LockKeyhole className="input-icon" size={20} />
                      <input
                        id="registerPassword"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        autoComplete="new-password"
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? (
                          <EyeOff size={19} />
                        ) : (
                          <Eye size={19} />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="register-field">
                    <label htmlFor="confirmPassword">Confirm Password *</label>
                    <div className="input-group">
                      <LockKeyhole className="input-icon" size={20} />
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter password"
                        autoComplete="new-password"
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        aria-label="Toggle confirm password visibility"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={19} />
                        ) : (
                          <Eye size={19} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="input-group">
                    <UserRound className="input-icon" size={21} />
                    <input
                      type="email"
                      placeholder="Email Address"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="input-group">
                    <LockKeyhole className="input-icon" size={21} />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      autoComplete="current-password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                    </button>
                  </div>

                  <div className="forgot-password">
                    <button type="button">Forgot Password?</button>
                  </div>
                </>
              )}

              <button className="submit-button" type="submit">
                <span>{isRegister ? "Create Account" : "Sign In"}</span>
                <ArrowRight size={20} />
              </button>
            </form>

            <div className="auth-footer">
              {isRegister ? (
                <p>
                  Already have an account?{" "}
                  <button type="button" onClick={switchMode}>
                    Sign In
                  </button>
                </p>
              ) : (
                <p>
                  Don't have an account?{" "}
                  <button type="button" onClick={switchMode}>
                    Sign Up
                  </button>
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;