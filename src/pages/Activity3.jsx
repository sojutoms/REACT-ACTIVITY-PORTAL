import { useState } from 'react'
import './Activities.css'

function getStrength(password) {
  if (password.length < 6) return 'Weak'
  if (password.length < 10) return 'Medium'
  return 'Strong'
}

function Activity3() {
  const [password, setPassword] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleCheck = () => {
    if (password === '') {
      setError('Please enter a password.')
      setResult(null)
      return
    }

    setError('')

    const strength = getStrength(password)
    const message =
      strength === 'Strong'
        ? 'Status: Strong – You can use this password.'
        : 'Status: Weak – Create a stronger password.'

    setResult({ strength, message })
  }

  const handleClear = () => {
    setPassword('')
    setResult(null)
    setError('')
  }

  return (
    <div className="activity-page">
      <div className="activity-card">
        <span className="activity-eyebrow">ACTIVITY 3</span>
        <h1 className="activity-title">Password Strength Checker</h1>
        <p className="activity-subtitle">
          Classify a password by length as Weak, Medium, or Strong.
        </p>

        <div className="field-group">
          <label className="field-label">Password</label>
          <input
            className="field-input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <div className="message-box">{error}</div>}

        <button className="btn-block primary" onClick={handleCheck}>
          Check Password
        </button>
        <button className="btn-block secondary" onClick={handleClear}>
          Clear
        </button>

        {result && (
          <div
            className={`result-box ${
              result.strength === 'Strong'
                ? 'result-box-excellent'
                : result.strength === 'Weak'
                ? 'result-box-failed'
                : ''
            }`}
          >
            <p className="result-label">Password Status</p>
            <p className="result-value">{result.strength} Password</p>

            <p className="result-label">Strength Message</p>
            <p className="result-remark">{result.message}</p>

            <p className="result-label">Visual Strength Indicator</p>
            <div className="strength-bar">
              <div
                className={`strength-bar-fill strength-${result.strength.toLowerCase()}`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Activity3
