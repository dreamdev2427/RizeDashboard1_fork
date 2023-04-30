import Lottie from "lottie-react";
import arrowAnim from '../assets/json/arrow.json';

const Arrow = () => {
  return (
    <div className="rize-banner--arrow">
      <Lottie
        animationData={arrowAnim}
        loop={true}
      />
    </div>
  )
}

export default Arrow;