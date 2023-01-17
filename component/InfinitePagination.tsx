import axios from 'axios';
import React, { Fragment, useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInView } from 'react-intersection-observer'

const InfinitePagination = () => {
    const {ref,inView} = useInView();
    // const InfiniteUsers = async({ pageParam = 1 }) =>{
    //     return await axios.get('http://localhost:4000/users?cursor=' + pageParam);
        
    // }

    const {status,
        data,
        error,
        isFetching,
        isFetchingNextPage,
        isFetchingPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,} =useInfiniteQuery(["user-infinite"],async ({ pageParam = 1 }) => {
        const res = await axios.get('http://localhost:4000/users?cursor=' + pageParam)
        return res.data
      },{
        getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
        getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
      },)
      useEffect(() => {
        if (inView) {
          fetchNextPage()
        }
      }, [inView])
      console.log("infinite user",data);
  return (
    <>
    <div>
            <button
              onClick={() => fetchPreviousPage()}
              disabled={!hasPreviousPage || isFetchingPreviousPage}
            >
              {isFetchingPreviousPage
                ? 'Loading more...'
                : hasPreviousPage
                ? 'Load Older'
                : 'Nothing more to load'}
            </button>
          </div>
    {
        data?.pages.map((page,i)=>{
            return(
                <Fragment key={i}>
                    {
                        page.map((user:any,index:number)=>{
                            return(
                                <h2 key={index}>{user.name}</h2>
                            )
                        })
                    }
                </Fragment>
            )
        })
    }
    <div>
            <button
              ref={ref}
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load Newer'
                : 'Nothing more to load'}
            </button>
          </div>
          <div>
            {isFetching && !isFetchingNextPage
              ? 'Background Updating...'
              : null}
          </div>
    
    </>
    
  )
}

export default InfinitePagination
