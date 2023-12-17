# Search Bar For Little Data

### Document
This librady for me

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