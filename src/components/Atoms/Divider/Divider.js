/**
 * This component represents dividers.
 *
 * @param {boolean} vertical - It represents direction of divider. If vertical is true, it's just vertical divider.
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function Divider({ vertical, ...rest }) {
  return (
    <div
      className={`${
        vertical ? "w-[1px] h-full mx-2" : "w-full h-[1px] my-2"
      } justify-items-center align-middle bg-surface-divider-light dark:bg-surface-divider-dark`}
      {...rest}
    >
    </div>
  );
}
