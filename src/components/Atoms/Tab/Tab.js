import { useState } from "react";
import TabItem from "../TabItem/TabItem";

export default function Tab({ tabData }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex p-0.5 w-fit rounded bg-surface-alt-light dark:bg-surface-alt-dark">
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
