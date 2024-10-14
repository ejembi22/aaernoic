import React from "react";
import Employeeimg from "./assets/images/Employees (1).png";
import Partner1 from "./assets/images/image 58.png";
import Partner2 from "./assets/images/image 58 (1).png";
import Partner3 from "./assets/images/image 58 (2).png";
import Partner4 from "./assets/images/image 58 (3).png";
import Groupimage from "./assets/images/Group 4.png";
import Rate from "./assets/images/Ratecard.png";
import Workcontent1 from "./assets/images/Group 35.png";
import Workcontent2 from "./assets/images/Group 37.png";
import Workcontent3 from "./assets/images/Group 38.png";
import Workcontent4 from "./assets/images/Group 36.png";
import Workcontent5 from "./assets/images/Group 32.png";
import Reach from "./assets/images/Reach out (1).png";
import Stars from "./assets/images/stars.png";
import Emp1 from "./assets/images/Ellipse 2158.png";
import Emp2 from "./assets/images/Ellipse 2158 (1).png";
import Emp3 from "./assets/images/Ellipse 2158 (3).png";
import Emp4 from "./assets/images/Ellipse 2158 (4).png";
import Emp5 from "./assets/images/Ellipse 2158 (5).png";
import Emp6 from "./assets/images/Ellipse 2158 (6).png";
import Logo from "./assets/images/Logo (2).png";

const Firstsec = () => {
  return (
    <div className="row firstsectioncon">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xlg-12 px-4 mt-5">
        <div className="card bg-warning welcomecard">
          <p className="text-center fw-bold">Welcome to our company</p>
        </div>

        <div>
          <h2 className="text-center fw-bold organizationtext pt-4">
            Build Your Organization With Our Technics
          </h2>
          <p className="safetymanagement text-center pt-2">
            With documented policies and a robust Safety Management System, we
            are committed to ensuring the well-being of our employees,
            customers, and the public.
          </p>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xlg-12 px-4">
        <div>
          <img src={Employeeimg} alt="Employees" className="employeesimages" />
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xlg-12 partnerratings">
        <div>
          <p className="text-center fs-3 text-dark-emphasis fw-semibold">
            Our Partners
          </p>
        </div>

        <div className="d-flex justify-content-center partners_logo">
          <div>
            <img src={Partner1} alt="partners" className="pt-2" />
          </div>
          <div>
            <img src={Partner2} alt="partners" />
          </div>
          <div>
            <img src={Partner3} alt="partners" className="pt-3" />
          </div>
          <div>
            <img src={Partner4} alt="partners" />
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6 px-4">
        <div>
          <img
            src={Groupimage}
            alt="Employees"
            className="px-4 py-5 workgroupimage"
          />
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6 second_section_sub">
        <p className="fw-bold px-4">Welcome to our Company</p>
        <h2 className="fw-bolder  text-dark servicerange py-2">
          Aaronic Energy Provides a Full Range of Services
        </h2>
        <p className="specialises_oil_trading fw-bold text-dark py-4 ">
          Aaronic Energy specialises in oil trading, marine logistics, and ship
          management which they engage in the buying and selling of crude oil
          and refined products, ensuring efficient and secure transportation of
          oil and other goods across the globe, utilising a fleet of advanced
          vessels and overseeing the maintenance, crewing, and operational
          efficiency of maritime assets.{" "}
        </p>
        <div>
          <img src={Rate} alt="Ratings" className=" px-3 ratecards" />
        </div>
      </div>
      <div className="row thirdsection">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xlg-12 mt-5">
          <div className="card bg-warning corecard">
            <p className="text-center text-white fw-bolder">
              CORE FEATURES & QUALITY MANAGEMENT
            </p>
          </div>
          <h2 className="text-center fw-bolder py-4 text-white whatmakes">
            <strong>What Makes Us Different</strong>
          </h2>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xlg-12 px-4">
          <div className="whatmakes_us_different_images d-flex">
            <div className="workcontentcon">
              <img
                src={Workcontent1}
                alt="Employees"
                className="workrmissionimage"
              />
            </div>
            <div className="workcontentcon">
              <img
                src={Workcontent2}
                alt="Employees"
                className="workrmissionimage"
              />
            </div>
            <div className="workcontentcon">
              <img
                src={Workcontent3}
                alt="Employees"
                className="workrmissionimage"
              />
            </div>
            <div className="workcontentcon">
              <img
                src={Workcontent4}
                alt="Employees"
                className="workrmissionimage"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex fourthsection">
        <div className=" px-4">
          <p className="fw-bold keyvalue">Our Key Responsibility Values</p>

          <div>
            <h2 className="fw-bolder py-2 text-warning coretext">
              Core Values
            </h2>
            <p className="corevaluetext fw-bold">
              Our business transactions are based on trust; we are committed to
              the highest standards of professionalism and our business code of
              ethics. We believe in transparency as the foundation of our
              ambition to create lasting value, upholding the interests of our
              clients, employees, and the communities where we operate. We act
              with a sense of urgency, to demonstrate our ability to respond to
              client needs with real, tangible, and proactive solutions that
              strengthen customer confidence and reinforce our market
              credibility.
            </p>
          </div>
          <div>
            <h2 className="coretext fw-bolder py-2 text-warning">
              Our Mission & Vision
            </h2>
            <p className="fw-bold missiontext">
              We are committed to the highest standards of professionalism we
              believe in transparency as the foundation of our ambition to
              create lasting value, upholding the interests of our clients,
              employees, and the communities where we operate. We act with a
              sense of urgency, to demonstrate our ability to respond to client
              needs with real, tangible, and proactive solutions that strengthen
              customer confidence and reinforce our market credibility.
            </p>
          </div>
        </div>

        <div className="">
          <div>
            <img
              src={Workcontent5}
              alt="Employee"
              className="missionimage py-5"
            />
          </div>
        </div>
      </div>

      <div className="row card contactcard bg-warning">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xlg-12 text-center">
          <h3 className="fw-bolder contacttext">
            Contact Aaronic Energy Today
          </h3>
          <p className="reachouttext">
            Reach out to us with your inquiries or to explore partnership
            opportunities.
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xlg-12 text-center mt-3">
          <button className="button2 bg-white border-0 text-dark fw-bold">
            Get started
          </button>
        </div>
      </div>

      <div className="row contactinformation">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6 px-4 contactinformationlist">
          <h2 className="text-warning reachtext fw-bolder">Reach Out to Us</h2>
          <div className="pt-4 contactdetails">
            <p className="pt-4 fw-bolder">
              <i class="bx bxs-phone-call"></i> +(234) 707-337-3241
            </p>
            <p className="pt-4 fw-bolder">
              <i class="bx bxl-twitter"></i> Aaronicenergylimited
            </p>
            <p className="pt-4 fw-bolder">
              <i class="bx bxl-instagram"></i> Aaronicenergylimited
            </p>
            <p className="pt-4 fw-bolder">
              <i class="bx bx-envelope"></i> support@Omni_X.network |
              support@omni-X.network
            </p>
            <p className="pt-4 fw-bolder">
              <i class="bx bx-location-plus"></i> Opebi road, Ikeja, Lagos State
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6">
          <div>
            <img src={Reach} alt="Contacts" className="reach_image" />
          </div>
        </div>
      </div>

      <div className="fifthbackground  pt-5">
        <div className="d-flex justify-content-center">
          <p className="">Trusted by 20,000+ clients</p>
          <img src={Stars} alt="Star" />
        </div>

        <h2 className="text-center fw-bold">These Company trust us.</h2>

        <div className="row generalcard px-4">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6 px-5 firstcolemeployee">
            <div className="d-flex  border employeecard">
              <img src={Emp1} alt="Employee" className="employeeimage" />
              <div>
                <p className="employeenames px-4">
                  John Davis |{" "}
                  <span className="employeeposition"> KEM-KEM CEO. </span>
                </p>
                <p className="employeereviews px-4">
                  Highly reliable and responsive team!
                </p>
                <img
                  src={Stars}
                  alt="Stars"
                  className="px-4 mt-5 employeereviewstars "
                />
              </div>
            </div>

            <div className="d-flex  border employeecard">
              <img src={Emp3} alt="Employee" className="employeeimage" />
              <div>
                <p className="employeenames px-4">
                  Dare Onajimi |{" "}
                  <span className="employeeposition"> ONAM & CO. Founder.</span>
                </p>
                <p className="employeereviews px-4">
                  Their expertise in the industry and commitment to quality
                  ensured smooth transactions and reliable delivery.
                </p>
                <img
                  src={Stars}
                  alt="Stars"
                  className="px-4 mt-5 employeereviewstars"
                />
              </div>
            </div>

            <div className="d-flex border employeecard">
              <img src={Emp4} alt="Employee" className="employeeimage" />
              <div>
                <p className="employeenames px-4">
                  {" "}
                  Aishat kamar |{" "}
                  <span className="employeeposition">
                    {" "}
                    Kamco Founder & CEO.
                  </span>
                </p>
                <p className="employeereviews px-4">
                  Their team demonstrated deep industry knowledge and integrity
                  in every interaction.
                </p>
                <img
                  src={Stars}
                  alt="Stars"
                  className="px-4 mt-5 employeereviewstars"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6">
            <div className="d-flex border employeecard">
              <img src={Emp2} alt="Employees" className=" employeeimage" />
              <div>
                <p className="employeenames px-4">
                  Kim Mary |
                  <span className="employeeposition"> Uhi-chan LTD. MD.</span>
                </p>
                <p className="employeereviews px-4">
                  Their dedication to customer satisfaction and adherence to
                  high standards set them apart in the industry.
                </p>
                <img
                  src={Stars}
                  alt="Stars"
                  className="px-4 mt-5 employeereviewstars"
                />
              </div>
            </div>
            <div className="d-flex border employeecard">
              <img src={Emp5} alt="Employees" className="employeeimage" />
              <div>
                <p className="employeenames px-4">
                  Liyas Aleshin |
                  <span className="employeeposition"> Memo B Co-Founder.</span>
                </p>
                <p className="employeereviews px-4">
                  Excellent experience working with Aaronic Energy Limited for
                  our oil trading requirements.
                </p>
                <img
                  src={Stars}
                  alt="Stars"
                  className="px-4 mt-5 employeereviewstars"
                />
              </div>
            </div>

            <div className="d-flex border employeecard">
              <img src={Emp6} alt="Employees" className="employeeimage" />
              <div>
                <p className="employeenames px-4">
                  {" "}
                  Kemi Bakare |{" "}
                  <span className="employeeposition"> Melbond CEO.</span>
                </p>
                <p className="employeereviews px-4">
                  Top-notch service from aaronic Energy Limited in marine
                  logistics as Their attention to detail and proactive approach
                  made our shipping experience hassle-free.
                </p>
                <img
                  src={Stars}
                  alt="Stars"
                  className="px-4 mt-5 employeereviewstars"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="chevrondiv">
          <div></div>
          <div className="fs-1 px-5">
            <i class="bx bxs-chevron-left-circle text-dark"></i>
            <i class="bx bxs-chevron-right-circle text-warning"></i>
          </div>
        </div>

        <footer>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-3 col-xlg-3 px-5">
              <img src={Logo} alt="logo" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-9 col-xlg-9 ">
              <div className="d-flex footerlist">
                <dt>
                  <dl className="fw-bolder">Company</dl>
                  <dd className="descriptivelist">Ship Management</dd>
                  <dd className="descriptivelist">Oil & Gas Trading</dd>
                  <dd className="descriptivelist">Marine Logistics</dd>
                  <dd className="descriptivelist">
                    Sailors Management{" "}
                    <span className="text-warning border new">New</span>
                  </dd>
                </dt>

                <dt>
                  <dl className="fw-bolder">Solutions</dl>
                  <dd className="descriptivelist">Oil & Gas</dd>
                  <dd className="descriptivelist">Crude Oil</dd>
                  <dd className="descriptivelist">Fuel Oil</dd>
                  <dd className="descriptivelist">Gasoline</dd>
                </dt>
                <dt>
                  <dl className="fw-bolder">Resources</dl>
                  <dd className="descriptivelist">Social Proof</dd>
                  <dd className="descriptivelist">Contact Us</dd>
                  <dd className="descriptivelist">Help Center</dd>
                  <dd className="descriptivelist">FAQs</dd>
                </dt>
              </div>
            </div>
            <div className="pt-5 pb-3">
              <hr className="line1"></hr>
            </div>
            <div className="px-5 d-flex lastfooternote pb-4">
              <p>aaronic@2024. All rights reserved.</p>
              <div className="">
                <i class="bx bxl-twitter "></i>
                <i class="bx bxl-instagram px-3"></i>
                <i class="bx bxl-linkedin"></i>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Firstsec;
