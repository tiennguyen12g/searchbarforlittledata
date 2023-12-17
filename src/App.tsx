import './App.css'
import SearchBarForLittleData from "./Search1/SearchBarForLittleData"

import { CSSProperties } from 'react'
function App() {
  const searchBarStyles: CSSProperties = {
    width: 320
  }
  const tooltipStyles: CSSProperties = {
    width: 320
  }
  
  return (
    <>
      <SearchBarForLittleData
        searchBarStyles={searchBarStyles}
        tooltipStyles={tooltipStyles}
        dataSearch={dataSearch}
      />
    </>
  )
}

export default App


const dataSearch = [
  {
    articleTitle:
      "Cannot install package in React-Native and the version impossible to update",
    href:"abcde",
  },
  {
    articleTitle:
      "React-Native and the version impossible to update",
    href:"abcde",
  },
  {
    articleTitle:
      "The version impossible to update",
    href:"abcde",
  },
  {
    articleTitle:
      "Install package in React-Native and",
    href:"abcde",
  },
  {
    articleTitle:
      "Guide to code Swift-UI",
    href:"abcde",
  },
  {
    articleTitle:
      "Cannot install package in React-Native and the version impossible to update",
    href:"abcde",
  },
  {
    articleTitle:
      "React-Native and the version impossible to update",
    href:"abcde",
  },
  {
    articleTitle:
      "The version impossible to update",
    href:"abcde",
  },
  {
    articleTitle:
      "Install package in React-Native and",
    href:"abcde",
  },
  {
    articleTitle:
      "Guide to code Swift-UI",
    href:"abcde",
  },
]