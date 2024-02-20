interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  const filledStars = Math.floor(rating);
  const remainingFraction = rating - filledStars;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          width="20px"
          height="20px"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          fill={
            index < filledStars
              ? "#ffce31"
              : index === filledStars && remainingFraction > 0
              ? `url(#star-gradient-${index})`
              : "none"
          }
          stroke="#ffce31"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1"
        >
          {index === filledStars && remainingFraction > 0 && (
            <defs>
              <linearGradient
                id={`star-gradient-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset={`${remainingFraction * 100}%`}
                  style={{ stopColor: "#ffce31" }}
                />
                <stop
                  offset={`${remainingFraction * 100}%`}
                  style={{ stopColor: "transparent" }}
                />
              </linearGradient>
            </defs>
          )}
          <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
