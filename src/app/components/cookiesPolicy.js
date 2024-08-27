import React from "react";

const CookiesPolicy = () => {
  return (
    <>
      <section className="flex item-center justify-center flex-col mt-20 sm:mt-24 px-4 pb-4 sm:pb-10 sm:px-24">
        <h1 className="text-3xl font-bold text-center pt-2 p-4 sm:p-5">Cookies Policy</h1>
        <div className="text-sm">
          <p className="text-justify my-2">
            Cookies are a set of personal data which is automatically collected
            at the time when you use any website. The major function of cookies
            is to remember important things about you so that you can get
            customized search results. Generally, we at Shoogloo Network also
            collect major cookies to provide users with enhanced services and
            customized results. We also collect cookies from third parties to
            understand your search behaviour and engagement pattern. As we
            collect all such details, we would like you to be aware of all such
            information that is being collected from you as cookies.
          </p>
          <p className="text-justify my-2">
            This Privacy Policy may be amended or updated from time to time. If
            we make any material changes to this Privacy Policy, we will post a
            notice of these changes on our website and in this Privacy Policy.
            You are advised to consult this Privacy Policy regularly for any
            changes.{" "}
          </p>
        </div>
        <div className="text-base py-3 text-justify">
          <h2 className="font-semibold text-lg">Types of cookies:</h2>
          <p className="text-justify my-2">
            There are basically three types of cookies:{" "}
          </p>
          <ul className="text-sm ml-2">
            <li className="my-2">
              1. Important or necessary cookies: Without this, the website stops
              work{" "}
            </li>
            <li className="my-2">
              2. Performance cookies: It affects the speed of the website.{" "}
            </li>
            <li className="my-2">
              3. Personal cookies: These tell a lot about the users and their
              search behaviour.{" "}
            </li>
          </ul>
          <p className="text-justify my-2 font-medium">Other types of cookies: </p>
          <ul className="text-sm ml-6">
            <li className="my-2 list-disc">
              Session cookies: Temporary data for single website visits.
            </li>
            <li className="my-2 list-disc">
              Persistent cookies: Store information for future sessions.
            </li>
            <li className="my-2 list-disc">
              Analytical cookies: Track and analyze website performance data.
            </li>
            <li className="my-2 list-disc">
              Targeting cookies: Personalize content based on user preferences.
            </li>
            <li className="my-2 list-disc">
              Advertising cookies: Deliver personalized advertisements to users.
            </li>
            <li className="my-2 list-disc">
              Social media cookies: Enable interaction with social media
              platforms.
            </li>
          </ul>
          <p className="text-sm text-justify my-2">
            The main purpose of cookies is to enhance the user experience.
            However, if you are not comfortable, you may choose not to share
            cookies due to the fear of privacy breaches. However, that stops you
            from accessing various websites and availing multiple services.
            Also, getting customized search results will be difficult.
            Therefore, the decision is yours to choose or not choose cookies for
            sharing.
          </p>
        </div>
      </section>
    </>
  );
};

export default CookiesPolicy;
