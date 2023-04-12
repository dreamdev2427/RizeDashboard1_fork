function Stats() {
  return (
    <section className="mt-5 pt-3" data-aos="fade-up">
      <div className="rize-suboverlay-container">
        <div className="container rize-mini-container ">
          <div className="space-between">
            <div>
              <h2 className="text-white mb-5">Stats</h2>
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
                    <div>
                      <span className="text-white ml-4">20.20</span>
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
                    <div>
                      <span className="text-white ml-4">50.26</span>
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
                    <div>
                      <span className="text-white ml-4">69.065</span>
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
                    <div>
                      <span className="text-white ml-4">254</span>
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
                    <div>
                      <span className="text-white ml-4">325</span>
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
