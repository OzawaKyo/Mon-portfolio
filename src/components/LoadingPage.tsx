import './LoadingPage.css'

export default function LoadingPage() {
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
          <div className="splash-loading-bar"></div>
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
