import { useEffect, useState } from 'react'
import './LoadingPage.css'

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="splash-loading-page">
      <div className="splash-loading-container">
        <div className="splash-logo-container">
          <div className="splash-logo-glow"></div>
          <h1 className="splash-logo-text">
            <span className="splash-logo-gradient">Mohamed</span>
            <span className="splash-logo-dot">.dev</span>
          </h1>
        </div>
        
        <div className="splash-loading-bar-container">
          <div 
            className="splash-loading-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="splash-loading-shapes">
          <div className="splash-shape splash-shape-1"></div>
          <div className="splash-shape splash-shape-2"></div>
          <div className="splash-shape splash-shape-3"></div>
          <div className="splash-shape splash-shape-4"></div>
        </div>
      </div>
    </div>
  )
} 