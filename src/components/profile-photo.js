import PropTypes from 'prop-types';
import Img from 'next/image';

export default function ProfilePhoto({ src, alt, size = 400 }) {
  return (
    <Img
      src={src}
      alt={alt}
      className={`rounded-full`}
      width={size}
      height={size}
    />
  );
}

ProfilePhoto.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.number,
};