function Stats() {
  return (
    <section className="mt-sm-5 mt-0 pt-sm-5 pt-0" data-aos="fade-up">
      <div className="rize-suboverlay-container">
        <div className="container rize-mini-container ">
          <div className="space-between">
            <div>
              <h2 className="text-white mb-5 f-32">Stats</h2>
            </div>
          </div>
          <div className="table-responsive">
            <table className="rize-table rize-stats-table table">
              <tbody>
                <tr>
                  <td className="bt-g">
                    <div>
                      <span className="text-white ml-4">Coreum in escrow</span>
                    </div>
                  </td>
                  <td className="bt-g">
                    <div className="f-center w-100">
                      <span className="text-white ">20.20</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <span className="text-white ml-4">
                        How much earned from compounding
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="f-center w-100">
                      <span className="text-white ">50.26</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <span className="text-white ml-4">
                        How much distributed to accounts
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="f-center w-100">
                      <span className="text-white">69.065</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <span className="text-white ml-4">
                        Rize burned from escrow
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="f-center w-100">
                      <span className="text-white ">254</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <span className="text-white ml-4">
                        Total burned from other functions
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="f-center w-100">
                      <span className="text-white">325</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
