import Filter2 from "./filtercomponetn2";
import Filter3 from "./filtercomponent3";
import Filter1 from "./filtercomponet1";
function Filter({ checked = false }) {
  return (
    <div className={`rize-filter-bar ${checked ? '' : 'full-hide'}`}>
      <Filter1 />
      <Filter2 />
      <Filter3 />
      <div >
        <a className="rize-nav-item rize-imp-link ">Verified</a>
      </div>

    </div>);
}

export default Filter;