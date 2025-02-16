import React from "react"
import ContentLoader from "react-content-loader"

export const PizzaSkeleton = (props) => (
    <ContentLoader 
    speed={3}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f5f5f5"
    foregroundColor="#dfdddd"
    {...props}
  >
    <circle cx="139" cy="129" r="129" /> 
    <rect x="0" y="264" rx="15" ry="15" width="275" height="27" /> 
    <rect x="6" y="310" rx="15" ry="15" width="270" height="95" />
    <rect x="22" y="432" rx="15" ry="15" width="93" height="28" /> 
    <rect x="139" y="420" rx="20" ry="20" width="121" height="40" />
  </ContentLoader>
)



