
import React from "react"

function Auth(props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <div><img src='https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ='></img></div>
          <h3 className="Auth-form-title">Tu Libreria Aliada</h3>
          <div className="form-group mt-3">
            <label>User name or Email</label>
            <input
              type="email"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
          <p className="forgot-password text-right mt-2">
            <a href="#">Forgot password?</a>
          </p>
          </div>
          <button type="submit" className="btn btn-primary">
              Sign in
            </button>
        </div>
      </form>
    </div>
  )
}

export default Auth;