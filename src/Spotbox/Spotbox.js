import React from "react";
import "./Spotbox.scss";

const Spotbox = ({
  bodyText,
  btnText,
  btnUrl,
  legalText,
  primaryTitle,
  secondaryTitle,
  subTitle,
  imageUrl,
  imageAlt,
}) => {
  const hasMedia = imageUrl ? true : false;

  return (
    <div className="ys-container-fluid spotbox">
      <div className="ys-row">
        <div className="ys-column">
          <section className="spotbox__container">
            {hasMedia && (
              <div className="spotbox__media">
                <img
                  className="spotbox__image"
                  src={imageUrl}
                  loading="lazy"
                  alt={imageAlt}
                />
              </div>
            )}
            <div className="spotbox__content">
              <header class="spotbox__content-header">
                <h3 class="ys-secondary-title ">{secondaryTitle}</h3>
                <h2 class="ys-primary-title">{primaryTitle}</h2>
                <p class="ys-subtitle">{subTitle}</p>
              </header>
              <div class="spotbox__rich-text">{bodyText}</div>
              <div class="spotbox__content-action">
                <a
                  href={btnUrl}
                  class="ys-button ys-button--cta spotbox__buy-btn"
                  target="_blank"
                  title={btnText}
                >
                  {btnText}
                </a>
              </div>
              <div class="spotbox__content-legal">{legalText}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Spotbox;
