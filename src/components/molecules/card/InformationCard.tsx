import Icon from "../../atoms/Icon";
import { ContactInformation } from "../../../interfaces";

import styles from "./InformationCard.module.scss";

interface InformationCardProps {
  data: ContactInformation;
}

export const InformationCard = ({ data }: InformationCardProps) => {
  const Tag = data.htmlElement.tag;

  return (
    <article className={styles.informationCard}>
      <div className={styles.informationCard__iconBox}>
        <Icon icon={data.icon} size="small" />
      </div>

      <div className={styles.informationCard__info}>
        <p className={styles.informationCard__title}>{data.title}</p>
        {Tag === "p" ? (
          <Tag className={styles.informationCard__text}>{data.text}</Tag>
        ) : (
          <Tag
            className={styles.informationCard__text}
            href={data.htmlElement.href}
          >
            {data.text}
          </Tag>
        )}
      </div>
    </article>
  );
};
