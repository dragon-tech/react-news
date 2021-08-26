import classnames from "classnames";
import styles from "./NewsCard.module.css";
import PropTypes from "prop-types";
import { formatDate } from "../../utils/formatDate";

const NewsCard = ({
  src,
  title,
  publishedAt,
  author,
  sourceName,
  description,
  url,
  notLasChild,
}) => {
  return (
    <>
      <div
        className={classnames(styles.newsCard, {
          [styles.newsCardGap]: notLasChild,
        })}
      >
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={src}
            alt={`${title} thumbnail img`}
          />
          <p className={styles.imgTitle}>{title}</p>
        </div>

        <div className={styles.newsCardContent}>
          <p className={styles.newsCardDate}>{formatDate(publishedAt)}</p>
          <p className={styles.newsCardAuthor}>{`${author} | ${sourceName}`}</p>
          <p className={styles.newsCardDesc}>{description}</p>
          <a
            className={styles.url}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            Go to website
          </a>
        </div>
      </div>
    </>
  );
};

NewsCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  publishedAt: PropTypes.string,
  author: PropTypes.string,
  sourceName: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  notLasChild: PropTypes.bool,
};

export default NewsCard;
