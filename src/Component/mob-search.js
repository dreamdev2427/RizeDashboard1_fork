// import React, { useState } from "react";
// import searchIcon from "../assets/images/icons/search.svg";
// import timesIcon from "../assets/images/icons/times.svg";

// // function Search() {
// //   const [showSearchInput, setShowSearchInput] = useState(false);

// //   const handleSearchIconClick = () => {
// //     setShowSearchInput(true);
// //   };

// //   return (
// //     <div className="rize-header-search">
// //       <img
// //        
// //         onClick={handleSearchIconClick}
// //       />
// //       {showSearchInput && (
// //         <input
// //           className="rize-header-search-input"
// //           type="text"
// //           placeholder="Search..."
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // function MobileSearchBar() {
// //   const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

// //   const toggleSearchBar = () => setIsSearchBarOpen(!isSearchBarOpen);

// //   return (
// //     <div className="mobile-header">
// //       <div className="search-icon" onClick={toggleSearchBar}>
// //         <img  className="rize-header-search"
// //         src={searchIcon}
// //         style={{ paddingLeft: 20 }}
// //         alt="search" />
// //       </div>
// //       {isSearchBarOpen && (
// //         <div className="search-bar">
// //              <img  className="rize-header-search"
// //         src={searchIcon}
// //         style={{ display: "none" }}/>
// //           <input type="text" placeholder="Search..." />
// //           <div className="search-icon" onClick={toggleSearchBar}>
// //             <img src={{timesIcon}} alt="search" />
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// function MobileHeader() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const handleSearchClick = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };
 
//   return (
//     <header className="mobile-header">
//       {!isSearchOpen && (
//         <button className="search-button" onClick={handleSearchClick}>
//           {/* <FontAwesomeIcon icon={faSearch} /> */}
//           <img  className="rize-header-search"
//         src={searchIcon}
//         style={{ paddingLeft: 20 }}
//         alt="search" />
//         </button>
//       )}
//       {isSearchOpen && (
//         <div className="search-container">
//           <input type="text" placeholder="Search" />
//           <div
//             className="col-6 v-center"
//             style={{ justifyContent: "flex-end" }}
//           >
//             <a className="closebtn" onClick={handleClick}>
//               <img className="rize-icon-sm" src={timesIcon} />
//             </a>
//           </div>
//           <button className="search-button-close" onClick={handleSearchClick}>
//           <img src={{timesIcon}} alt="search" />
//             {/* <FontAwesomeIcon icon={faTimes} /> */}
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }

// export default MobileHeader;





