import Image from "next/image";
import Link from "next/link";
import EmbedLink from "./EmbedLink";
import AnimateComponent from "./AnimateComponent";

const ContentInfos = () => {
  return (
    <div className="flex flex-col h-full w-full gap-10  mt-10">
      {/* Information */}
      <section className="flex flex-col justify-around  h-full gap-5 w-full    ">
        <h6 className="main_headings">
          CarpeDiem Pension&apos;s Flexible, Blockchain-Enabled Future
        </h6>
        <article className="main_heading_content ">
          CarpeDiem Pension redefines retirement planning with a unique approach
          that deviates from traditional pension funds. With no minimum age for
          retirement, it offers flexibility and freedom, ensuring all genders
          receive equal treatment. CarpeDiem Pension ensures blockchain
          transparency, anonymity, and global accessibility, safeguarding
          pensions during international relocation. Easily transfer pensions to
          loved ones; share wallet access. Re-deposit payouts for increased
          future benefits. Importantly, CarpeDiem Pension prioritizes deposit
          security by avoiding utilizing client funds for internal investments.
          To become a part of this forward-thinking pension scheme, one simply
          needs to install and configure a blockchain wallet.
        </article>
        <AnimateComponent>
          <div className="relative   aspect-video w-full md:h-[350px] ">
            <Image
              src="https://s3-alpha-sig.figma.com/img/4ac7/d013/b52d6815e1eea17ca18b12bc2668392c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BQTfTIM~VIjrj1X2wDJcjNX9EYF6fA2mzV8LanbjWIFdB4Ptr8NSt~PC8~TNkoZPiXtE0030JR8atxC3-pgkyiW5bQw3BYZGFzsKllXqpyWEVHJFwXw~7DnW0MfbSNp7d~v2M4dMG7PS1EXC3a6D4dwJeL5gCDcpZRzgKZMKzrNrphjxUuRQpQasAgtHkfHdLF2DjzvRjKZxEYLXAitAqHQ4wKMDsr2WJjfG3nabOow6bDYhY3CG5lUMqYqgRhi92tZEibJ3yF2HncBsyHROb7mu-s1H9ncX8ojihF-oKEz9VLVB7NiRMldQYvQGt0~bf9F5XasaJzWIIRP94Yp9Eg__"
              alt="main-Content Heading"
              fill
              className=" object-fill rounded-lg"
              priority={true}
              sizes="max-width:600px,max-height:400px"
            />
          </div>
        </AnimateComponent>
      </section>

      {/* Information */}
      <section className="flex flex-col justify-around  h-full gap-5 w-full    ">
        <h6 className="main_headings">
          CarpeDiem Pension&apos;s Challenges: Enhancing Security Against
          Reentrancy, Front-Running, and Infinite Minting
        </h6>
        <article className="main_heading_content ">
          CarpeDiem Pension confronts critical security challenges, including
          the risks of reentrancy and front-running exploits.Malicious actors
          may exploit contract vulnerabilities, withdrawing excess funds or
          manipulating transaction timing for unfair advantages. System faces
          infinite minting threats, risking economic stability with endless
          creation of CDP tokens or pension shares.  Addressing these challenges
          is paramount to safeguarding the integrity and security of CarpeDiem
          Pension.
        </article>
        <AnimateComponent>
          <div className="relative   aspect-video w-full md:h-[350px] md:w-3/4 ">
            <Image
              src="https://www.figma.com/file/LkU7VqGlBqaAeN8ZS6wcNn/image/50d4d7ceb61b030e263e7ab85ddd3fa68d0d7691"
              alt="main-Content Heading"
              fill
              className=" object-fill rounded-lg"
              priority={true}
              sizes="max-width:600px,max-height:400px"
            />
          </div>
        </AnimateComponent>
      </section>

      {/* Point wise Information */}
      <section className="flex flex-col justify-around  h-full gap-5 w-full    ">
        <h6 className="main_headings">
          CarpeDiem Pension&apos;s Journey Through our Audit Process
        </h6>
        <ol className="main_heading_content flex flex-col gap-3  list-decimal">
          <li className="main_list flex flex-col gap-3 list-decimal">
            1. Information Gathering:
            <ul className="flex flex-col gap-3">
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Collected and
                reviewed all relevant documentation, including whitepaper,
                technical specifications, and design documents.
              </li>
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Obtained a clear
                understanding of the CDP platform&apos;s functionality, economic
                model, and intended user interactions.
              </li>
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Discussed client
                concerns and specific areas of focus for the audit.
              </li>
            </ul>
          </li>
          <li className="main_list flex flex-col gap-3">
            2. Manual Code Review:
            <ul className="main_heading_content flex flex-col gap-3 ">
              <p>
                <span className="text-[#253858]">&#8226;</span> Collected and
                reviewed all relevant documentation, including whitepaper,
                technical specifications, and design documents.
              </p>
              <div className="flex flex-col md:ml-10 gap-3 ml-2">
                <p className="main_heading_content">
                  <span className="main_list_point  ">
                    Vulnerability identification:{" "}
                  </span>
                  Searching for known vulnerabilities like reentrancy,
                  front-running, integer overflows, and access control issues
                  etc.
                </p>
                <p className="main_heading_content">
                  <span className="main_list_point  ">Logic flaws: </span>
                  Identifying inconsistencies or unintended behaviors in the
                  code logic.
                </p>
                <p className="main_heading_content">
                  <span className="main_list_point  ">
                    Tokenomics correctness:{" "}
                  </span>
                  Verifying if the code accurately implements the intended
                  economic model and token distribution mechanisms.
                </p>
                <p className="main_heading_content">
                  <span className="main_list_point  ">
                    Solidity best practices:{" "}
                  </span>
                  Compliance with secure coding standards and adherence to
                  established guidelines.
                </p>
              </div>
            </ul>
          </li>
          <li className="main_list flex flex-col gap-3 list-decimal">
            3. Functional Testing:
            <ul className="flex flex-col gap-3">
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Developed and
                executed a comprehensive set of test cases covering various user
                interactions and edge cases.
              </li>
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Simulated
                different deposit, claim, and referral scenarios to assess
                functionality and uncover potential exploits.
              </li>
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Focused on
                scenarios identified during the manual review and client
                concerns (e.g., infinite minting, reward calculation errors).
              </li>
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Leveraged tools
                like Hardhat and Ganache to deploy and test the smart contract
                locally.
              </li>
            </ul>
          </li>
          <li className="main_list flex flex-col gap-3 list-decimal">
            4. Automated Testing:
            <ul className="flex flex-col gap-3">
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Employed static
                analysis tools like Slither to identify vulnerabilities through
                automated code scanning.
              </li>
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Utilized
                symbolic execution tools like Mythril to explore various code
                execution paths and uncover potential attack vectors.
              </li>
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Integrated unit
                tests are written by the CDP team to verify specific contract
                functions and their behaviour.
              </li>
            </ul>
          </li>
          <li className="main_list flex flex-col gap-3 list-decimal">
            5. Reporting & Remediation:
            <ul className="flex flex-col gap-3">
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Prepared a
                detailed report outlining all identified vulnerabilities,
                categorized by severity and potential impact.
              </li>
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Provided clear
                recommendations for fixing each vulnerability, including code
                snippets and best practices.
              </li>
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Collaborated
                with the CDP team to prioritize and address the identified
                issues.
              </li>
              <li className="main_heading_content">
                <span className="text-[#253858]">&#8226;</span> Conducted
                additional verification testing after vulnerability fixes were
                implemented.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Information */}
      <section className="flex flex-col justify-around  h-full gap-5 w-full    ">
        <h6 className="main_headings">
          QuillAudits&apos; Strategic Approach to CDP Security Audits
        </h6>
        <article className="main_heading_content ">
          We prioritize threat modeling based on platform-specific risks.
          Security-first, we identify and mitigate vulnerabilities beyond
          functionality testing. Using white-box and black-box tests, we conduct
          thorough vulnerability assessments. Maintaining transparency, we
          communicate openly with the CDP team. Emphasizing clarity, we present
          actionable insights for efficient issue resolution.
        </article>
      </section>

      {/* Information */}
      <section className="flex flex-col justify-around  h-full gap-5 w-full    ">
        <h6 className="main_headings">
          Comprehensive Audit Discoveries and Remediation Strategies
        </h6>
        <article className="main_heading_content ">
          Throughout the audit process, we unearthed a total of 33 issues,
          spanning from minor concerns to critical vulnerabilities. Among these,
          some of the critical issues identified were: Here&apos;s how we
          remediated them :
          <ol className="flex flex-col gap-5    ">
            <li>
              <span className="font-bold">1. Unauthorized Claim/Compound:</span>
              <p className="ml-2 main_heading_content">
                a. Users could claim/compound a substantial amount without
                making a deposit or waiting for the stipulated time.{" "}
              </p>
            </li>
            <li>
              <span className="font-bold">2. Precision Loss in mintCDP():</span>
              <p className="ml-2 main_heading_content">
                a. Precision loss and unscaled values were identified while
                calculating rewardPerShare in the mintCDP() function.
              </p>
            </li>
            <li>
              <span className="font-bold">3. Multiplication Accuracy:</span>
              <p className="ml-2 main_heading_content">
                a. Users could claim/compound a substantial amount without
                making a deposit or waiting for the stipulated time.{" "}
              </p>
            </li>
            <li>
              <span className="font-bold">4. Incorrect Share Allocation:</span>
              <p className="ml-2 main_heading_content">
                a. The protocol was allocating shares for all days, even when
                there were no corresponding deposits, leading to inefficient use
                of resources.
              </p>
            </li>
            <li>
              <span className="font-bold">
                5. Logic Error in Referral Handling:
              </span>
              <p className="ml-2 main_heading_content">
                a. A logic error resulted in users always having their
                user.referral set to address(0), which could be exploited to
                trick the referral system
              </p>
            </li>
            <li>
              <span className="font-bold">6. Referral Exploitation:</span>
              <p className="ml-2 main_heading_content">
                a. Users could exploit the referral system to extract more CDP
                from the protocol, undermining its integrity.
              </p>
            </li>
          </ol>
        </article>
      </section>

      {/* Information */}
      <section className="flex flex-col justify-around  h-full gap-5 w-full    ">
        <h6 className="main_headings">Remediation & Impact:</h6>
        <article className="main_heading_content ">
          All identified vulnerabilities were addressed by the CDP team,
          significantly enhancing the smart contract&apos;s security posture.
          Key improvements include
          <ul className="flex flex-col gap-3 py-3 md:py-5">
            <li className="main_heading_content">
              <span className="text-[#253858]">&#8226;</span> Implementation of
              reentrancy protection mechanisms.
            </li>
            <li className="main_heading_content">
              <span className="text-[#253858]">&#8226;</span> Accurate handling
              of decimal values using established libraries or best practices.
            </li>
            <li className="main_heading_content">
              <span className="text-[#253858]">&#8226;</span> Revised
              calculations with proper scaling factors
            </li>
            <li className="main_heading_content">
              <span className="text-[#253858]">&#8226;</span> Fixing logic
              errors to ensure deposits and waiting periods are enforced.
            </li>
            <li className="main_heading_content">
              <span className="text-[#253858]">&#8226;</span> Addressing
              referral system vulnerabilities to prevent abuse.
            </li>
          </ul>
          <div className="hidden md:block">
            <EmbedLink />
          </div>
          <p className="main_heading_content">
            CDP smart contract audit revealed and fixed critical
            vulnerabilities, safeguarding funds and ensuring platform stability.
            This underscores the need for proactive security in blockchain
            projects, crucial for financial asset management. Through audits and
            issue resolution, CDP reinforces platform security, bolstering user
            trust.
          </p>
          <div className="block md:hidden">
            <EmbedLink />
          </div>
        </article>
      </section>
    </div>
  );
};

export default ContentInfos;
