import styles from './css/loginForm.module.css';
import { RootContext } from '@/layouts/Root';

function closeModal() {
  const modal = document.getElementById('id01');
  modal.style.display = 'none';
  window.location.reload();
}

const LoginForm = () => {
  return (
    <div
      className={styles.login_form_modal}
      id="id01"
    >
      <button
        type="button"
        className={styles.close_btn}
        aria-label="Close"
        onClick={closeModal}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <form
        className={styles.login_form}
        action=""
      >
        <h1 className={styles.login_title}>LOGIN</h1>
        <div>
          <label htmlFor="email">
            <span className={styles.labels}> Email</span>
            <input
              className={styles.login_input}
              id="email"
              type="text"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              onInvalid="this.setCustomValidity('Please Enter valid email')"
            />
          </label>

          <label htmlFor="password">
            <span className={styles.labels}> Password</span>
            <input
              className={styles.login_input}
              type="password"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              required
              onInvalid="this.setCustomValidity('Password is required')"
              onInput="this.setCustomValidity('')"
            />
            <br />
          </label>
          <br />
          <input
            type="submit"
            value="Log In"
            className={styles.login_btn}
          />
          <br />
          <input
            type="button"
            value="Forgot Password"
            className={styles.forgotPwd_btn}
          />
        </div>
        <RootContext.Consumer>
          {(value) => (
            <div className="create-account ">
              <button
                type="button"
                className={styles.create_account_button}
                onClick={(event) => {
                  value.changeDisplayLogInPopWindow(event, false);
                }}
              >
                Create a free account {'>'}
              </button>
            </div>
          )}
        </RootContext.Consumer>

        <div className={styles.term_policy_box}>
          <a
            href="https://www.ziffdavis.com/terms-of-use"
            target="_blank"
            rel="noreferrer"
          >
            Term of Use
          </a>
          <a
            href="https://www.ziffdavis.com/privacy-policy?refhost=ign.com"
            target="_blank"
            rel="noreferrer"
          >
            Privacy policy
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
