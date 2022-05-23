import * as React from "react"

export const ProfileLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={248}
    height={426.667}
    viewBox="0 0 186 320"
    {...props}
  >
    <path fill={props.fill} d="M0 128v128h186V0H0v128zm67.5-43c0 87.2.1 86.3-6 98.7-5.7 11.5-14.5 17.7-28.6 20.2-7.2 1.2-17.9 1.5-22.8.5l-3.2-.7.3-13.4.3-13.5 8.2-.3c11.7-.3 17.3-4.1 19.3-13.1.5-2.1 1-38.4 1-81.2V4.9l15.8.3 15.7.3V85zM118 7.2c.5 1.3 2.6 8.4 4.5 15.8 2 7.4 5.8 21.4 8.5 31 2.6 9.6 6.4 23.8 8.5 31.5 4 15.1 6.6 24.4 8.7 31.5 1.1 3.9 1.4-3.3 1.8-53.5l.5-58 13.8-.3 13.7-.3V205h-15.4c-11.1 0-15.6-.3-16.3-1.3-1.3-1.7-3.9-10.6-15.3-53.7-2.8-10.7-6.4-24-8-29.5-4.1-14.7-14-51.4-14-52 0-.3-.4-.5-1-.5s-1.1 23.9-1.2 68.2l-.3 68.3h-28l-.3-98.5c-.1-54.2 0-99.1.3-99.8C78.8 5.3 83.7 5 98 5c18.8 0 19.1 0 20 2.2zM54 223.9c1.6 3.1 1.2 5.1-1 5.1-1.4 0-2-.7-2-2.1 0-1.2-.5-1.9-1.2-1.7-.9.3-1.3 2.7-1.3 7.3s.4 7 1.3 7.2c.7.3 1.2-.4 1.2-1.6 0-1.4.6-2.1 2-2.1 2.2 0 2.6 2 1 5.1-1.2 2.2-6.2 2.6-7.9.6-.6-.8-1.4-2.8-1.7-4.5l-.6-3.2H29.4c-12.1 0-14.4-.2-14.4-1.5s2.3-1.5 14.4-1.5h14.4l.6-3.2c.3-1.7 1.1-3.7 1.7-4.5 1.7-2 6.7-1.6 7.9.6zm6 7.1v9h6v-9c0-8.3.1-9 2-9s2 .7 2 10.5V243H56v-10.5c0-9.8.1-10.5 2-10.5s2 .7 2 9zm19.8-7.8c2 2 1.5 5.8-.8 5.8-1.3 0-2-.7-2-2 0-1.1-.4-2-1-2s-1 3.2-1 7.5.4 7.5 1 7.5 1-.9 1-2c0-1.3.7-2 2-2 1.4 0 2 .7 2 2.3 0 3.1-1.8 4.7-5.2 4.7-3.7 0-4.8-2.4-4.8-10.5 0-3.6.5-7.5 1-8.6 1.2-2.2 5.9-2.6 7.8-.7zm7.2 2 .1 3.3 1.4-3.3c.9-2.1 2.1-3.2 3.4-3.2 2.1 0 2.1 0-.1 4.6l-2.3 4.5 2.2 6 2.2 6-2.1-.3c-1.4-.2-2.6-1.5-3.4-3.8l-1.2-3.5-.1 3.7c-.1 3.1-.5 3.8-2.1 3.8-1.9 0-2-.7-2-10.5s.1-10.5 2-10.5c1.6 0 2 .7 2 3.2zm16 1.3c0 3.3.4 4.5 1.5 4.5s1.5-1.2 1.5-4.5c0-3.8.3-4.5 2-4.5 1.9 0 2 .7 2 10.5s-.1 10.5-2 10.5c-1.7 0-2-.7-2-4.5 0-3.3-.4-4.5-1.5-4.5s-1.5 1.2-1.5 4.5c0 3.8-.3 4.5-2 4.5-1.9 0-2-.7-2-10.5s.1-10.5 2-10.5c1.7 0 2 .7 2 4.5zm17-3c0 .9-.9 1.5-2.5 1.5-2.1 0-2.5.5-2.5 3s.4 3 2.5 3c1.6 0 2.5.6 2.5 1.5s-.9 1.5-2.5 1.5c-2.1 0-2.5.5-2.5 3s.4 3 2.5 3c1.6 0 2.5.6 2.5 1.5 0 1.1-1.2 1.5-4.5 1.5H111v-21h4.5c3.3 0 4.5.4 4.5 1.5zm10.8-.6c.8.5 1.3 2.6 1.1 5.7-.1 2.7.2 7 .6 9.6.7 4.4.6 4.8-1.3 4.8-2.2 0-3.2-1.8-3.2-6.1 0-1.6-.4-2.9-1-2.9-.5 0-1 2-1 4.5 0 3.8-.3 4.5-2 4.5-1.9 0-2-.7-2-10.5V222h3.8c2 0 4.3.4 5 .9zm12.2.6c0 .9-.9 1.5-2.5 1.5-2.1 0-2.5.5-2.5 3 0 2.3.4 3 2 3 1.1 0 2 .7 2 1.5s-.9 1.5-2 1.5c-1.6 0-2 .7-2 3 0 2.5.4 3 2.5 3 1.6 0 2.5.6 2.5 1.5 0 1.1-1.2 1.5-4.5 1.5H134v-21h4.5c3.3 0 4.5.4 4.5 1.5zm30 9c0 1.3-2.3 1.5-15 1.5s-15-.2-15-1.5 2.3-1.5 15-1.5 15 .2 15 1.5z" />
    <path fill={props.fill} d="M126 228c0 1.6.5 3 1 3 .6 0 1-1.4 1-3 0-1.7-.4-3-1-3-.5 0-1 1.3-1 3zM6 288v27h8c4.7 0 8-.4 8-1s-3-1-7-1H8v-50h7c4 0 7-.4 7-1s-3.3-1-8-1H6v27zM164 262c0 .6 3 1 7 1h7v50h-7c-4 0-7 .4-7 1s3.3 1 8 1h8v-54h-8c-4.7 0-8 .4-8 1zM32 284.6c0 12.6-.8 16.4-3.5 16.4-.9 0-1.5 1-1.5 2.5 0 2 .5 2.5 2.5 2.5 1.4 0 3.4-.9 4.5-2 1.8-1.8 2-3.3 2-17 0-14.3-.1-15-2-15s-2 .7-2 12.6zM42.1 287.1c-1.3 8.3-2.6 15.9-2.8 17-.4 1.5 0 1.9 2.1 1.9 2.2 0 2.6-.4 2.6-3.1 0-2.9.2-3 3.8-2.7 3.2.3 3.7.7 4 3 .3 2.2.9 2.8 2.8 2.8 1.3 0 2.4-.4 2.4-1 0-.5-1.1-7.8-2.5-16.2-1.4-8.4-2.5-15.6-2.5-16 0-.4-1.7-.8-3.8-.8h-3.8l-2.3 15.1zm7.5 1 1 6.9h-2.9c-2.2 0-2.7-.4-2.3-1.8.3-.9.8-4.3 1.2-7.5.3-3.2.9-5.5 1.3-5.2.3.4 1.1 3.8 1.7 7.6zM61.9 273.9c-1.9 1.5-2.4 2.9-2.4 6.5 0 4 .5 5 4.6 9.3 5 5.1 6.4 8 5 10.1-1.3 2.1-4.6 1-4.9-1.6-.3-1.6-1-2.2-2.8-2.2-3.3 0-3.3 4.2.1 7.5 5.3 5.4 12.5 2 12.5-6 0-4-.6-5.1-5.1-10.1-5.5-6.1-6.2-9.6-2.1-10.2 1.7-.3 2.5.2 2.9 1.7.3 1.2 1.4 2.1 2.4 2.1 1.4 0 1.9-.7 1.9-2.9 0-5.5-7.4-8-12.1-4.2zM80 274c-1.8 1.8-2 3.3-2 15s.2 13.2 2 15c2.6 2.6 7 2.6 10.4-.1 2.6-2 2.6-2.2 2.6-14.9s0-12.9-2.6-14.9c-3.4-2.7-7.8-2.7-10.4-.1zm7.8 14.8c.2 9.4 0 11.3-1.3 11.8-3.4 1.3-4.5-1.4-4.5-11.1 0-11 .5-12.7 3.4-12.3 2 .3 2.1.9 2.4 11.6zM97 288.9c0 16.3.1 17.1 2 17.1 1.8 0 2-.8 2.2-11.8.3-13.1.5-13 4.8 3.5 2 7.5 2.5 8.3 4.6 8.3h2.4v-17c0-16.3-.1-17-2-17s-2 .7-2 9.7c0 5.3-.2 9.4-.5 9.2-.2-.3-1.5-4.5-2.8-9.5-2.3-8.7-2.5-8.9-5.5-9.2l-3.2-.3v17zM125 288.9c0 16.3.1 17.1 2 17.1 1.8 0 2-.8 2.2-11.8.3-13.1.5-13 4.8 3.5 2 7.5 2.5 8.3 4.6 8.3h2.4v-17c0-16.3-.1-17-2-17s-2 .7-2 9.7c0 5.3-.2 9.4-.5 9.2-.2-.3-1.5-4.5-2.8-9.5-2.3-8.7-2.5-8.9-5.5-9.2l-3.2-.3v17zM147.5 274.5c-2.4 2.3-2.5 3-2.5 14.5s.1 12.2 2.5 14.5c3 3.1 7.7 3.3 10.5.5 1.6-1.6 2-3.3 2-9.5V287h-3c-2.5 0-3 .4-3 2.5 0 1.4.5 2.5 1 2.5 1.2 0 1.3 6 .1 7.8-.5.8-1.7 1.2-2.7 1-1.7-.3-1.9-1.4-1.9-11.8v-11.5h2.5c2 0 2.6.6 2.8 2.7.2 2 .9 2.8 2.3 2.8 1.5 0 1.9-.7 1.9-3.5 0-7-7.6-10-12.5-5z" />
  </svg>
)
