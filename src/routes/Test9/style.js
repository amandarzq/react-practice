import { css, keyframes } from 'react-emotion';

const orbit = keyframes`{ 
  from { transform:rotate(0deg) } 
  to { transform:rotate(360deg) } 
}`

export const cssSpace = css({
  marginTop: 24,
  width: 1000,
  height: 1000,
  backgroundColor: 'black',
  position: 'relative',
  overflow: 'hidden',
});

export const cssSun = css({
  width: 80,
  height: 80,
  backgroundColor: 'yellow',
  borderRadius: 40,
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: `translate(-50%,-50%)`,
});

export const cssOrbit = (props) => css({
  animation: `${orbit} ${props.duration}s linear infinite`,
  width: `${props.size}px`,
  height: `${props.size}px`,
  // backgroundColor: 'rgba(0,0,1,0.1)',
  position: 'absolute',
  top: `${props.axis}px`,
  left: `${props.axis}px`,
  animationDelay: `${props.delay}s`
})

export const cssPlanet = (props) => css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: 20,
  height: 20,
  borderRadius: '50%',
  backgroundColor: `${props.color}`,
});
