<template>
  <div class="canvas-galaxy">
    <svg
      class="orbit"
      width="1630"
      height="1083"
      viewBox="0 0 1630 1083"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M641.468 232.691C573.198 226.735 520.087 237.885 489.526 264.421C459.02 290.908 452.403 331.507 470.813 380.636C489.229 429.78 531.738 484.883 592.382 538.14C653.019 591.39 728.687 640.073 808.69 677.302C888.694 714.532 968.966 738.416 1038.16 745.589C1107.37 752.765 1161.9 742.849 1194.14 717.379C1210.24 704.654 1220.39 688.361 1224.44 669.194C1228.49 650.019 1226.45 627.936 1218.14 603.636C1201.5 555.026 1160.6 500.094 1101.16 446.618M725.878 194.255C599.141 146.499 487.81 128.355 411.902 143.006C373.959 150.33 346.162 165.598 329.235 187.709C312.313 209.814 306.199 238.83 311.761 273.771C322.892 343.691 380.028 432.585 473.011 524.436C565.977 616.269 688.602 704.96 818.805 774.532C949.012 844.105 1078.21 889.971 1183.14 903.891C1235.6 910.851 1280.25 909.592 1315.43 900.566C1350.61 891.541 1376.29 874.761 1390.9 850.698C1405.51 826.635 1408.62 796 1400.54 760.417C1392.44 724.831 1373.16 684.332 1343.03 640.597C1282.76 553.128 1183.15 458.55 1062.09 373.905M17.765 81.7612C-72.5543 238.199 211.083 571.047 651.286 825.199C1091.49 1079.35 1521.56 1158.56 1611.88 1002.13C1702.2 845.688 1418.57 512.84 978.362 258.688C538.158 4.53636 108.084 -74.6765 17.765 81.7612Z"
        stroke="white"
        stroke-opacity="0.1"
        :stroke-width="strokeWidth"
      />
    </svg>
    <svg
      class="star"
      width="762"
      height="762"
      viewBox="0 0 762 762"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f-372293)">
        <path
          d="M66.4043 380.779C66.4043 554.473 207.211 695.279 380.904 695.279C554.598 695.279 695.404 554.473 695.404 380.779C695.404 207.086 554.598 66.2793 380.904 66.2793C207.211 66.2793 66.4043 207.086 66.4043 380.779Z"
          fill="url(#paint0_radial-372293)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f-372293"
          x="0.480865"
          y="0.355865"
          width="760.847"
          height="760.847"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="32.9617"
            result="effect1_foregroundBlur"
          />
        </filter>
        <radialGradient
          id="paint0_radial-372293"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(380.904 380.779) rotate(90) scale(302.012)"
        >
          <stop offset="0.302083" stop-color="#A5FBFF" />
          <stop offset="0.385417" stop-color="#7694FF" stop-opacity="0.7" />
          <stop offset="0.729167" stop-color="#742ECE" stop-opacity="0.28" />
          <stop offset="1" stop-color="#9000D5" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    strokeWidth: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="stylus" scoped>
.canvas-galaxy
  // width 102rem
  height auto

.orbit
  width 100%
  height auto

.star
  position absolute
  left 49.9%
  top 46%
  width 38.645%
  height auto
  transform translate(-50%, -50%)
</style>
