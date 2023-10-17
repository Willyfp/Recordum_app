const Stepper = ({
  numberOfSteps,
  actualStep,
}: {
  numberOfSteps: number;
  actualStep: number;
}) => {
  return (
    <ul className="steps w-full py-[24px]">
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
