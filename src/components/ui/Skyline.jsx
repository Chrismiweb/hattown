/**
 * Skyline — the brand's recurring signature graphic.
 * A flat silhouette echoing the buildings/lighthouse in the
 * Hattown logo mark. Used as a structural divider between
 * sections rather than as decoration.
 */
export default function Skyline({ fill = "currentColor", height = 64, className = "" }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{ width: "100%", height, display: "block", color: fill }}
      className={className}
      aria-hidden="true"
    >
      <g fill="currentColor">
        <rect x="0" y="70" width="46" height="50" />
        <rect x="52" y="40" width="30" height="80" />
        <rect x="90" y="58" width="20" height="62" />
        <rect x="118" y="20" width="34" height="100" />
        <rect x="160" y="66" width="24" height="54" />
        <polygon points="196,120 196,30 214,10 232,30 232,120" />
        <rect x="250" y="50" width="16" height="70" />
        <rect x="276" y="76" width="40" height="44" />
        <rect x="326" y="8" width="26" height="112" />
        <rect x="360" y="60" width="18" height="60" />
        {/* lighthouse nod */}
        <polygon points="400,120 400,44 410,20 420,44 420,120" />
        <rect x="405" y="30" width="10" height="8" />
        <rect x="440" y="86" width="30" height="34" />
        <rect x="480" y="34" width="22" height="86" />
        <rect x="512" y="64" width="34" height="56" />
        <rect x="556" y="14" width="28" height="106" />
        <rect x="594" y="72" width="18" height="48" />
        <rect x="622" y="46" width="24" height="74" />
        <rect x="656" y="88" width="40" height="32" />
        <rect x="706" y="26" width="20" height="94" />
        <rect x="736" y="58" width="30" height="62" />
        <rect x="776" y="70" width="16" height="50" />
        <polygon points="802,120 802,36 819,16 836,36 836,120" />
        <rect x="852" y="52" width="24" height="68" />
        <rect x="886" y="18" width="30" height="102" />
        <rect x="926" y="80" width="20" height="40" />
        <rect x="956" y="60" width="34" height="60" />
        <rect x="1000" y="30" width="18" height="90" />
        <rect x="1028" y="72" width="26" height="48" />
        <rect x="1064" y="46" width="20" height="74" />
        <rect x="1094" y="86" width="36" height="34" />
        <rect x="1140" y="24" width="24" height="96" />
        <rect x="1174" y="64" width="26" height="56" />
      </g>
    </svg>
  );
}
