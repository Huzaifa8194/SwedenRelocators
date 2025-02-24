import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/programmers-building-mobile-application.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";

import wp1 from "../../assets/iconscout/wp1.png";
import wp2 from "../../assets/iconscout/wp2.png";
import wp3 from "../../assets/iconscout/wp3.png";
import wp4 from "../../assets/iconscout/wp4.png";

import Sidebar from "../../components/ScrollableBar";

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";

import { useTranslation } from '../../context/TranslationContext';
import Header from "../../components/Header_New/Header";

const WorkPermit = () => {
  const { t, language } = useTranslation();
  const isleftlangue = language === 'ur';
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 1,
      title: "Asylum",
      description:
        "You have to be in Sweden or on the Swedish border in order to apply for asylum.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>
      ),
      Link: "/asylum",
    },
    {
      id: 2,
      title: "Family Reunification",
      description:
        "Family reunification is a recognized reason for the immigration of family members to a country.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>
      ),
      Link: "/family-reunification",
    },
    {
      id: 3,
      title: "Personnummer Sweden",
      description:
        "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
      ),

      Link: "/personnumer-sweden",
    },
    {
      id: 4,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>
      ),
      Link: "/cpr-number-denmark",
    },
    {
      id: 5,
      title: "Work Permit",
      description:
        "Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>
      ),
      Link: "/work-permit",
    },
    {
      id: 5,
      title: "Business Permit",
      description:
        "Swedish business culture is open and innovative, and starting a business there is relatively simple        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>
      ),

      Link: "/business-permit",
    },
    {
      id: 6,
      title: "Business Visit",
      description:
        "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>
      ),

      Link: "/business-visit",
    },
    {
      id: 7,
      title: "Citizenship",
      description:
        "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>
      ),
      Link: "/citizenship",
    },
    {
      id: 8,
      title: "Study in EU",
      description:
        "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>
      ),
      Link: "/study-in-eu",
    },
    {
      id: 9,
      title: "Global Visit Visas",
      description:
        "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>
      ),
      Link: "/global-visit-visas",
    },
    {
      id: 10,
      title: "EEA Permits",
      description:
        "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>
      ),
      Link: "/eea-permits",
    },
    {
      id: 11,
      title: "Parents EU Permit",
      description:
        "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>
      ),
      Link: "/parents-eu-permit",
    },
    {
      id: 12,
      title: "Marriage & Divorce      ",
      description:
        "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
      ),
      Link: "/marriage-divorce",
    },
    {
      id: 13,
      title: "Company Registration      ",
      description:
        "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link: "/company-registration",
    },
    {
      id: 14,
      title: "House & Offices",
      description:
        "we offer you an easy and painless solution where you can get a place to live without any worries.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link: "/house-offices",
    },
    {
      id: 15,
      title: "Appeal Cases",
      description:
        "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>
      ),
      Link: "/appeal-cases",
    },
    {
      id: 16,
      title: "EU Citizens Relocation",
      description:
        "Family reunification means that a family that has been split up can apply to be allowed to live together.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>
      ),
      Link: "/eu-family-reunification",
    },
    {
      id: 17,
      title: "Investment",
      description:
        "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>
      ),
      Link: "/investment",
    },
    {
      id: 18,
      title: "Direct Citizenship by Investments      ",
      description:
        "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>
      ),
      Link: "/direct-citizenship-by-investments",
    },
    {
      id: 19,
      title: "Permanent Residence",
      description:
        "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>
      ),
      Link: "/permanent-residence",
    },
    {
      id: 20,
      title: "Golden Visa (Greece - Portugal)      ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link: "/golden-visa-greece-portugal",
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Work Permit")}
        regularText={t(
          "Explore your career opportunities in Sweden. We facilitate your work permit application for a smooth transition."
        )}
        backgroundImage={homeBgImage}
      />

      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
            <div
                className="col-md-8 tw-py-20 tw-bg-white tw-text-justify"
                style={{ direction: isleftlangue ? 'rtl' : 'ltr' }}
              >
                <div className="2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div>
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Types of`)}</span>
                    <h2 className="tw-text-left">
                      <strong>{t(`Work Permits in Sweden`)}</strong>
                    </h2>

                    <br />

                    <p className="tw-text-gray">{t(`Sweden provides a range of work permits designed to
                      accommodate diverse professional and personal
                      circumstances. These permits cater to various categories
                      of workers, each with specific eligibility criteria and
                      requirements. For skilled professionals, there are permits
                      targeting sectors with labor shortages, such as IT,
                      healthcare, and engineering, often requiring a formal job
                      offer and a salary meeting Swedish standards`)}</p>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={wp1}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p className="tw-text-gray">{t(`Entrepreneurs and self-employed individuals can apply
                          for permits that allow them to establish and run
                          businesses in Sweden, provided they demonstrate a
                          viable business plan and sufficient financial
                          resources. Seasonal workers, such as those in
                          agriculture or hospitality, can access permits for
                          temporary employment. Additionally, permits are
                          available for researchers, students transitioning to
                          work, and family members accompanying a permit holder,
                          making Sweden an attractive destination for both
                          individuals and families seeking professional
                          opportunities.`)}</p>
                      </div>
                    </div>

                    <strong className="m-0 tw-text-black">{t(`Standard Work Permit for Employment`)}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className=" tw-flex  tw-pt-4 tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Job Offer:`)}</strong> {t(`Must have a confirmed job
                          offer from a Swedish employer.`)}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Minimum Salary:`)}</strong> {t(`SEK 30,000 before
                          taxes or as per industry standards.`)}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Advertisement Requirement:`)}</strong> {t(`Job must
                          be advertised in the EU/EEA for 10 days.`)}
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`EU Blue Card`)}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className=" tw-flex tw-pt-4 tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Higher Education:`)}</strong>{t(` Requires a
                          university degree or 5 years of experience.`)}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Salary Threshold:`)}</strong> {t(`Must exceed the
                          minimum salary for EU Blue Card.`)}
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Seasonal Worker Permit (Berry Pickers and Plant Workers)`)}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className=" tw-flex tw-pt-4 tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Contract:`)}</strong> {t(`Requires a contract for
                          seasonal work up to 6 months.`)}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Wages and Benefits:`)}</strong> {t(`Must comply with
                          collective agreements.`)}
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0  tw-text-black">{t(`Au Pair Permit`)}</strong>

                    <ul className="tw-p-0  tw-pl-0">
                      <li className=" tw-flex tw-pt-4  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Age Requirement:`)}</strong> {t(`Must be between 18
                          and 30 years old.`)}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Language Study:`)}</strong> {t(`Required to take
                          Swedish courses.`)}
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Working Holiday Visa`)}</strong>

                    <ul className="tw-p-0 ">
                      <li className=" tw-flex tw-pt-4  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Eligible Countries:`)}</strong> {t(`Includes
                          Australia, New Zealand, South Korea, etc.`)}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Age Range:`)}</strong> {t(`Typically for 18-30 years
                          old.`)}
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Self-Employment Permit`)}</strong>

                    <ul className="tw-p-0 tw-pt-4 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Business Plan:`)}</strong> {t(`Must show
                          profitability within 2 years.`)}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Experience:`)}</strong> {t(`Relevant business
                          experience is required.`)}
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Sports and Cultural Worker Permit`)}</strong>

                    <ul className="tw-p-0 ">
                      <li className=" tw-flex tw-pt-4 tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Employment:`)}</strong> {t(`Must have a job offer
                          from a relevant Swedish organization.`)}
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Researcher Permit`)}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className=" tw-flex tw-pt-4 tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Host Agreement:`)}</strong> {t(`Required with a
                          Swedish research institution.`)}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Funding:`)}</strong> {(`Proof of financial support
                          for the research duration.`)}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Application Process and Waiting Times`)}</span>
                    <h2 className="tw-text-left">
                      <strong>{t(`Overview of Application Process and Waiting Times`)}</strong>
                    </h2>
                    <br />
                    <p className="tw-text-gray">{t(`The application process and waiting times vary depending
                      on the type of permit, your circumstances, and the current
                      workload at the Swedish Migration Agency. General waiting
                      times are as follows:`)}</p>
                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={wp2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul className="tw-p-0 ">
                          <strong className='tw-text-black'>{t(`Permit times:`)}</strong>
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong>{t(`Standard Work Permit:`)}</strong> {t("1-4 months")}
                            </p>
                          </li>
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong>{t(`EU Blue Card:`)}</strong> {t(`3-4 months`)}
                            </p>
                          </li>
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong>{t(`Seasonal Worker Permit:`)}</strong> {t(`1-3
                              months`)}
                            </p>
                          </li>
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong>{t(`Au Pair Permit:`)}</strong> {t(`1-2 months`)}
                            </p>
                          </li>
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong>{t(`Working Holiday Visa:`)}</strong> {t(`1-2 months`)}
                            </p>
                          </li>
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong>{t(`Self-Employment Permit:`)}</strong> {t(`3-6
                              months`)}
                            </p>
                          </li>
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong>{t(`Sports and Cultural Worker Permit:`)}</strong>{" "}
                              {t(`1-2 months`)}
                            </p>
                          </li>
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong>{t(`Researcher Permit:`)}</strong> {t(`1-3 months`)}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="tw-text-gray tw-pt-4">{t(`Using our Work Permit Assessment Tool can help you
                      identify the right permit and provide estimated processing
                      times based on your case.`)}</p>
                    <br />{" "}
                    <span className="tw-flex tw-items-center tw-gap-2 tw-pt-4">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Key`)}</span>
                    <h2 className="tw-text-left">
                      <strong>{t(`General Requirements for Work Permits`)}</strong>
                    </h2>
                    <p className="tw-text-gray">
                     {t(` To obtain a work permit in Sweden, applicants must meet
                      several general requirements to ensure compliance with
                      Swedish immigration laws and labor standards. A valid job
                      offer from a Swedish employer is essential, and the terms
                      of employment must align with Swedish collective
                      agreements or industry standards, including a minimum
                      salary of at least SEK 13,000 per month before taxes. The
                      employer must also advertise the position within the
                      EU/EEA for at least ten days before offering it to a
                      non-EU/EEA applicant.`)}{" "}
                    </p>
                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <ul className="tw-p-0 ">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-text-black">{t(`Valid Passport:`)}</strong> {t(`Your passport
                              must be valid for the entire period of your
                              intended stay.`)}
                            </p>
                          </li>
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong   className="tw-text-black">{t(`Insurance:`)}</strong> {t(`Some permits, such as
                              the Working Holiday and Au Pair permits, require
                              health insurance.`)}
                            </p>
                          </li>
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-text-black">{t(`Clean Criminal Record:`)}</strong>{t(` Applicants
                              with serious criminal records may face challenges
                              in obtaining a permit.`)}
                            </p>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={wp3}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2 tw-pt-4">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`How`)}</span>
                    <h2 className="tw-text-left">
                      <strong>{t(`Sweden Relocators Can Assist You`)}</strong>
                    </h2>
                    <br />
                    <p className="tw-text-gray">{t(`Sweden Relocators provides full support for all types of
                      work permits, ensuring a smooth and efficient process:`)}</p>
                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={wp4}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul className="tw-p-0 ">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-text-black">{t(`Eligibility Assessment:`)}</strong> {t(`Use our
                              Work Permit Assessment Tool to find the best
                              permit for your circumstances.`)}
                            </p>
                          </li>
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-text-black">{t(`Document Preparation:`)}</strong>{t(` We assist
                              in compiling and preparing the required documents,
                              such as employment contracts, financial
                              statements, and health insurance proof.`)}
                            </p>
                          </li>
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-text-black">{t(`Application Submission and Tracking:`)}</strong>{" "}
                            {t(`  We handle the submission of your application and
                              keep you updated on its status through each stage.`)}
                            </p>
                          </li>
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-text-black">{t(`Post-Permit Support:`)}</strong> {t(`Once your
                              permit is approved, we offer relocation support,
                              including housing assistance, bank account setup,
                              and registration with Swedish authorities.`)}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="tw-text-gray tw-pt-4">{t(`For more information or to begin your work permit
                      application, visit our Work Permit Section on our website.
                      Contact Sweden Relocators today, and let us help you start
                      your career journey in Sweden.`)}</p>
                    <Link to="/register" className="tw-text-center tw-pt-4">
                    <h5 className="tw-text-center tw-pt-4" style = {{fontSize: '1.2em'}}>
                        <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                          {t(`Sign Up Today!`)}{" "}
                        </strong>
                                             </h5>
                    </Link>
                    <br />
                    <p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                      seeking assistance with relocation, permits, visas, legal
                      processes, or settling into a new life, we're here to
                      help. Our comprehensive services cover everything from
                      work and study opportunities to family reunifications,
                      business support, and much more. Let us guide you every
                      step of the way—start your seamless experience now!`)}</p>
                  </div>
                </div>
              </div>

              <Sidebar/>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default WorkPermit;
