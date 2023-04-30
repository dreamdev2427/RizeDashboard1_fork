import Header from "../Component/rizeheader";
import Footer from "../Component/footer";
import StakeBanner from "../Component/stake_learn/stakeBanner";
import Staking from "../Component/stake_learn/stakingDescriptions";
import Contactus from "../Component/stake_learn/ContactUs";
import AboutUS from "../Component/stake_learn/aboutUS";
import Val_position from "../Component/stake_learn/val_position";
import Network from "../Component/stake_learn/network";
import Howitworks from "../Component/stake_learn/howitworks";
import Validaty from "../Component/stake_learn/validaty";
export default function Stake() {
  return (
    <section >
      {/*  ||--------------------------------------------------------------------------------|| */}
      {/*  || RIZE HEADER || */}
      {/*  ||--------------------------------------------------------------------------------|| */}
      <section data-aos="fade-up " className="stake--banner--background">
        <Header validator={false} />
        <StakeBanner />
      </section>
      <div className="rize-stake-main">
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* ||                                    Services                                    || */}
        {/* ||--------------------------------------------------------------------------------|| */}
        <Staking />
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* ||                                   how it works                                 || */}
        {/* ||--------------------------------------------------------------------------------|| */}
        <Howitworks />
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* ||                                   Validator                                    || */}
        {/* ||--------------------------------------------------------------------------------|| */}
        <Val_position />
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* ||                                    Network                                     || */}
        {/* ||--------------------------------------------------------------------------------|| */}
        {/* <Network /> */}
        {/* ||---------------------------------------------------------------------------------|| */}
        {/* ||                                    About US                                     || */}
        {/* ||---------------------------------------------------------------------------------|| */}
        <AboutUS />
        <Validaty />
        {/* ||---------------------------------------------------------------------------------|| */}
        {/* ||                                    Contact US                                     || */}
        {/* ||---------------------------------------------------------------------------------|| */}
        <Contactus />
        <Footer />
      </div>
    </section>
  );
}
