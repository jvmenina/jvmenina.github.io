import styles from "./App.module.css";
import { NavigationAnchor } from "./NavigationAnchor.tsx";
import useElementOnScreen from "./IntersectionObserver.tsx";

// import up_seal from "/images/up_seal.svg";
// import dostsei_seal from "/images/dostsei_seal.png";

type CredentialProps = {
  title: string | JSX.Element;
  organization: string | JSX.Element;
  date: string | JSX.Element;
  link?: string;
  details: (string | JSX.Element)[];
};

function CredendialComp(props: CredentialProps) {
  const {
    title,
    organization,
    date,
    link,
    details,
  }: CredentialProps = props;

  const { containerRef, isVisible } = useElementOnScreen({});

  return (
    <div ref={containerRef} className={[
      styles.__card, 
      styles['credentials__card'],
      isVisible ? styles['__visible'] : styles['__not-visible']
    ].join(" ")}>
      <div className={styles.academics__card__details}>
        <div className={styles.academics__card__details__head}>
          {title}
        </div>
        <div className={styles.academics__card__details__subtitle}>
          <span className={styles.academics__card__details__subtitle__org}>{organization}</span>
          <hr />
          <span className={styles.academics__card__details__subtitle__date}>{date}</span>
        </div>
        <div className={styles.credentials__details__link}>
          {
            link
              ? <a href={link} target="_blank" rel="noreferrer">Certificate</a>
              : <></>
          }
        </div>
        <div className={styles['academics__card__details__body--important']}>
          {details}
        </div>
      </div>
    </div>
  );
}

function CredentialsComp() {
  // const { containerRef, isVisible } = useElementOnScreen({});

  return (
    <div>
      {/* <h3>Credentials</h3> */}
      <CredendialComp
        title={"Google Maps Platform Technical Fundamentals Credential"}
        organization={"Google Skillshop"}
        date={"July 2024"}
        link={"https://skillshop.exceedlms.com/student/award/TMKiihouqux9Bp4e3wyUqgt5"}
        details={[]}
      />
      <CredendialComp
        title={"Google Maps Platform Sales Fundamentals Credential"}
        organization={"Google Skillshop"}
        date={"July 2024"}
        link={"https://skillshop.exceedlms.com/student/award/MYRMaWbdYspTTEEWgS4xfjsx"}
        details={[]}
      />
      <CredendialComp
        title={"S&T Undergraduate Scholarship Awardee"}
        organization={<abbr title="Department of Science and Technology - Science Education Institute">DOST-SEI</abbr>}
        date={"May 2018"}
        details={[]}
      />
      {/* <div ref={containerRef} className={[
        styles.__card, 
        styles['academics__card'],
        isVisible ? styles['__visible'] : styles['__not-visible']
      ].join(" ")}>
        <img
          src={dostsei_seal}
          alt="Department of Science and Technology - Science Education Institute seal" 
          loading="lazy" 
        />
        <dl className={styles.academics__card__details}>
          <dt className={styles.academics__card__details__head}>
            <abbr title="Department of Science and Technology - Science Education Institute">
              DOST-SEI
            </abbr>
          </dt>
          <dd className={styles['academics__card__details__body--important']}>
            <span><abbr title="Science and Technology">S&T</abbr> Undergraduate Scholarship Awardee</span>
          </dd>
        </dl>
      </div> */}
    </div>
  );
}

export function CredentialsSection() { 
  return (
    <section className={styles.academics}>
      <NavigationAnchor id="Credentials" />
      <div className={[
        styles['__section-container'], 
        styles['__limit-width']
      ].join(" ")}>
        <h2>Credentials</h2>
        <div className={styles['__section-contents']}>
          <CredentialsComp />
        </div>
      </div>
    </section>
  );
}