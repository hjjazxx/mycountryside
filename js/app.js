/* ===== 天等 · 我的家乡 —— 交互逻辑 ===== */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------------- SVG 山水插画系统 ---------------- */
let uid = 0;
const FAR = 'fill="#ffffff" opacity=".26"';
const MID = 'fill="#0f2d4d" opacity=".32"';
const NEAR = 'fill="#0a2138" opacity=".68"';
const DGROUND = 'fill="#071a2c" opacity=".88"';

const ART = {
  peak: () => `
    <circle cx="322" cy="70" r="22" fill="#fff" opacity=".82"/>
    <g fill="#fff" opacity=".22"><ellipse cx="110" cy="66" rx="72" ry="9"/><ellipse cx="212" cy="92" rx="48" ry="7"/></g>
    <path ${FAR} d="M0 200 L58 148 L112 186 L172 138 L232 186 L292 144 L352 190 L400 160 L400 260 L0 260Z"/>
    <path ${MID} d="M0 222 L50 176 L102 212 L162 168 L216 206 L276 172 L336 212 L400 182 L400 260 L0 260Z"/>
    <path ${NEAR} d="M0 260 L0 226 C34 196 68 202 98 230 C128 190 170 190 200 228 C234 206 264 212 294 236 C330 200 370 206 400 234 L400 260Z"/>
    <g stroke="#fff" stroke-width="1.6" fill="none" opacity=".5"><path d="M64 58 l9-7 l9 7"/><path d="M92 76 l8-6 l8 6"/></g>`,

  field: () => `
    <circle cx="70" cy="66" r="18" fill="#fff" opacity=".55"/>
    <path ${FAR} d="M0 176 Q100 150 200 172 Q300 194 400 166 L400 260 L0 260Z"/>
    <path ${MID} d="M0 196 Q120 172 220 190 Q320 210 400 184 L400 260 L0 260Z"/>
    <path ${NEAR} d="M0 216 Q110 200 210 214 Q310 230 400 208 L400 260 L0 260Z"/>
    <g stroke="#fff" stroke-width="1.6" fill="none" opacity=".35">
      <path d="M0 230 Q120 218 244 230 Q320 238 400 228"/>
      <path d="M0 246 Q120 234 244 246 Q320 254 400 244"/>
    </g>
    <g fill="#071a2c" opacity=".82">
      <rect x="164" y="196" width="28" height="19"/><path d="M159 196 l19-13 l19 13Z"/>
      <rect x="206" y="203" width="18" height="13"/><path d="M203 203 l12-9 l12 9Z"/>
      <rect x="238" y="199" width="22" height="16"/><path d="M234 199 l15-11 l15 11Z"/>
    </g>
    <g fill="#071a2c" opacity=".5"><circle cx="120" cy="196" r="9"/><circle cx="300" cy="206" r="7"/></g>`,

  forest: () => `
    <circle cx="330" cy="64" r="20" fill="#fff" opacity=".6"/>
    <path ${FAR} d="M0 168 L80 132 L150 162 L240 126 L320 160 L400 134 L400 260 L0 260Z"/>
    <path ${MID} d="M0 196 L90 166 L170 194 L260 164 L350 192 L400 174 L400 260 L0 260Z"/>
    <path ${NEAR} d="M0 260 L0 216 Q200 202 400 218 L400 260Z"/>
    <path fill="#9ecfe4" opacity=".65" d="M184 218 L216 218 L262 260 L138 260Z"/>
    <path stroke="#071a2c" stroke-width="7" fill="none" opacity=".85" d="M140 236 Q200 216 260 236"/>
    <path stroke="#071a2c" stroke-width="2.5" fill="none" opacity=".6" d="M144 230 Q200 212 256 230"/>
    <g fill="#071a2c" opacity=".8">
      <path d="M60 220 l12-30 l12 30Z"/><rect x="70" y="218" width="4" height="14"/>
      <path d="M100 224 l10-24 l10 24Z"/><rect x="108" y="222" width="3" height="12"/>
      <path d="M310 222 l11-27 l11 27Z"/><rect x="319" y="220" width="4" height="13"/>
      <path d="M348 226 l9-21 l9 21Z"/>
    </g>`,

  lake: () => `
    <circle cx="316" cy="62" r="19" fill="#fff" opacity=".7"/>
    <path ${FAR} d="M0 152 L70 108 L130 148 L200 104 L270 146 L340 112 L400 144 L400 180 L0 180Z"/>
    <path ${MID} d="M0 176 Q100 158 200 174 Q300 190 400 170 L400 188 L0 188Z"/>
    <rect x="0" y="186" width="400" height="74" fill="#7fb9d4" opacity=".55"/>
    <g stroke="#fff" stroke-width="1.6" opacity=".4">
      <path d="M40 204 Q120 198 200 204"/><path d="M60 220 Q160 214 260 220"/><path d="M30 238 Q140 232 250 238"/>
    </g>
    <path fill="#071a2c" opacity=".55" d="M0 186 Q80 176 160 186 Q240 196 400 180 L400 176 Q240 192 160 182 Q80 172 0 182Z"/>
    <g fill="#071a2c" opacity=".7"><path d="M300 232 l10 0 l4 -14 l6 14 l10 0 l-9 8 l4 14 l-11-8 l-11 8 l4 -14Z"/></g>`,

  village: () => `
    <path ${FAR} d="M0 164 Q120 138 240 162 Q330 180 400 156 L400 260 L0 260Z"/>
    <path ${MID} d="M0 192 Q120 170 230 188 Q330 204 400 182 L400 260 L0 260Z"/>
    <path ${NEAR} d="M0 220 Q120 204 240 220 Q330 232 400 214 L400 260 L0 260Z"/>
    <g>
      <rect x="96" y="186" width="46" height="32" fill="#fffdf6" opacity=".95"/>
      <path d="M90 186 l29-19 l29 19Z" fill="#8a3a24" opacity=".9"/>
      <rect x="112" y="200" width="12" height="12" fill="#123c58" opacity=".55"/>
      <rect x="166" y="192" width="38" height="28" fill="#fffdf6" opacity=".95"/>
      <path d="M161 192 l24-16 l24 16Z" fill="#8a3a24" opacity=".9"/>
      <rect x="180" y="204" width="10" height="10" fill="#123c58" opacity=".55"/>
      <rect x="248" y="188" width="42" height="30" fill="#fffdf6" opacity=".95"/>
      <path d="M242 188 l27-18 l27 18Z" fill="#8a3a24" opacity=".9"/>
      <rect x="262" y="200" width="11" height="12" fill="#123c58" opacity=".55"/>
    </g>
    <g opacity=".9">
      <rect x="320" y="200" width="46" height="18" fill="#c9922e" opacity=".55"/>
      <circle cx="332" cy="209" r="4" fill="#c1440e"/><path d="M344 209 l8 -6 l-2 12Z" fill="#4a7c59"/>
    </g>
    <g fill="#071a2c" opacity=".55"><circle cx="60" cy="200" r="10"/><circle cx="386" cy="206" r="8"/></g>`,

  trail: () => `
    <circle cx="86" cy="60" r="17" fill="#fff" opacity=".6"/>
    <path ${FAR} d="M0 170 L90 130 L170 168 L260 128 L340 166 L400 140 L400 260 L0 260Z"/>
    <path ${MID} d="M0 198 L100 170 L190 196 L280 166 L360 194 L400 178 L400 260 L0 260Z"/>
    <path ${NEAR} d="M0 260 L0 208 Q120 196 240 214 Q330 228 400 206 L400 260Z"/>
    <path stroke="#e6d5b0" stroke-width="16" fill="none" opacity=".8" stroke-linecap="round"
      d="M176 262 C190 226 150 212 168 190 C186 168 226 166 236 146"/>
    <g stroke="#071a2c" stroke-width="2" opacity=".35" fill="none">
      <path d="M196 250 l0 -10"/><path d="M162 224 l-8 -6"/><path d="M212 196 l8 -7"/>
    </g>
    <g fill="#071a2c" opacity=".8">
      <circle cx="250" cy="146" r="5"/><rect x="248" y="138" width="4" height="12"/>
      <circle cx="266" cy="140" r="4"/>
    </g>`,

  temple: () => `
    <path ${FAR} d="M0 168 Q110 140 220 164 Q320 184 400 158 L400 260 L0 260Z"/>
    <path ${MID} d="M120 260 L120 130 C120 100 160 84 200 84 C240 84 280 100 280 130 L280 260Z"/>
    <path fill="#071a2c" opacity=".7" d="M158 260 L158 168 C158 150 180 142 200 142 C220 142 242 150 242 168 L242 260Z"/>
    <path fill="#000" opacity=".45" d="M168 260 L168 176 C168 160 186 154 200 154 C214 154 232 160 232 176 L232 260Z"/>
    <g fill="#c1440e" opacity=".92">
      <path d="M150 178 l50 -26 l50 26Z"/>
      <rect x="176" y="180" width="48" height="26" fill="#c1440e" opacity=".85"/>
      <rect x="184" y="188" width="10" height="18" fill="#fff" opacity=".55"/>
      <rect x="206" y="188" width="10" height="18" fill="#fff" opacity=".55"/>
      <path d="M164 210 l72 0 l-8 8 l-56 0Z"/>
    </g>
    <path ${NEAR} d="M0 260 L0 232 Q120 218 240 234 Q330 246 400 228 L400 260Z"/>
    <g stroke="#fff" stroke-width="1.4" opacity=".35" fill="none"><path d="M330 96 l10 -8 l10 8"/><path d="M348 112 l8 -7 l8 7"/></g>`,

  cave: () => `
    <path ${FAR} d="M0 150 Q120 120 240 148 Q330 168 400 142 L400 260 L0 260Z"/>
    <path ${MID} d="M60 260 L60 150 C60 108 130 88 200 88 C270 88 340 108 340 150 L340 260Z"/>
    <path fill="#071a2c" opacity=".78" d="M120 260 L120 176 C120 138 156 122 200 122 C244 122 280 138 280 176 L280 260Z"/>
    <path fill="#000" opacity=".55" d="M142 260 L142 182 C142 152 168 140 200 140 C232 140 258 152 258 182 L258 260Z"/>
    <g fill="#0f2d4d" opacity=".5">
      <path d="M150 140 l8 26 l8 -26Z"/><path d="M176 136 l7 22 l7 -22Z"/>
      <path d="M212 136 l7 20 l7 -20Z"/><path d="M236 142 l8 24 l8 -24Z"/>
    </g>
    <g fill="#fff" opacity=".22">
      <path d="M158 260 l6 -30 l6 30Z"/><path d="M222 260 l6 -26 l6 26Z"/>
    </g>
    <path ${NEAR} d="M0 260 L0 224 Q120 210 240 228 Q330 240 400 222 L400 260Z"/>`,

  tunnel: () => `
    <path ${FAR} d="M0 158 Q110 128 220 156 Q320 178 400 150 L400 260 L0 260Z"/>
    <path ${MID} d="M0 260 L0 132 C90 106 170 100 250 112 C320 122 370 130 400 126 L400 260Z"/>
    <path ${NEAR} d="M0 260 L0 168 C90 146 170 142 250 152 C320 160 370 166 400 162 L400 260Z"/>
    <path fill="#000" opacity=".62" d="M150 260 L150 208 C150 186 172 176 200 176 C228 176 250 186 250 208 L250 260Z"/>
    <path fill="#e6d5b0" opacity=".55" d="M196 260 L196 226 L204 226 L204 260Z"/>
    <g stroke="#c9922e" stroke-width="2" opacity=".7" fill="none">
      <path d="M158 196 h84"/><path d="M162 206 h76"/>
    </g>
    <g stroke="#fff" stroke-width="2" opacity=".25" fill="none"><path d="M172 246 h56"/><path d="M180 256 h40"/></g>
    <path ${DGROUND} d="M0 260 L0 240 Q200 228 400 242 L400 260Z"/>`,

  wind: () => `
    <circle cx="300" cy="76" r="26" fill="#fff" opacity=".7"/>
    <g fill="#fff" opacity=".25"><ellipse cx="120" cy="80" rx="90" ry="11"/><ellipse cx="240" cy="112" rx="60" ry="8"/></g>
    <path ${FAR} d="M0 186 Q110 160 220 184 Q320 204 400 178 L400 260 L0 260Z"/>
    <path ${MID} d="M0 214 Q120 192 230 210 Q330 226 400 204 L400 260 L0 260Z"/>
    <g stroke="#071a2c" stroke-width="4" opacity=".85" fill="none">
      <path d="M96 176 L96 126"/><path d="M204 190 L204 116"/><path d="M312 180 L312 132"/>
    </g>
    <g fill="#071a2c" opacity=".85">
      <g class="spin" style="transform-box:fill-box;transform-origin:center">
        <path d="M96 126 l0 -30"/><path d="M96 126 l26 16"/><path d="M96 126 l-26 16"/>
      </g>
      <g class="spin" style="transform-box:fill-box;transform-origin:center;animation-duration:11s">
        <path d="M204 116 l0 -38"/><path d="M204 116 l33 20"/><path d="M204 116 l-33 20"/>
      </g>
      <g class="spin" style="transform-box:fill-box;transform-origin:center;animation-duration:9s">
        <path d="M312 132 l0 -32"/><path d="M312 132 l28 17"/><path d="M312 132 l-28 17"/>
      </g>
    </g>
    <path ${NEAR} d="M0 260 L0 232 Q120 220 240 236 Q330 248 400 230 L400 260Z"/>`,

  tea: () => `
    <circle cx="70" cy="60" r="17" fill="#fff" opacity=".55"/>
    <path ${FAR} d="M0 160 Q120 134 240 158 Q330 176 400 152 L400 260 L0 260Z"/>
    <path ${MID} d="M0 186 Q120 164 230 184 Q330 200 400 178 L400 260 L0 260Z"/>
    <g fill="#4a7c59" opacity=".55">
      <path d="M0 206 Q120 188 240 206 Q330 220 400 202 L400 222 Q330 240 240 226 Q120 208 0 226Z"/>
      <path d="M0 226 Q120 208 240 226 Q330 240 400 222 L400 244 Q330 262 240 248 Q120 230 0 248Z"/>
    </g>
    <g stroke="#071a2c" stroke-width="1.6" opacity=".3" fill="none">
      <path d="M0 216 Q120 198 240 216 Q330 230 400 212"/>
      <path d="M0 236 Q120 218 240 236 Q330 250 400 232"/>
    </g>
    <path ${NEAR} d="M0 250 Q120 236 240 252 Q330 264 400 246 L400 260 L0 260Z"/>
    <g fill="#071a2c" opacity=".78">
      <rect x="286" y="176" width="30" height="20"/><path d="M282 176 l19-12 l19 12Z"/>
    </g>`,

  camp: () => `
    <g fill="#fff">
      <circle cx="60" cy="40" r="1.6" opacity=".9"/><circle cx="130" cy="26" r="1.2" opacity=".7"/>
      <circle cx="200" cy="52" r="1.8" opacity=".85"/><circle cx="268" cy="30" r="1.3" opacity=".7"/>
      <circle cx="330" cy="60" r="1.5" opacity=".8"/><circle cx="370" cy="24" r="1.1" opacity=".6"/>
      <circle cx="98" cy="76" r="1.2" opacity=".6"/><circle cx="300" cy="96" r="1.1" opacity=".5"/>
    </g>
    <circle cx="330" cy="52" r="16" fill="#ffe9b8" opacity=".85"/>
    <circle cx="330" cy="52" r="34" fill="#ffe9b8" opacity=".12"/>
    <path fill="#ffffff" opacity=".12" d="M0 150 Q120 128 240 148 Q330 164 400 142 L400 260 L0 260Z"/>
    <path fill="#0f2d4d" opacity=".45" d="M0 186 Q120 164 230 184 Q330 200 400 178 L400 260 L0 260Z"/>
    <path ${DGROUND} d="M0 260 L0 220 Q120 206 240 224 Q330 238 400 218 L400 260Z"/>
    <g>
      <path fill="#c1440e" opacity=".95" d="M150 240 L200 196 L250 240Z"/>
      <path fill="#8a2f0c" opacity=".9" d="M200 196 L250 240 L226 240Z"/>
      <path fill="#2b1a12" opacity=".8" d="M192 240 L208 240 L206 228 L194 228Z"/>
    </g>
    <g>
      <path fill="#ffcf6b" opacity=".95" d="M290 232 c-8 0 -12 -8 -8 -14 c2 -4 8 -12 8 -12 c0 0 6 8 8 12 c4 6 0 14 -8 14Z"/>
      <path fill="#fff3c4" opacity=".9" d="M290 228 c-4 0 -6 -4 -4 -7 c1 -2 4 -6 4 -6 c0 0 3 4 4 6 c2 3 0 7 -4 7Z"/>
    </g>
    <g stroke="#ffcf6b" stroke-width="1.4" opacity=".5" fill="none">
      <path d="M276 216 l-4 -6"/><path d="M304 214 l4 -7"/>
    </g>`,

  festival: () => `
    <g fill="#fff" opacity=".2"><ellipse cx="200" cy="70" rx="150" ry="14"/></g>
    <g>
      <circle cx="200" cy="150" r="56" fill="#c9922e" opacity=".92"/>
      <circle cx="200" cy="150" r="56" fill="none" stroke="#8a5f14" stroke-width="3" opacity=".6"/>
      <circle cx="200" cy="150" r="38" fill="none" stroke="#8a5f14" stroke-width="2.5" opacity=".55"/>
      <circle cx="200" cy="150" r="14" fill="#c1440e" opacity=".9"/>
      <g fill="#fff" opacity=".5">
        <circle cx="176" cy="126" r="3"/><circle cx="224" cy="126" r="3"/>
        <circle cx="176" cy="174" r="3"/><circle cx="224" cy="174" r="3"/>
      </g>
      <g stroke="#ffd79a" stroke-width="2.5" fill="none" opacity=".7">
        <path d="M144 118 l-14 -12"/><path d="M256 118 l14 -12"/><path d="M138 168 l-16 8"/><path d="M262 168 l16 8"/>
      </g>
    </g>
    <g fill="#5a2a12" opacity=".85">
      <circle cx="70" cy="196" r="11"/><path d="M58 206 q12 -10 24 0 l6 34 l-36 0Z"/>
      <circle cx="130" cy="206" r="10"/><path d="M119 216 q11 -9 22 0 l5 30 l-32 0Z"/>
      <circle cx="330" cy="206" r="10"/><path d="M319 216 q11 -9 22 0 l5 30 l-32 0Z"/>
      <circle cx="272" cy="198" r="11"/><path d="M260 208 q12 -10 24 0 l6 32 l-36 0Z"/>
    </g>
    <g stroke="#c1440e" stroke-width="3" fill="none" opacity=".8">
      <path d="M84 214 l14 -14"/><path d="M116 222 l16 -16"/><path d="M284 216 l14 -14"/><path d="M316 224 l16 -16"/>
    </g>
    <path ${DGROUND} d="M0 260 L0 236 Q200 226 400 238 L400 260Z"/>`,

  drum: () => `
    <path ${FAR} d="M0 164 Q120 138 240 162 Q330 180 400 156 L400 260 L0 260Z"/>
    <path ${MID} d="M0 196 Q120 174 230 194 Q330 210 400 188 L400 260 L0 260Z"/>
    <path ${NEAR} d="M0 260 L0 224 Q120 210 240 228 Q330 242 400 222 L400 260Z"/>
    <g>
      <path fill="#6b4326" opacity=".95" d="M148 214 L148 170 Q148 160 200 160 Q252 160 252 170 L252 214 Q252 224 200 224 Q148 224 148 214Z"/>
      <ellipse cx="200" cy="164" rx="52" ry="12" fill="#8a5a34"/>
      <ellipse cx="200" cy="164" rx="38" ry="8" fill="#3f2615" opacity=".8"/>
      <path fill="#3f2615" opacity=".35" d="M148 186 Q200 196 252 186 L252 196 Q200 206 148 196Z"/>
    </g>
    <g>
      <rect x="206" y="96" width="12" height="76" rx="6" fill="#8a5a34"/>
      <rect x="198" y="92" width="28" height="16" rx="8" fill="#a06c40"/>
    </g>
    <g stroke="#c1440e" stroke-width="2.5" fill="none" opacity=".7">
      <path d="M172 128 l-14 -10"/><path d="M244 118 l14 -10"/><path d="M262 146 l16 -4"/>
    </g>
    <g fill="#c9922e" opacity=".8">
      <circle cx="120" cy="150" r="5"/><circle cx="286" cy="106" r="4"/><circle cx="308" cy="160" r="4"/>
    </g>`,

  chili: () => `
    <path ${FAR} d="M0 170 Q120 144 240 168 Q330 186 400 162 L400 260 L0 260Z"/>
    <path ${MID} d="M0 200 Q120 178 230 198 Q330 214 400 192 L400 260 L0 260Z"/>
    <g stroke="#4a7c59" stroke-width="3" fill="none" opacity=".8">
      <path d="M60 60 C120 58 180 66 240 62"/><path d="M120 92 C180 90 250 98 320 94"/>
    </g>
    <g fill="#c1440e">
      <path d="M92 60 c-16 4 -26 22 -22 40 c4 16 18 26 30 22 c10 -4 12 -18 6 -30 c-6 -12 -8 -30 -14 -32Z"/>
      <path d="M138 64 c-16 4 -26 22 -22 40 c4 16 18 26 30 22 c10 -4 12 -18 6 -30 c-6 -12 -8 -30 -14 -32Z"/>
      <path d="M184 62 c-16 4 -26 22 -22 40 c4 16 18 26 30 22 c10 -4 12 -18 6 -30 c-6 -12 -8 -30 -14 -32Z"/>
      <g opacity=".85">
        <path d="M170 94 c-14 4 -23 20 -19 35 c4 14 16 23 26 19 c9 -4 11 -16 5 -26 c-5 -11 -7 -26 -12 -28Z"/>
        <path d="M212 98 c-14 4 -23 20 -19 35 c4 14 16 23 26 19 c9 -4 11 -16 5 -26 c-5 -11 -7 -26 -12 -28Z"/>
        <path d="M254 96 c-14 4 -23 20 -19 35 c4 14 16 23 26 19 c9 -4 11 -16 5 -26 c-5 -11 -7 -26 -12 -28Z"/>
      </g>
    </g>
    <g fill="#4a7c59" opacity=".9">
      <path d="M84 56 c10 -10 22 -12 30 -6 c-10 -2 -18 2 -22 8Z"/>
      <path d="M130 60 c10 -10 22 -12 30 -6 c-10 -2 -18 2 -22 8Z"/>
      <path d="M176 58 c10 -10 22 -12 30 -6 c-10 -2 -18 2 -22 8Z"/>
    </g>
    <path ${NEAR} d="M0 260 L0 230 Q120 216 240 234 Q330 246 400 228 L400 260Z"/>`
};

function scene(kind, sky, extraClass = '') {
  const id = 'g' + (++uid);
  const [c1, c2] = sky || ['#cfe8ff', '#eef7e4'];
  const inner = (ART[kind] || ART.peak)();
  return `<svg class="${extraClass}" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="260" fill="url(#${id})"/>${inner}</svg>`;
}
function icon(kind, sky) {
  return scene(kind, sky || ['#ffe6c4', '#f6c98a'], 'ico');
}

/* ---------------- 状态 ---------------- */
const state = {
  cat: 'all',
  kw: '',
  list: [],        // 当前筛选结果
  modalIdx: -1,
  wish: loadWish(),
  foodCat: '全部',
  guideCat: 'traffic',
  days: 1,
  interests: []
};

function loadWish() {
  try { return JSON.parse(localStorage.getItem('td_wish') || '[]'); } catch (e) { return []; }
}
function saveWish() {
  try { localStorage.setItem('td_wish', JSON.stringify(state.wish)); } catch (e) {}
}

/* ---------------- 首页 ---------------- */
function renderFacts() {
  $('#heroFacts').innerHTML = FACTS.map(f => `
    <div class="fact"><b>${f.num}<i>${f.unit}</i></b><span>${f.label}</span></div>`).join('');
}

function renderCats() {
  $('#catGrid').innerHTML = CATS.map(c => `
    <a class="cat-card reveal" href="#spots" data-cat="${c.key}">
      <div class="cat-ico">${c.icon}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <div class="cat-go">查看${c.name} →</div>
    </a>`).join('');
  $$('#catGrid .cat-card').forEach(el => {
    el.addEventListener('click', () => {
      state.cat = el.dataset.cat;
      renderFilters(); renderSpots();
      document.getElementById('spots').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ---------------- 景点 ---------------- */
function catName(k) { const c = CATS.find(x => x.key === k); return c ? c.name : '其他'; }

function renderFilters() {
  const counts = { all: PLACES.length };
  CATS.forEach(c => counts[c.key] = PLACES.filter(p => p.cat === c.key).length);
  $('#filters').innerHTML = [['all', '全部'], ...CATS.map(c => [c.key, c.name])]
    .map(([k, n]) => `<button class="fchip ${state.cat === k ? 'on' : ''}" data-c="${k}">${n}<i>${counts[k]}</i></button>`).join('');
  $$('#filters .fchip').forEach(b => b.addEventListener('click', () => {
    state.cat = b.dataset.c; renderFilters(); renderSpots();
  }));
  $('#spotTotal').textContent = PLACES.length;
}

function match(p) {
  const okCat = state.cat === 'all' || p.cat === state.cat;
  if (!okCat) return false;
  if (!state.kw) return true;
  const t = (p.name + p.area + p.tagline + p.desc + p.highlights.join('') + catName(p.cat)).toLowerCase();
  return t.includes(state.kw.toLowerCase());
}

function renderSpots() {
  state.list = PLACES.filter(match);
  $('#resultHint').textContent = state.kw || state.cat !== 'all'
    ? `筛选出 ${state.list.length} 个结果${state.kw ? `（关键词「${state.kw}」）` : ''}`
    : '';
  const grid = $('#spotGrid');
  if (!state.list.length) {
    grid.innerHTML = `<div class="empty">没有找到匹配的内容，换个关键词试试 🌿</div>`;
    return;
  }
  grid.innerHTML = state.list.map((p, i) => {
    const photos = (typeof PHOTOS !== 'undefined' && PHOTOS[p.id]) || [];
    const hero = photos.length
      ? `<img src="${photos[0].file}" alt="${p.name}" loading="lazy"><span class="photo-count">实拍 ${photos.length} 张</span>`
      : scene(p.art, p.sky);
    return `
    <article class="spot reveal" data-i="${i}">
      <div class="spot-art">
        ${hero}
        <span class="spot-badge">${p.level}</span>
        <button class="spot-wish ${state.wish.includes(p.id) ? 'on' : ''}" data-id="${p.id}" title="加入心愿单">♥</button>
      </div>
      <div class="spot-body">
        <div class="spot-cat">${catName(p.cat)}</div>
        <h3>${p.name}</h3>
        <div class="spot-tagline">${p.tagline}</div>
        <p class="spot-desc">${p.desc}</p>
        <div class="spot-meta"><span>${p.area}</span><span>${p.time}</span><span>${p.best}</span></div>
      </div>
    </article>`;
  }).join('');

  $$('#spotGrid .spot').forEach(el => el.addEventListener('click', e => {
    if (e.target.closest('.spot-wish')) return;
    openModal(+el.dataset.i);
  }));
  $$('#spotGrid .spot-wish').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    toggleWish(b.dataset.id, b);
  }));
  observeReveal();
}

/* ---------------- 详情弹窗 ---------------- */
function openModal(i) {
  state.modalIdx = i;
  state.lbIdx = 0;
  const p = state.list[i];
  if (!p) return;
  const inWish = state.wish.includes(p.id);
  const photos = (typeof PHOTOS !== 'undefined' && PHOTOS[p.id]) || [];
  if (photos.length) {
    $('#modalArt').innerHTML = `<img id="modalMain" src="${photos[0].file}" alt="${p.name}" class="modal-main-photo">`;
    $('#modalThumbs').innerHTML = photos.map((x, i) => `<img src="${x.file}" class="modal-thumb${i === 0 ? ' active' : ''}" data-i="${i}" alt="">`).join('');
    $('#modalThumbsWrap').style.display = 'flex';
  } else {
    $('#modalArt').innerHTML = scene(p.art, p.sky);
    $('#modalThumbs').innerHTML = '';
    $('#modalThumbsWrap').style.display = 'none';
  }
  $('#modalBody').innerHTML = `
    <h3>${p.name}</h3>
    <p class="modal-sub">${p.tagline}</p>
    <div class="modal-tags">
      <span>${catName(p.cat)}</span><span>${p.level}</span><span>📍 ${p.area}</span>
      <span>⏱ ${p.time}</span><span>🎫 ${p.ticket}</span>
    </div>
    <p class="desc">${p.desc}</p>
    <div class="modal-h">不可错过的点</div>
    <ul>${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
    <div class="tip-box"><b>实用贴士 · </b>${p.tip}</div>
    <div class="modal-h">建议游玩时间</div>
    <ul><li>${p.best}</li></ul>
    ${photos.length ? `<p class="photo-credit">图片来源：${photos[0].credit}</p>` : ''}`;

  const main = $('#modalMain');
  if (main) {
    main.addEventListener('click', () => openLightbox(photos, state.lbIdx, p.name));
  }
  $('#lbOpen').onclick = () => openLightbox(photos, state.lbIdx, p.name);
  $$('.modal-thumb').forEach(t => t.addEventListener('click', () => {
    $$('.modal-thumb').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    state.lbIdx = +t.dataset.i;
    if (main) main.src = photos[state.lbIdx].file;
    const cr = $('.photo-credit');
    if (cr) cr.textContent = '图片来源：' + photos[state.lbIdx].credit;
  }));
  const wb = $('#modalWish');
  wb.textContent = inWish ? '♥ 已在心愿单' : '♥ 加入心愿单';
  wb.classList.toggle('btn-ghost', inWish);
  $('#modalMask').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function openLightbox(list, startIdx, title) {
  if (!list || !list.length) return;
  state.lbList = list;
  state.lbIdx = startIdx || 0;
  state.lbTitle = title || '';
  updateLightbox();
  $('#lightbox').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function updateLightbox() {
  const photos = state.lbList || [];
  const ph = photos[state.lbIdx];
  if (!ph) return;
  $('#lbImg').src = ph.file;
  $('#lbCap').textContent = (state.lbTitle ? state.lbTitle + ' · ' : '') +
    `图 ${state.lbIdx + 1}/${photos.length} · 来源：${ph.credit}`;
  $('#lbPrev').style.visibility = state.lbIdx > 0 ? 'visible' : 'hidden';
  $('#lbNext').style.visibility = state.lbIdx < photos.length - 1 ? 'visible' : 'hidden';
}
function closeLightbox() {
  $('#lightbox').classList.remove('show');
  if (!$('#modalMask').classList.contains('show')) document.body.style.overflow = '';
}
function lbStep(d) {
  const photos = state.lbList || [];
  if (!photos.length) return;
  state.lbIdx = Math.max(0, Math.min(photos.length - 1, state.lbIdx + d));
  updateLightbox();
}
function closeModal() {
  $('#modalMask').classList.remove('show');
  document.body.style.overflow = '';
}
function step(d) {
  const n = state.list.length;
  if (!n) return;
  openModal((state.modalIdx + d + n) % n);
}

/* ---------------- 心愿单 ---------------- */
function toggleWish(id, btnEl) {
  const i = state.wish.indexOf(id);
  if (i >= 0) { state.wish.splice(i, 1); toast('已移出心愿单'); }
  else { state.wish.push(id); toast('已加入心愿单 ♥'); }
  saveWish(); renderWishBar(); renderDrawer();
  if (btnEl) btnEl.classList.toggle('on');
  const p = state.list[state.modalIdx];
  if (p && p.id === id) {
    const wb = $('#modalWish');
    wb.textContent = state.wish.includes(id) ? '♥ 已在心愿单' : '♥ 加入心愿单';
  }
  $$('#spotGrid .spot-wish').forEach(b => b.classList.toggle('on', state.wish.includes(b.dataset.id)));
}
function renderWishBar() { $('#wishCount').textContent = state.wish.length; }
function renderDrawer() {
  const items = state.wish.map(id => PLACES.find(p => p.id === id)).filter(Boolean);
  $('#drawerCount').textContent = state.wish.length;
  $('#drawerBody').innerHTML = items.length ? items.map(p => {
    const photos = (typeof PHOTOS !== 'undefined' && PHOTOS[p.id]) || [];
    const thumb = photos.length ? `<img src="${photos[0].file}" alt="${p.name}" loading="lazy">` : scene(p.art, p.sky);
    return `
    <div class="wish-item">
      <div class="wa">${thumb}</div>
      <div class="wt"><b>${p.name}</b><span>${catName(p.cat)} · ${p.area} · ${p.time}</span></div>
      <button class="wd" data-id="${p.id}" title="移除">✕</button>
    </div>`;
  }).join('')
    : `<div class="drawer-empty">心愿单还是空的<br/>去「好玩」里点几颗 ♥ 吧</div>`;
  $$('#drawerBody .wd').forEach(b => b.addEventListener('click', () => toggleWish(b.dataset.id)));
}
function openDrawer() { renderDrawer(); $('#drawer').classList.add('show'); $('#drawerMask').classList.add('show'); }
function closeDrawer() { $('#drawer').classList.remove('show'); $('#drawerMask').classList.remove('show'); }

/* ---------------- 文化名片 ---------------- */
function renderCultures() {
  $('#cultureList').innerHTML = CULTURES.map((c, ci) => {
    const photos = (typeof CULTURE_PHOTOS !== 'undefined' && CULTURE_PHOTOS[c.id]) || [];
    const art = photos.length
      ? `<div class="culture-img"><img src="${photos[0].file}" alt="${c.name}" loading="lazy" class="culture-main" data-ci="${ci}"></div>` +
        `<div class="zoom-tip">点击查看完整图片</div>`
      : scene(c.art, c.sky);
    return `
    <article class="culture reveal">
      <div class="culture-art${photos.length ? ' has-photo' : ''}">${art}</div>
      <div class="culture-body">
        <span class="culture-badge">${c.badge}</span>
        <h3>${c.name}</h3>
        <p class="culture-sum">${c.summary}</p>
        <p class="culture-det">${c.detail}</p>
        <div class="culture-facts">
          ${c.facts.map(([k, v]) => `<div><b>${k}</b>${v}</div>`).join('')}
        </div>
        ${photos.length ? `<p class="photo-credit">图片来源：${photos[0].credit}</p>` : ''}
      </div>
    </article>`;
  }).join('');
  $$('.culture-main').forEach(img => img.addEventListener('click', () => {
    const c = CULTURES[+img.dataset.ci];
    const photos = CULTURE_PHOTOS[c.id] || [];
    openLightbox(photos, 0, c.name);
  }));
  observeReveal();
}

/* ---------------- 美食 ---------------- */
function renderFood() {
  const cats = ['全部', ...new Set(FOODS.map(f => f.cat))];
  $('#foodTabs').innerHTML = cats.map(c =>
    `<button class="fchip ${state.foodCat === c ? 'on' : ''}" data-f="${c}">${c}</button>`).join('');
  $$('#foodTabs .fchip').forEach(b => b.addEventListener('click', () => {
    state.foodCat = b.dataset.f; renderFood();
  }));
  const list = state.foodCat === '全部' ? FOODS : FOODS.filter(f => f.cat === state.foodCat);
  const skyMap = { 'chili': ['#ffd0c2', '#e08a6a'], 'festival': ['#ffe0b2', '#e0a06a'], 'drum': ['#ffd6a5', '#c98a64'], 'tea': ['#e2f2cf', '#a8cf90'], 'forest': ['#d7f0e3', '#9ccfb4'], 'lake': ['#cdeaf7', '#8fc8de'], 'village': ['#ffeccf', '#e8b98a'] };
  $('#foodGrid').innerHTML = list.map(f => {
    const photos = (typeof FOOD_PHOTOS !== 'undefined' && FOOD_PHOTOS[f.id]) || [];
    const art = photos.length
      ? `<div class="food-img"><img src="${photos[0].file}" alt="${f.name}" loading="lazy" class="food-main" data-fid="${f.id}"></div>` +
        `<div class="zoom-tip">点击查看完整图片</div>`
      : `<div class="food-ico">${icon(f.art, skyMap[f.art])}</div>`;
    return `
    <div class="food reveal${photos.length ? ' has-photo' : ''}">
      <div class="food-art">${art}</div>
      <div class="food-body">
        <div class="food-cat">${f.cat}</div>
        <h4>${f.name}<span class="food-flag">${f.tag}</span></h4>
        <p>${f.desc}</p>
        ${photos.length ? `<p class="photo-credit">图片来源：${photos[0].credit}</p>` : ''}
      </div>
    </div>`;
  }).join('');
  $$('.food-main').forEach(img => img.addEventListener('click', () => {
    const f = FOODS.find(x => x.id === img.dataset.fid);
    const photos = FOOD_PHOTOS[img.dataset.fid] || [];
    openLightbox(photos, 0, f ? f.name : '');
  }));
  observeReveal();
}

/* ---------------- 线路规划器 ---------------- */
function renderPlanner() {
  $('#interestChips').innerHTML = INTERESTS.map(t =>
    `<button class="chip ${state.interests.includes(t.key) ? 'on' : ''}" data-t="${t.key}">${t.icon} ${t.key}</button>`).join('');
  $$('#interestChips .chip').forEach(b => b.addEventListener('click', () => {
    const k = b.dataset.t, i = state.interests.indexOf(k);
    if (i >= 0) state.interests.splice(i, 1); else state.interests.push(k);
    b.classList.toggle('on');
  }));
  $$('#daySeg button').forEach(b => b.addEventListener('click', () => {
    state.days = +b.dataset.d;
    $$('#daySeg button').forEach(x => x.classList.toggle('active', x === b));
  }));
}

function genPlan() {
  const scored = ROUTES.map(r => {
    let s = r.days === state.days ? 5 : -Math.abs(r.days - state.days) * 3;
    s += r.tags.filter(t => state.interests.includes(t)).length * 4;
    if (!state.interests.length) s += r.tags.length;
    return { r, s };
  }).sort((a, b) => b.s - a.s);
  const best = scored[0].r;
  const alts = scored.slice(1, 4).map(x => x.r);

  $('#planOut').innerHTML = `
    <div class="plan-card">
      <div class="plan-head">
        <div>
          <h3>${best.name}</h3>
          <div class="plan-crowd">适合：${best.crowd} · ${best.days} 天 · 关键词 ${best.tags.join(' / ')}</div>
        </div>
        <div class="plan-score">为你匹配 ${Math.round(scored[0].s * 10)}% 契合度</div>
      </div>
      <p class="plan-sum">${best.summary}</p>
      ${best.plan.map(d => `
        <div class="plan-day">
          <div class="plan-day-title"><span>DAY ${d.day}</span>${d.title}</div>
          <div class="tl">
            ${d.items.map(it => `
              <div class="tl-item">
                <div class="tl-time">${it.t}</div>
                <div class="tl-name">${it.n}</div>
                <div class="tl-desc">${it.d}</div>
              </div>`).join('')}
          </div>
        </div>`).join('')}
      <div class="plan-alt">
        <span class="muted" style="font-size:12.5px;align-self:center;margin-right:4px">换一条：</span>
        ${alts.map(a => `<button data-r="${a.id}">${a.name}</button>`).join('')}
      </div>
    </div>`;
  $$('#planOut .plan-alt button').forEach(b => b.addEventListener('click', () => showRoute(b.dataset.r)));
  observeReveal();
}
function showRoute(id) {
  const r = ROUTES.find(x => x.id === id);
  if (!r) return;
  $('#planOut').innerHTML = `
    <div class="plan-card">
      <div class="plan-head">
        <div><h3>${r.name}</h3><div class="plan-crowd">适合：${r.crowd} · ${r.days} 天 · 关键词 ${r.tags.join(' / ')}</div></div>
        <div class="plan-score">${r.days} 天行程</div>
      </div>
      <p class="plan-sum">${r.summary}</p>
      ${r.plan.map(d => `
        <div class="plan-day">
          <div class="plan-day-title"><span>DAY ${d.day}</span>${d.title}</div>
          <div class="tl">${d.items.map(it => `
            <div class="tl-item"><div class="tl-time">${it.t}</div>
            <div class="tl-name">${it.n}</div><div class="tl-desc">${it.d}</div></div>`).join('')}</div>
        </div>`).join('')}
      <div class="plan-alt"><button data-back="1">← 重新规划</button></div>
    </div>`;
  $('#planOut [data-back]').addEventListener('click', genPlan);
}

/* ---------------- 时节 ---------------- */
function renderTimeline() {
  $('#timeline').innerHTML = CALENDAR.map(c => `
    <div class="tl-card reveal ${c.star ? 'star' : ''}" style="--c:${c.color}">
      ${c.star ? '<span class="star-badge">全年最热闹</span>' : ''}
      <div class="tl-month">${c.month}</div>
      <h4>${c.title}</h4>
      <p>${c.desc}</p>
    </div>`).join('');
  observeReveal();
}

/* ---------------- 攻略 ---------------- */
const GUIDE_TABS = [['traffic', '🚗 怎么到'], ['stay', '🛏 住哪里'], ['tips', '🧭 注意事项']];
function renderGuide() {
  $('#guideTabs').innerHTML = GUIDE_TABS.map(([k, n]) =>
    `<button class="fchip ${state.guideCat === k ? 'on' : ''}" data-g="${k}">${n}</button>`).join('');
  $$('#guideTabs .fchip').forEach(b => b.addEventListener('click', () => {
    state.guideCat = b.dataset.g; renderGuide();
  }));
  $('#guidePanel').innerHTML = `<div class="card">${
    GUIDE[state.guideCat].map(x => `<div class="g-row"><h4>${x.t}</h4><p>${x.d}</p></div>`).join('')
  }</div>`;
}

/* ---------------- 通用 ---------------- */
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 1800);
}
let io;
function observeReveal() {
  if (!io) {
    io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: .12 });
  }
  $$('.reveal:not(.in)').forEach(el => io.observe(el));
}

/* ---------------- 事件绑定 ---------------- */
function bind() {
  // 搜索
  let timer;
  $('#searchInput').addEventListener('input', e => {
    clearTimeout(timer);
    timer = setTimeout(() => { state.kw = e.target.value.trim(); renderSpots(); }, 180);
  });

  // 弹窗
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalMask').addEventListener('click', e => { if (e.target.id === 'modalMask') closeModal(); });
  $('#modalPrev').addEventListener('click', () => step(-1));
  $('#modalNext').addEventListener('click', () => step(1));
  $('#modalWish').addEventListener('click', () => {
    const p = state.list[state.modalIdx]; if (p) toggleWish(p.id);
  });

  // 图片灯箱
  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lbPrev').addEventListener('click', () => lbStep(-1));
  $('#lbNext').addEventListener('click', () => lbStep(1));
  $('#lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') closeLightbox(); });

  document.addEventListener('keydown', e => {
    if ($('#lightbox').classList.contains('show')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lbStep(-1);
      if (e.key === 'ArrowRight') lbStep(1);
      return;
    }
    if (!$('#modalMask').classList.contains('show')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  // 心愿单
  $('#wishBtn').addEventListener('click', openDrawer);
  $('#drawerClose').addEventListener('click', closeDrawer);
  $('#wishClose').addEventListener('click', closeDrawer);
  $('#drawerMask').addEventListener('click', closeDrawer);
  $('#wishClear').addEventListener('click', () => {
    state.wish = []; saveWish(); renderWishBar(); renderDrawer();
    $$('#spotGrid .spot-wish').forEach(b => b.classList.remove('on'));
    toast('心愿单已清空');
  });

  // 规划器
  $('#btnPlan').addEventListener('click', () => {
    genPlan();
    $('#planOut').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  $('#btnPlanReset').addEventListener('click', () => {
    state.days = 1; state.interests = [];
    $$('#daySeg button').forEach((b, i) => b.classList.toggle('active', i === 0));
    renderPlanner(); $('#planOut').innerHTML = '';
  });

  // 回到顶部
  $('#toTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* 滚动相关：导航态、进度条、高亮、视差、揭示 */
function scrollFX() {
  const nav = $('#nav'), bar = $('#scrollBar'), top = $('#toTop');
  const layers = $$('.hero-art .layer');
  const links = $$('.nl');
  const secs = ['home', 'spots', 'culture', 'video', 'food', 'route', 'calendar', 'guide'].map(id => document.getElementById(id));

  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('solid', y > 60);
    top.classList.toggle('show', y > 700);
    const h = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? y / h * 100 : 0) + '%';
    if (y < window.innerHeight * 1.2) {
      layers.forEach(l => { l.style.transform = `translateY(${y * +l.dataset.speed}px)`; });
    }
    let cur = 'home';
    secs.forEach(s => { if (s && s.getBoundingClientRect().top <= 120) cur = s.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------------- 启动 ---------------- */
(function init() {
  renderFacts();
  renderCats();
  renderFilters();
  renderSpots();
  renderCultures();
  renderFood();
  renderPlanner();
  renderTimeline();
  renderGuide();
  renderWishBar();
  renderDrawer();
  bind();
  scrollFX();
  observeReveal();
})();
