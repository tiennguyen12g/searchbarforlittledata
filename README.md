# Search Bar For Little Data

### Document
This librady for me

### Declare props
```bash
interface DataSearchProps {
  iconArticle?: string,
  articleTitle: string,
  href: string,
}
```
```bash
interface SearchBarProps {
  searchBarStyles?: CSSProperties,
  tooltipStyles?:CSSProperties,
  tooltipContentStyles?: CSSProperties,
  inputSearchStyles?:CSSProperties,
  searchIconStyles?:CSSProperties,

  dataSearch: DataSearchProps[];
  inputPlaceholder?: string;
}
```

```bash
interface SearchResultProps{
  articleTitle:string,
  href: string
}
```