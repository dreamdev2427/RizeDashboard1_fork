function Filter2() {
  return (
    <div  className="rize-nav-item-network"
    >
      <a className="rize-nav-item rize-imp-link " style={{padding:'0px 15px'}}>Newest</a>
      <div className="rize-dropdown radio-menu-2nd d-flex ">
        <div className="form-group options-dropdown v-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios1"
              id="exampleRadios2"
              value="option1"
              checked
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              Newest
            </label>
          </div>
        </div>
        <div className="form-group options-dropdown v-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios1"
              id="exampleRadios2"
              value="option1"
              checked
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              Oldest
            </label>
          </div>
        </div>
        <div className="form-group options-dropdown v-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios1"
              id="exampleRadios2"
              value="option1"
              checked
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              Price low - high
            </label>
          </div>
        </div>
        <div className="form-group options-dropdown v-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios1"
              id="exampleRadios2"
              value="option1"
              checked
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              Price high - low
            </label>
          </div>
        </div>
        <div className="form-group options-dropdown v-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios1"
              id="exampleRadios2"
              value="option2"
              checked
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              Most Favorited
            </label>
          </div>
        </div>
        <div className="form-group options-dropdown v-center">
          <div class="form-check"  style={{
                borderBottom:'none'
              }}>
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios1"
              id="exampleRadios2"
              value="option1"
              checked
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              Least Favorited
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter2;
