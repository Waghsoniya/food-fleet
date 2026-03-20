import React from "react";

function UserLightningIcon({ size = 50 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">

      {/* Head */}
      <circle cx="24" cy="18" r="7" stroke="white" strokeWidth="2" fill="none"/>

      {/* Shoulders */}
      <path
        d="M12 42 Q24 32 36 42"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />

      {/* Lightning */}
      <polygon
        className="lightning"
        points="36,26 30,40 36,40 30,54 46,36 38,36 44,26"
        fill="#22c7a9"
      />

    </svg>
  );
}

export default UserLightningIcon;