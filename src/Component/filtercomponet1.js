function Filter1() {
  return (
    <div
      className="rize-nav-item-network">
      <a
        className="rize-nav-item rize-imp-link "
        style={{ padding: "0px 15px" }}
      >
        File Types
      </a>
      <div className="rize-dropdown radio-menu d-flex ">
        <div className="form-group options-dropdown v-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="All"
              checked
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              All
            </label>
          </div>
        </div>
        <div className="form-group options-dropdown v-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              checked
              value="photo"
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              Photo
            </label>
          </div>
        </div>
        <div className="form-group options-dropdown v-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              checked
              value="Audio"
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              Audio
            </label>
          </div>
        </div>
        <div className="form-group options-dropdown v-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              checked
              value="video"
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              Video
            </label>
          </div>
        </div>
        <div className="form-group options-dropdown v-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              checked
              value="3d"
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              3D
            </label>
          </div>
        </div>
        <div className="form-group options-dropdown v-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              checked
              value="Art"
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              Art
            </label>
          </div>
        </div>
        <div className="form-group options-dropdown v-center">
          <div
            class="form-check"
            style={{
              borderBottom: "none",
            }}
          >
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              checked
              value="Games"
            ></input>
            <label class="form-check-label" for="exampleRadios1">
              Games
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter1;
