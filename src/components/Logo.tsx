interface LogoProps {
  className?: string
  ariaHidden?: boolean
}

/** Logo Studi com gradiente azul (topo) → roxo (base). */
export function Logo({ className = 'h-9 w-auto', ariaHidden }: LogoProps) {
  return (
    <svg
      viewBox="0 0 768 1344"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={ariaHidden}
      fill="none"
    >
      <defs>
        <linearGradient
          id="logoGradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1344"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4f46e5" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <g
        transform="translate(0, 1344) scale(0.1, -0.1)"
        fill="url(#logoGradient)"
        stroke="none"
      >
        <path d="M3790 9095 c-143 -29 -154 -44 -395 -524 -141 -282 -222 -432 -263 -487 -75 -102 -209 -234 -292 -289 -36 -23 -225 -126 -420 -228 -195 -102 -372 -199 -392 -216 -20 -17 -49 -57 -65 -88 -37 -77 -40 -191 -5 -269 43 -96 40 -94 582 -379 259 -136 325 -179 430 -285 143 -143 188 -222 510 -900 56 -118 115 -232 132 -252 17 -22 56 -50 96 -70 57 -28 77 -33 142 -33 65 0 84 4 144 34 87 43 101 63 228 327 341 710 367 756 507 894 123 122 158 143 681 414 272 141 314 173 346 269 28 81 25 180 -8 247 -15 30 -42 69 -60 87 -18 17 -168 101 -333 186 -513 266 -566 300 -694 451 -106 125 -167 228 -364 624 -196 392 -218 425 -312 467 -63 29 -124 35 -195 20z" />
      </g>
    </svg>
  )
}
