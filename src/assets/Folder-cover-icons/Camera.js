import React from 'react';

const SVG = ({
  defaultColors = {},
  color = 'blue',
  width = 43,
  height = 33
}) => {
  // Use default colors if none hex color is set
  color = color.startsWith('#') ? color : defaultColors[color];
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 43 33">
      <path
        fill={color}
        fillRule="evenodd"
        d="M39.1153846,32.435994 C33.1795969,32.435994 28.3653846,27.6334378 28.3653846,21.7105851 C28.3653846,15.7885501 33.1804531,10.985994 39.1153846,10.985994 C45.0511723,10.985994 49.8645285,15.7885501 49.8653846,21.7105851 C49.8653846,27.6334378 45.0511723,32.435994 39.1153846,32.435994 L39.1153846,32.435994 L39.1153846,32.435994 L39.1153846,32.435994 L39.1153846,32.435994 Z M50.416738,6.66685301 L49.014257,6.66685301 C49.014257,5.85749502 48.3720953,5.50607429 47.5809522,5.50607429 L46.1467912,5.50607429 C45.355648,5.50607429 44.7143426,5.85749502 44.7143426,6.66685301 L28.8546624,6.66685301 C27.4213576,6.66685301 27.4213576,3 25.9880528,3 L18.1048764,3 C16.6715717,3 16.6715717,6.66685301 15.2382669,6.66685301 L14.583262,6.66685301 C12.6045479,6.66685301 11,8.30905297 11,10.333706 L11,32.3331467 C11,34.3586384 12.6045479,36.0008384 14.583262,35.9999997 L50.416738,35.9999997 C52.3954521,35.9999997 54,34.3586384 54,32.3331467 L54,10.333706 C54,8.30905297 52.3954521,6.66685301 50.416738,6.66685301 L50.416738,6.66685301 L50.416738,6.66685301 L50.416738,6.66685301 L50.416738,6.66685301 Z M39.1153846,29.960994 C34.5493941,29.960994 30.8461538,26.26672 30.8461538,21.7106794 C30.8461538,17.1552679 34.5500527,13.460994 39.1153846,13.460994 C43.6813751,13.460994 47.3839568,17.1552679 47.3846154,21.7106794 C47.3846154,26.26672 43.6813751,29.960994 39.1153846,29.960994 L39.1153846,29.960994 L39.1153846,29.960994 L39.1153846,29.960994 L39.1153846,29.960994 Z" transform="translate(-11 -3)"/>
    </svg>
  );
};

export default SVG;