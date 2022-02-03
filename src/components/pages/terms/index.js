import React from 'react';
import styles from './terms.css';

const Terms = () => (
  <div className={`screen ${styles.wrapper}`}>
    <div className={`${styles.container} grid x-padded`}>
      <h1>Terms and conditions</h1>
      <p>
        Please read these Terms and conditions carefully as they contain important
        information about your legal rights, remedies and obligations. By
        accessing or using the Reyraa website, you agree to comply with and be
        bound by these Terms.
      </p>
      <i>Updated: 17 November, 2019</i>
      <section className="imprint">
        <h2>Acknowledgement</h2>
        <p>
          We are happy and proud to see you are using our website. Our goal is to
          facilitate your access to carefully design trips that turn decision
          making for holiday destination and itinerary easy and enjoyable. We hope
          that you choose our services, enjoy your holidays, tell us about your
          further needs and keep using Reyraa.com. Thank you.
        </p>
        <div className="hidden">
          <h5>Company information</h5>
          <p>Reyraa UG</p>
          <p>Address: Boelckestr. 1, 12101 Berlin</p>
          <p>
            Email:
            {' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:support@reyraa.com"
            >
              support@reyraa.com
            </a>
          </p>
        </div>
        <h2>Liability for content</h2>
        <p>
          According to § 7 Abs.1 TMG; as a service provider we are responsible
          only for our own contents on Reyraa.com. However, according to §§ 8 to
          10 TMG; as a service provider, we are not obliged to monitor sent or
          stored external data or to investigate circumstances that indicate
          illegal activity. Obligations to remove or block the use of information
          under general law remain unaffected. Our liability in this regard is
          only applicable from the moment of knowledge of a specific infringement.
          We consider ourselves obliged to review violating and inappropriate
          content immediately upon notification.
        </p>

        <h2>Liability for links</h2>
        <p>
          This website contains links to third party websites (external links).
          The content stored and displayed on these websites are the
          responsibility of the respective operators. In particular, we are not
          responsible and are not liable for the content of such websites, which
          are reached by linking. Setting external links does not mean that we
          own the content behind the reference or link. Although upon
          notification, we will remove our links to web pages displaying
          criminal or violating content.
        </p>

        <h2>copyright</h2>
        <p>
          The content and artifacts on these pages created by Reyraa team are
          subject to German copyright law. You are free to use the content
          created by Reyraa team for personal non-commercial use. however, the
          third party content for which we merely own the right to use on
          Reyraa.com are subject to copy right of their original creators. Upon
          notification of violations, we will remove such content immediately.
          The duplication, processing, distribution and any kind of exploitation
          outside the limits copyright require the written consent of the
          respective author or creator.
        </p>

        <p>
          If you have any questions about these Terms please
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:support@reyraa.com"
          >
            email
          </a>
          {' '}
          us.
        </p>
      </section>
    </div>
  </div>
);

Terms.initState = () => () => new Promise((resolve) => {
  resolve();
});

export default Terms;
