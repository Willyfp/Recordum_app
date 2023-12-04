const Stepper = ({
  numberOfSteps,
  actualStep,
  disablePadding,
}: {
  numberOfSteps: number;
  actualStep: number;
  disablePadding?: boolean;
}) => {
  return (
    <ul className={`steps w-full ${disablePadding ? "pb-4" : "py-[2rem]"}`}>
      {[...Array(numberOfSteps)].map((_, index) => (
        <li
          key={index}
          className={`step ${index <= actualStep ? "step-primary" : ""}`}
        ></li>
      ))}
    </ul>
  );
};

export default Stepper;
