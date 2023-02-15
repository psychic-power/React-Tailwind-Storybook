import { useState } from "react";
import TabItem from "../TabItem/TabItem";

/**
 * This component represents tabs.
 *
 * @param {array} tabData - Tab datas with array of strings. e.g tabData: ["Tab item 1", "Tab item 2", "Tab item 3", "Tab item 4"],
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function Tab({ tabData, ...rest }) {
  const [active, setActive] = useState(0);

  return (
    <div
      className="flex p-0.5 w-fit rounded bg-surface-alt-light dark:bg-surface-alt-dark"
      {...rest}
    >
      {tabData?.map((item, key) => (
        <TabItem
          key={key}
          name={item}
          onItemClicked={() => setActive(key)}
          current={active === key}
        />
      ))}
    </div>
  );
}
