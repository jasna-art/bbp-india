import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Use",
  description:
    "Privacy Policy and Terms of Use for BBP India, including information about how BBP collects, uses, protects, and handles information shared through bbp-india.com.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Privacy"
        headline="How we handle the information you share with us."
      />

      <section className="container-bbp section-y">
        <div className="privacy-content">

          {/* ================================
              PRIVACY POLICY
          ================================= */}

          <div className="legal-section">
            <h1>Privacy Policy</h1>

            <p className="privacy-updated">
              <strong>Last updated:</strong> September 2, 2026
            </p>

            <p>
              BBP India ("BBP," "we," "us," or "our") operates bbp-india.com
              and provides brand consultancy services, including the Brand OS™
              diagnostic. This policy explains what information we collect,
              how we use it, and the choices you have.
            </p>

            <h2>1. Information We Collect</h2>

            <h3>Information you give us directly</h3>

            <ul>
              <li>
                Contact details submitted through our "Connect" or "Send a
                brief" forms — name, email, phone number, company name, and
                the content of your message.
              </li>

              <li>
                Responses submitted through the Brand OS™ Diagnostic,
                including business information, brand metrics, and any
                supporting data you choose to share.
              </li>

              <li>
                Information exchanged over email when you correspond with
                hello@bbp-india.com, shine@bbp-india.com, or
                sabi@bbp-india.com.
              </li>

              <li>
                Information provided if you apply for a role through
                "Work with Us."
              </li>
            </ul>

            <h3>Information collected automatically</h3>

            <ul>
              <li>
                Standard web analytics — pages visited, time on site,
                referring source, device and browser type, approximate
                location (derived from IP address).
              </li>

              <li>
                Cookies and similar technologies used to operate the site
                and understand how it's used (see Section 5).
              </li>
            </ul>

            <h3>Information from engagements</h3>

            <p>
              If you become a client, we collect the business, financial,
              and market data needed to run the Brand OS™ diagnostic and
              deliver our consulting services, as agreed in your engagement
              scope.
            </p>

            <h2>2. How We Use Your Information</h2>

            <p>We use the information we collect to:</p>

            <ul>
              <li>
                Respond to enquiries and prepare proposals.
              </li>

              <li>
                Run the Brand OS™ Diagnostic and generate your composite
                score, tier, and roadmap.
              </li>

              <li>
                Deliver, manage, and invoice consulting engagements.
              </li>

              <li>
                Improve our website, diagnostic instrument, and service
                offerings.
              </li>

              <li>
                Send updates about our work (our "Thinking" essays, case
                studies) — only where you've opted in.
              </li>

              <li>
                Comply with legal and regulatory obligations.
              </li>
            </ul>

            <p>
              <strong>
                We do not sell your personal information to third parties.
              </strong>
            </p>

            <h2>3. How We Share Information</h2>

            <p>We may share information with:</p>

            <ul>
              <li>
                Service providers who support our operations (e.g., hosting,
                email, analytics, payment processing), bound by
                confidentiality obligations.
              </li>

              <li>
                Professional advisors (legal, accounting) where necessary.
              </li>

              <li>
                Authorities, where required by law or to protect our rights.
              </li>

              <li>
                Portfolio-level reporting, only in aggregated or anonymized
                form, and only where an investor client has commissioned a
                multi-brand Brand OS™ view across companies they've
                disclosed to us.
              </li>
            </ul>

            <p>
              We do not share the substance of your Brand OS™ diagnostic or
              engagement data with other clients, including competitors in
              your category.
            </p>

            <h2>4. Data Retention</h2>

            <p>
              We retain personal and engagement data for as long as needed
              to deliver our services, maintain business records, and meet
              legal or tax obligations. Diagnostic and engagement data
              connected to an active or completed client relationship is
              typically retained for 7 years after the engagement ends,
              after which it is deleted or anonymized, unless you request
              earlier deletion (see Section 6).
            </p>

            <h2>5. Cookies</h2>

            <p>Our website uses cookies to:</p>

            <ul>
              <li>
                Keep the site functioning correctly.
              </li>

              <li>
                Understand aggregate traffic and usage patterns.
              </li>
            </ul>

            <p>
              You can control or disable cookies through your browser
              settings. Disabling cookies may affect some site functionality.
            </p>

            <h2>6. Your Rights</h2>

            <p>
              Depending on applicable law (including India's Digital Personal
              Data Protection Act, 2023), you may have the right to:
            </p>

            <ul>
              <li>
                Access the personal information we hold about you.
              </li>

              <li>
                Correct inaccurate information.
              </li>

              <li>
                Request deletion of your information.
              </li>

              <li>
                Withdraw consent for marketing communications.
              </li>

              <li>
                Lodge a grievance with our Grievance Officer or the relevant
                data protection authority.
              </li>
            </ul>

            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:hello@bbp-india.com">
                hello@bbp-india.com
              </a>.
            </p>

            <h2>7. Security</h2>

            <p>
              We use reasonable technical and organizational safeguards to
              protect the information we hold, including access controls and
              secure storage. No method of transmission or storage is
              completely secure, and we cannot guarantee absolute security.
            </p>

            <h2>8. Children's Privacy</h2>

            <p>
              Our services are intended for business audiences. We do not
              knowingly collect personal information from individuals under
              18.
            </p>

            <h2>9. Third-Party Links</h2>

            <p>
              Our site may link to third-party websites (e.g., LinkedIn,
              Instagram). We are not responsible for the privacy practices of
              those sites — please review their policies separately.
            </p>

            <h2>10. Changes to This Policy</h2>

            <p>
              We may update this policy from time to time. Material changes
              will be reflected by an updated "Last updated" date at the top
              of this page.
            </p>

            <h2>11. Contact Us</h2>

            <p>
              Questions about this policy or how we handle your data:
            </p>

            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@bbp-india.com">
                  hello@bbp-india.com
                </a>
              </li>

              <li>
                <strong>Address:</strong> No. 46/2978, Third Avenue, Sobha
                Road, Vennala, Kochi, Kerala 682028, India
              </li>

              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+917356444771">
                  +91 73564 44771
                </a>
              </li>
            </ul>
          </div>


          {/* ================================
              TERMS OF USE
          ================================= */}

          <div className="legal-section terms-section">

            <h1>Terms of Use</h1>

            <p className="privacy-updated">
              <strong>Last updated:</strong> September 2, 2026
            </p>

            <p>
              These Terms of Use ("Terms") govern your access to and use of
              bbp-india.com (the "Site") and, where applicable, your
              engagement with BBP India Communications Pvt. Ltd. ("BBP,"
              "we," "us," or "our") for consulting services, including the
              Brand OS™ Diagnostic. By using the Site or engaging our
              services, you agree to these Terms.
            </p>

            <h2>1. Who We Are</h2>

            <p>
              BBP India is a brand profitability consultancy founded in 2016
              and based in Kochi, Kerala, India, working with founders, CMOs,
              family businesses, and investors.
            </p>

            <h2>2. Use of the Site</h2>

            <p>
              You may use the Site for lawful purposes only. You agree not
              to:
            </p>

            <ul>
              <li>
                Use the Site in any way that violates applicable law.
              </li>

              <li>
                Attempt to gain unauthorized access to our systems or data.
              </li>

              <li>
                Copy, reproduce, or distribute our content — including the
                Brand OS™ framework, essays, case studies, and site materials
                — without our written permission.
              </li>

              <li>
                Use automated means (scraping, bots) to extract content from
                the Site without authorization.
              </li>
            </ul>

            <h2>3. Intellectual Property</h2>

            <p>
              Brand OS™, the Brand OS™ diagnostic instrument, our frameworks,
              essays, case studies, logos, and site content are the
              intellectual property of BBP India and are protected by
              applicable copyright and trademark law. Nothing in these Terms
              transfers ownership of this IP to you, except as expressly
              agreed in a signed client engagement.
            </p>

            <p>
              Client brand names and logos featured on the Site are used to
              identify past or current work and remain the property of their
              respective owners.
            </p>

            <h2>4. The Brand OS™ Diagnostic</h2>

            <p>
              The Brand OS™ Diagnostic is a proprietary assessment tool. Your
              use of the Diagnostic — including any score, tier, or roadmap
              it produces — is:
            </p>

            <ul>
              <li>
                Based on the information you provide, which you represent is
                accurate and complete to the best of your knowledge.
              </li>

              <li>
                Provided for informational and strategic planning purposes
                and does not constitute financial, legal, investment, or
                accounting advice.
              </li>

              <li>
                Not a guarantee of any specific business outcome, revenue,
                or margin result.
              </li>
            </ul>

            <h2>5. Engagements and RAAS ("Result As A Service")</h2>

            <p>
              If you engage BBP for consulting services:
            </p>

            <ul>
              <li>
                The specific scope, deliverables, timeline, fees, and
                definition of "done" for each engagement will be set out in a
                separate signed agreement or statement of work, which will
                govern in the event of any conflict with these Terms.
              </li>

              <li>
                Our RAAS billing model ties fees to defined outcomes and
                milestones as agreed in that engagement document, not to
                these general Terms.
              </li>

              <li>
                Confidentiality of client data shared during an engagement is
                governed by the mutual confidentiality terms in that
                agreement.
              </li>
            </ul>

            <h2>6. No Warranty</h2>

            <p>
              The Site and its content are provided "as is." While we strive
              for accuracy, we make no warranty that the Site will be
              error-free, uninterrupted, or that any diagnostic output or
              content is complete, current, or suitable for your specific
              circumstances.
            </p>

            <h2>7. Limitation of Liability</h2>

            <p>
              To the maximum extent permitted by law, BBP India shall not be
              liable for any indirect, incidental, consequential, or special
              damages arising from your use of the Site or reliance on its
              content, including the Brand OS™ Diagnostic output, except where
              such liability arises from a separately signed client
              engagement, which will govern.
            </p>

            <h2>8. Third-Party Links</h2>

            <p>
              The Site may link to third-party sites (e.g., social media
              platforms). We are not responsible for the content, accuracy,
              or practices of those third-party sites.
            </p>

            <h2>9. Governing Law</h2>

            <p>
              These Terms are governed by the laws of India, and any disputes
              arising from them will be subject to the exclusive jurisdiction
              of the courts in Kochi, Kerala.
            </p>

            <h2>10. Changes to These Terms</h2>

            <p>
              We may revise these Terms from time to time. Continued use of
              the Site after changes are posted constitutes acceptance of the
              updated Terms. The "Last updated" date above reflects the most
              recent revision.
            </p>

            <h2>11. Contact Us</h2>

            <p>
              Questions about these Terms:
            </p>

            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@bbp-india.com">
                  hello@bbp-india.com
                </a>
              </li>

              <li>
                <strong>Address:</strong> No. 46/2978, Third Avenue, Sobha
                Road, Vennala, Kochi, Kerala 682028, India
              </li>

              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+917356444771">
                  +91 73564 44771
                </a>
              </li>
            </ul>

          </div>

        </div>
      </section>
    </main>
  );
}

