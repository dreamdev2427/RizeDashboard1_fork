import validatorfee from "../../assets/images/img/validatorfees.png";
import StakingRewards from "../../assets/images/img/stakingrewards.png";
import Donarship from "../../assets/images/img/Donarship.png";
export default function Staking() {
  return (
    <section className="mt-5 pt-5 pb-5" data-aos="fade-up">
      <div className="container rize-mini-container ">
        {/*  */}
        {/* StakingRewards */}
        <div className="row mb-5 pb-5">
          <div className="col-md-6 rize-what-we-are-right v-center order-2 order-sm-1">
            <div>
              <h1>Staking Rewards</h1>
              <p>
                Earn cryptocurrency rewards for holding and staking of
                cryptocurrency in your designated wallet. We offer staking
                rewards to individuals in a convenient and easy way so they can
                participate without having to manage the technical aspects of
                running a staking node.
              </p>
            </div>
          </div>
          <div className="col-md-6 rize-what-we-are-left rize-services-left f-end order-1 order-sm-2 mb-4 mb-sm-0">
            <img
              src={StakingRewards}
              className="w-sm-100"
              style={{ borderRadius: "16px" }}
            />
          </div>
        </div>
        {/* UTILITY */}
        <div className="row mb-5 pb-5">
          <div className="col-md-6 rize-what-we-are-left rize-services-left mb-4 mb-sm-0">
            <img
              src={validatorfee}
              className="w-sm-100"
              style={{ borderRadius: "16px" }}
            />
          </div>
          <div className="col-md-6 rize-what-we-are-right v-center">
            <div>
              <h1>Earn Validator Fees</h1>
              <p>
                Our platform provides a unique opportunity to earn validator
                fees through engaging activities like listening to podcasts,
                taking quizzes, and reading articles focused on growth,
                development, and technology.<br /><br /> Rize takes 20% of fees earned and
                gives back to the community to keep learning, evolving, and
                earning.
              </p>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-md-6 rize-what-we-are-right v-center order-2 order-sm-1">
            <div>
              <h1>Donorship</h1>
              <p>
                Rize has leveraged the yield of the Coreum blockchain to
                establish a self-sustaining escrow. This escrow is dedicated to
                supporting a multitude of causes globally, with 10% of earned
                rewards being donated to these causes.
                <br />
                By delegating to Rize,
                you can contribute to this effort and help provide long-term
                benefits to many valuable organizations and charities. Please
                note that the value of rewards fluctuates daily based on staked
                volume and prices.
              </p>
            </div>
          </div>
          <div className="col-md-6 rize-what-we-are-left rize-services-left f-end order-1 order-sm-2 mb-4 mb-sm-0">
            <img
              src={Donarship}
              className="w-sm-100"
              style={{ borderRadius: "16px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
