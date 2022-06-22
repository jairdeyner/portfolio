import { InformationCard } from "../card/InformationCard";

import { contactInformation } from "../../../data";
import styles from "./InformationCardList.module.scss";

export const InformationCardList = () => {
  return (
    <ul className={styles.informationCardList}>
      {contactInformation.map(data => (
        <li key={data.id}>
          <InformationCard data={data} />
        </li>
      ))}
    </ul>
  );
};
