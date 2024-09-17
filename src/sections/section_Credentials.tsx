import styles from "../assets/App.module.css";
import { NavigationAnchor } from "./NavigationAnchor.tsx";
import useElementOnScreen from "./IntersectionObserver.tsx";

// import up_seal from "/images/up_seal.svg";
// import dostsei_seal from "/images/dostsei_seal.png";

type CredentialProps = {
  title: string | JSX.Element,
  organization: string | JSX.Element,
  date: string | JSX.Element,
  link?: string,
  description?: (string | JSX.Element)[],
};

function CredendialComp(props: CredentialProps) {
  const {
    title,
    organization,
    date,
    link,
    description,
  }: CredentialProps = props;
  const { containerRef, isVisible } = useElementOnScreen({});

  return (
    <div ref={containerRef} className={[
      styles.__card, 
      styles["credentials__credential"],
      isVisible ? styles["__visible"] : styles["__not-visible"]
    ].join(" ")}>
      <div className={styles.credentials__credential__details}>
        <p className={styles.credentials__credential__details__title}>
          {title}
        </p>
        <span className={styles.credentials__credential__details__org}>
          {organization}
        </span>
        <hr />
        <span className={styles.credentials__credential__details__date}>
          {date}
        </span>
        {
          link
            ? <div className={styles.credentials__credential__details__link}><a href={link} target="_blank" rel="noreferrer">Certificate</a></div>
            : <></>
        }
      </div>
      {
        description
          ? <div className={styles["credentials__credential__description"]}>{description}</div>
          : <></>
      }
    </div>
  );
}

function CredentialsComp() {
  return (
    <>
      <CredendialComp
        title={"Google Maps Platform Technical Fundamentals Credential"}
        organization={"Google Skillshop"}
        date={"July 2024"}
        link={"https://skillshop.exceedlms.com/student/award/TMKiihouqux9Bp4e3wyUqgt5"}
      />
      <CredendialComp
        title={"Google Maps Platform Sales Fundamentals Credential"}
        organization={"Google Skillshop"}
        date={"July 2024"}
        link={"https://skillshop.exceedlms.com/student/award/MYRMaWbdYspTTEEWgS4xfjsx"}
      />
      <CredendialComp
        title={"S&T Undergraduate Scholarship Awardee"}
        organization={<abbr title="Department of Science and Technology - Science Education Institute">DOST-SEI</abbr>}
        date={"May 2018"}
      />
    </>
  );
}

export function CredentialsSection() { 
  return (
    <section className={styles.credentials}>
      <NavigationAnchor id="Credentials" />
      <div className={[
        styles["__section-container"], 
        styles["__limit-width"]
      ].join(" ")}>
        <h2>Credentials</h2>
        <div className={styles["__section-contents"]}>
          <CredentialsComp />
        </div>
      </div>
    </section>
  );
}