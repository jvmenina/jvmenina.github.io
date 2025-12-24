import { useSections } from "../hooks/CustomHooks.tsx";
import useElementOnScreen from "./IntersectionObserver.tsx";

import { joinStyles } from "../utils/joinStyles.ts";

import { AppSection } from "./SectionTemplate.tsx";

// import up_seal from "/images/up_seal.svg";
// import dostsei_seal from "/images/dostsei_seal.png";

import coreStyles from "../assets/core.module.css";
import credsStyles from "../assets/credentials.module.css";
import { CardComponent } from "../components/Card.tsx";

type CredentialProps = {
  title: string | JSX.Element,
  organization: string | JSX.Element,
  date: string | JSX.Element,
  link?: string,
  description?: (string | JSX.Element)[],
};

function CredentialComp(props: CredentialProps) {
  const {
    title,
    organization,
    date,
    link,
    description,
  }: CredentialProps = props;
  const { containerRef, isVisible } = useElementOnScreen({});

  return (
    <CardComponent
      additionalClassNames={[
        credsStyles["credentials__credential"],
        // isVisible ? styles["__visible"] : styles["__not-visible"]
      ]}
      cardRef={containerRef}
    >
      <div className={credsStyles.credentials__credential__details}>
        <h4 className={credsStyles.credentials__credential__details__title}>
          {title}
        </h4>
        <span className={credsStyles.credentials__credential__details__org}>
          {organization}
        </span>
        <hr />
        <span className={credsStyles.credentials__credential__details__date}>
          {date}
        </span>
        {
          link
            ? <div className={credsStyles.credentials__credential__details__link}><a href={link} target="_blank" rel="noreferrer">Certificate</a></div>
            : <></>
        }
        {
          description
            ? <div className={credsStyles["credentials__credential__description"]}>{description}</div>
            : <></>
        }
      </div>
    </CardComponent>
  );
}

function CredentialsComp() {
  return (
    <>
      <CredentialComp
        title={"Amazon Web Services Cloud Essentials Knowledge Badge"}
        organization={"Amazon Web Services"}
        date={"December 2025"}
        link={"https://www.credly.com/badges/1f02a623-ed0d-4c7f-99e8-2827c7202cdc/public_url"}
        description={["Badge ID: 1f02a623-ed0d-4c7f-99e8-2827c7202cdc"]}
      />
      <CredentialComp
        title={"Google Maps Platform Technical Fundamentals Credential"}
        organization={"Google Skillshop"}
        date={"July 2024"}
        link={"https://skillshop.exceedlms.com/profiles/47e4e9c31c8f406886a7588596a1d889"}
        // link={"https://skillshop.exceedlms.com/student/award/TMKiihouqux9Bp4e3wyUqgt5"}
        description={["Completion ID: 308867989"]}
      />
      <CredentialComp
        title={"Google Maps Platform Sales Fundamentals Credential"}
        organization={"Google Skillshop"}
        date={"July 2024"}
        // link={"https://skillshop.exceedlms.com/student/award/MYRMaWbdYspTTEEWgS4xfjsx"}
        link={"https://skillshop.exceedlms.com/profiles/47e4e9c31c8f406886a7588596a1d889"}
        description={["Completion ID: 309209019"]}
      />
      <CredentialComp
        title={"Google Cloud Digital Leader Course Completer"}
        organization={"Google Skills"}
        date={"July 2024"}
      />
      <CredentialComp
        title={"DOST-SEI S&T (Science and Technology) Undergraduate Scholarship Awardee"}
        organization={<abbr title="Department of Science and Technology - Science Education Institute">DOST-SEI</abbr>}
        date={"May 2018"}
      />
    </>
  );
}

export function CredentialsSection() { 
  const { sectionContexts } = useSections();
  const isActive = sectionContexts.isActive.credentials;
  const sectionRef = sectionContexts.sectionRefs.credentials;
  return (
    <AppSection 
      isActive={isActive}
      classNames={[]}
      headingText={"Credentials"}
      sectionContents={
        <div className={credsStyles.credentials__contents}>
          <CredentialsComp />
        </div>
      }
      sectionRef={sectionRef}
    />
  );
}