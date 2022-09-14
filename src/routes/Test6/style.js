import { css } from 'react-emotion';

export const videoContainer = css({
  overflow: 'hidden',
  borderRadius: '10px',
  aspectRatio: 4 / 3,
  width: '100%',
  height: '100%'
})

export const cssVideo = css({
  width: "100%",
  objectFit: 'contain',
  aspectRatio: 4 / 3,
});
