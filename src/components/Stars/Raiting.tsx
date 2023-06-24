import { Key,  useState} from "react";
import StarComponent from "./Stars";
import css from "./rating.module.css";




const Rating = (props: { ratingInPercent: number; showOutOf: boolean;}) => {
  const {
    ratingInPercent,
    showOutOf,
  } = props;


  const decimal = ratingInPercent / 20;
  const nonFraction = Math.trunc(decimal);
  const fraction = Number((decimal - nonFraction).toFixed(2));
  const fractionPercent = fraction * 100;


  const numberOfStar = 5

  const RatingHighlighted = (
    <StarComponent type={"ratingHighlighted"} />
  );
  const RatingDefault = (
    <StarComponent type={"ratingDefault"}/>
  );


  const showDefaultStar = () => {
    return RatingDefault;
  };

  let isShow = true;
  const getStar = (index:any) => {
    if (index <= nonFraction - 1) {
      isShow = true;
      return "100%";
    } else if (fractionPercent > 0 && isShow) {
      isShow = false;
      return `${fractionPercent}%`;
    } else {
      return "0%";
    }
  };

  // const isShowOutOfStar = (index: any) => {
  //   if (showOutOf) {
  //     return showOutOf;
  //   }

  //   const isLoopThrough = (fraction === 0 ? nonFraction : nonFraction + 1) - 1;
  //   return index <= isLoopThrough;
  // };



  return (
    <div className={css.container}>
      {[...new Array(numberOfStar)].map((arr, index) =>
      
      <div style={{ position: "relative" }} key={index}>
      <div
        style={{
          width: getStar(index),
          overflow: "hidden",
          position: "absolute"
        }}
      >
        {RatingHighlighted}
      </div>
      {showDefaultStar()}
    </div>

      )}
    </div>
  );
};



export default Rating;
