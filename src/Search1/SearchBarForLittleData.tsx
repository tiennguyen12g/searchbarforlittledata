// Use Sass
import styles from "./SearchBarForLittleData.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

//Tooltip
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useMemo, useRef, useState, CSSProperties } from "react";
import { useDelay } from "./useDelay";

//Declare props
interface DataSearchProps {
  iconArticle?: string,
  articleTitle: string,
  href: string,
}
interface SearchBarProps {
  searchBarStyles?: CSSProperties,
  tooltipStyles?:CSSProperties,
  tooltipContentStyles?: CSSProperties,
  inputSearchStyles?:CSSProperties,
  searchIconStyles?:CSSProperties,

  dataSearch: DataSearchProps[];
  inputPlaceholder?: string;
}
interface SearchResultProps{
  articleTitle:string,
  href: string
}

const searchBarStylesDefault: CSSProperties = {
  width: 240,
  height: 40,
  borderRadius: 12,
}
const tooltipStyleDefault:CSSProperties = {
  width: searchBarStylesDefault.width,
  backgroundColor:"white",
  borderRadius: 12,
  paddingBottom: 10,
  boxShadow:"0 0 10px rgb(225, 225, 225)"

}
const tootltipContentStylesDefault: CSSProperties = {
  minHeight:100, 
  maxHeight: 150,
  margin: "10px 10px 10px 0",
  paddingLeft: 10,
  paddingRight: 10,
}

const inputSearchStyleDefault:CSSProperties = {
  caretColor: "black",
  fontSize: "18px",
  paddingLeft: 10,
  backgroundColor: "white",
  borderRadius: 12
}

const searchIconStyleDefault: CSSProperties = {
  fontSize:20,
  color:"gray",
}



export default function SearchBarForLittleData({    
  searchBarStyles = {},
  tooltipStyles = {},
  tooltipContentStyles = {},
  inputSearchStyles = {},
  searchIconStyles = {},

  dataSearch = [],
  inputPlaceholder = "Search ..."
  } : SearchBarProps) {

  // Merge default style and your custom style
  const searchBarStyles_Merge = {...searchBarStylesDefault, ...searchBarStyles}
  const tooltipStyles_Merge = {...tooltipStyleDefault,...tooltipStyles }
  const inputSearchStyles_Merge = {...inputSearchStyleDefault,...inputSearchStyles}
  const searchIconStyles_Merge = {...searchIconStyleDefault, ...searchIconStyles}
  const tooltipContentStyles_Merge = {...tootltipContentStylesDefault, ...tooltipContentStyles}


  const inputRef = useRef(null)
  const [isSearchFocus, setIsSearchFocus] = useState(false)
  const [inputValue,setInputValue] = useState('')
  const handleSearchInput = (value: any) => {
    setInputValue(value)
  }
  let wordSearch = useDelay(inputValue,500)
  function RenderSearchResult (attrs: any) {
    const searchResults: SearchResultProps[] = []
    if(wordSearch.length > 0){
      dataSearch.filter((article) => {
        const articleTitle = article.articleTitle.toLowerCase();
        const matchArticle = articleTitle.includes(wordSearch.toLowerCase())
        if(matchArticle ){
          searchResults.push({
            articleTitle: article.articleTitle, 
            href: article.href
          })
        }
      })
    }
    return (
      <div 
        className={cx("search-tooltip")} 
        tabIndex={-1} 
        {...attrs}
        style={tooltipStyles_Merge}
      >
        <div style={{ minHeight: 30}}>
          <p style={{padding: 0, marginTop:5, marginBottom:0, fontWeight:500}}>Search results</p>
          <div className={cx('tooltip-horizontal-line')} />
        </div>
        <div className={cx('tooltip-content')} style={tooltipContentStyles_Merge}>
          {searchResults.length > 0 ? (
            searchResults.map((result, i) => {
              return(
                <div key={i} className={cx('tooltip-title-result')}>
                  <a href={result.href}>{result.articleTitle}</a>
                </div>
              )
            })
          ) : ("No data found")}
        </div>
      </div>
    )
  }
  const handleDelete = () => {
    setInputValue('')
    // inputRef.current.focus()
}
  return useMemo(() => {
    return(
      <div style={searchBarStyles_Merge}>
        <Tippy
          interactive={true}
          visible={isSearchFocus && wordSearch.length > 0}
          onClickOutside={() => setIsSearchFocus(false)}
          render={(attrs) => (
            RenderSearchResult(attrs)
          )}
          placement="bottom"
        >
          <div className={cx("search-bg")} style={{backgroundColor: inputSearchStyles_Merge.backgroundColor, borderRadius: inputSearchStyles_Merge.borderRadius}}>
            <input 
              ref={inputRef}
              value={inputValue}
              placeholder= {inputPlaceholder}
              type="text"
              name="SearchInput"
              onFocus={() => setIsSearchFocus(true)}
              onChange={(e) => handleSearchInput(e.target.value)}
              className={cx("search-input")} 
              style={inputSearchStyles_Merge}
            />
            {wordSearch.length > 0 ? 
              <span className={cx('faXmark')} onClick={handleDelete}>
                <FontAwesomeIcon icon={faXmark} />
              </span>
              : ""
            }
            <div className={cx("search-icon")} style={searchIconStyles_Merge}>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{position:"relative", right: 0}}/>
            </div>
          </div>
        </Tippy>
      </div>
    )
  },[wordSearch.length,isSearchFocus, inputValue])
}
