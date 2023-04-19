import firstIcon from "../../assets/images/img/1st.png";
import secndIcon from "../../assets/images/img/2nd.png";
import thirdIcon from "../../assets/images/img/3rd.png";
export default function Howitworks() {
  return (
    <section data-aos="fade-up" className="netowrk--top--mobile">
      <div className="container rize-mini-container">
        <div className=" row">
          <div className="col-sm-12 how-it-works-title mb-1 pb-5">
            <div>
              <h1>How it Works</h1>
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-sm-4 how-it-works pr-sm-5 p-0 v-center">
            <div className="pb-5 ">
              <div>
                <img src={firstIcon} className="mb-2" />
              </div>
              <div className="how-it-works-types--1st">
                <h1 className="pb-3"> ACTION</h1>
                <p className="pb-2">INDIVIDUALS STAKE TO RIZE EARNWISE</p>
              </div>
            </div>
            <div>
              <ol style={{paddingleft:20}}>
                <li className="pb-1" >Go into your designated Coreum wallet.</li>
                <li className="pb-1" >Choose the number of tokens you wish to stake.</li>
                <li className="pb-1" >Select RIZE EARNWISE validator.</li>
                <li className="pb-1" >Confirm your stake.</li>
                <li className="pb-1" >Earn rewards.</li>
                <li className="pb-1" >Collect rewards you like.</li>
              </ol>
            </div>
          </div>
          <div className="col-sm-4 how-it-works px-sm-5 p-0 v-center">
            <div className="pb-5">
              <div>
                <img src={secndIcon} className="mb-2" />
              </div>
              <div className="how-it-works-types">
                <h1 className="pb-3"> ACTION</h1>
                <p className="pb-2">RIZE MOVES COMMISSIONS</p>
              </div>
            </div>
            <div className="text-justify">
              <p>
                10% of the commissions earned by RIZE go to #RIZEdonors wallet
                every week. The proceeds, which come from your delegations, are
                re-staked. Those delegations never leave the wallet. We only
                transfer rewards.
              </p>
              <p>
                {" "}
                20% goes to the EARNWISE wallet where the users will be issued
                80% of rewards, 20% to compound.
              </p>
            </div>
          </div>
          <div className="col-sm-4 how-it-works pl-sm-5 p-0 v-center">
            <div className="pb-5">
              <div>
                <img src={thirdIcon} className="mb-2" />
              </div>
              <div className="how-it-works-types">
                <h1 className="pb-3"> ACTION</h1>
                <p className="pb-2">REWARDS ARE DONATED</p>
              </div>
            </div>
            <div className="text-justify">
              <p>
                Every month starting in August 2023. The rewards generated in
                the donor wallet are given to our registered charities.
              </p>
              <p>
                The EARNWISE rewards will go live a few weeks after Coreum is
                live and Rize's Stake, Learn, Earn section is running!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
