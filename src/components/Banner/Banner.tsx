import sytles from './Banner.module.css';

/*
Props de tipos, funciona semelhante a paramentro de função,
no lado esquerdo fica as variaveis e no lado direito os tipos
*/
type BannerProps = {
    src:string;
    alt?:string // '?' significa que é opcional
}

const Banner = ({src,alt}:BannerProps) => {
  return (
    <img src={src} alt={alt} className={sytles.banner} />
  )
}

export default Banner
