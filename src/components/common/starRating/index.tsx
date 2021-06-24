import React, { FC, ReactElement } from "react";
import { ReactComponent as EmptyStar } from "../../../assets/svg/empty_star.svg";
import { ReactComponent as FullStar } from "../../../assets/svg/star.svg";

type IProps = {
    rating: number
}

const StarRating: FC<IProps> = ({ rating }): ReactElement => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <span key={index}>
                        {index <= rating ? <FullStar /> : <EmptyStar />}
                    </span>
                );
            })}
        </div>
    );
};

export { StarRating };
