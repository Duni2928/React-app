import c from './Paginator.module.css'

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize)
  let pageSlice = props.pageSlice
  let curPage = props.currentPage
  let curPageFirst = (curPage <= pageSlice) ? 0 : curPage - pageSlice
  let curPageLast = curPage + pageSlice - 1
  let pages = []
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i)
  }
  let slidedPage = pages.slice(curPageFirst, curPageLast)
  return <div>
    {curPage > pageSlice && <span>prev</span>}
    <ul className={c.pagination}>
      {slidedPage.map(p => {
        return <li className={props.currentPage === p ? c.selectedPage : c.page}
          onClick={() => { props.pageChanged(p) }}>{p}</li>
      })}
    </ul>
    {curPage < pagesCount - pageSlice && <span>next</span>}
  </div>
}

export default Paginator