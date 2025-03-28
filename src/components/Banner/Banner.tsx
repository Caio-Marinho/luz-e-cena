import { BannerProps } from '../../Types/Banner.d';
import sytles from './Banner.module.css';

const Banner = ({src,alt}:BannerProps) => {
  return (
    <img src={src} alt={alt} className={sytles.banner} />
  )
}

export default Banner
