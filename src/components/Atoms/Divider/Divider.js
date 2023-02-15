export default function Divider({ vertical, ...rest }) {
  return (
    <div
      className={`${
        vertical ? "w-[1px] h-full mx-2" : "w-full h-[1px] my-2"
      } justify-items-center align-middle bg-surface-divider-light dark:bg-surface-divider-dark`}
      {...rest}
    ></div>
  );
}
