import { UserIcon } from "../../../icons/icon";
import { Color, Size } from "../../../utils/theme";

/**
 * This component represents a user avatars.
 *
 * @param {string} username - If the image not exist, show avatar with name (e.g John Doe - JD)
 * @param {string} image - The image source (e.g https://images/abc.png).
 * @param {number} size - The variant of the avatar (Size.sm, Size.md, Size.lg etc). Default is Size.lg viz 24px
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function Avatar({ username, image, size, ...rest }) {
  return (
    <>
      {image ? (
        <div
          className={` rounded-full w-fit ${size ? size : Size.general.lg} ${
            Color.ring.divider
          } ring-1`}
          {...rest}
        >
          <img
            src={image}
            alt="avatar"
            className={`rounded-full ${size ? size : Size.general.lg}`}
          />
        </div>
      ) : username ? (
        <div
          className={`flex justify-center items-center rounded-full ${
            size ? size : Size.general.lg
          } ${Color.background.altDark} ${Color.ring.divider} ring-1`}
          {...rest}
        >
          <caption className={`${Color.text.primaryDark}`}>{username}</caption>
        </div>
      ) : (
        <div
          className={`rounded-full large w-fit ${size ? size : Size.icon.lg} ${
            Color.background.altLight
          } ${Color.text.tetriaryLight} ${Color.ring.divider} ring-1`}
          {...rest}
        >
          <UserIcon className="p-0.5" />
        </div>
      )}
    </>
  );
}
