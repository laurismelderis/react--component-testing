import React from "react"

const LoadingSpinner = () => {
  return (
    <div className="lds-ellipsis-wrapper" data-testid="loading-spinner">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
