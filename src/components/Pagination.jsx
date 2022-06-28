import React from 'react';
import styled from 'styled-components';


const Pagination = ({total,page,setPage,LIST_PER_PAGE}) => {
    const PagesNum = Math.ceil(total/LIST_PER_PAGE); //Math.ceil : 올림 / total/LIST_PER_PAGE : lists.length/10
    const PagesNumArray = new Array(PagesNum);
    //console.log(PagesNumArray);
    //PagesNumArray.fill
    return (
        <PaginationBox>
            <PrevButton onClick={()=>{setPage(page-1)}} disabled={page===1}>
                이전
            </PrevButton>
            {
                PagesNumArray.fill().map((ele,i)=>{
                    return(
                        <PageNumButton
                        key={i+1}
                        onClick={()=>{setPage(i+1)}}
                        className={page===i+1 ? 'active' : null}
                        >
                            {i+1}
                        </PageNumButton>
                    )
                })
            }
            <NextButton onClick={()=>{setPage(page+1)}} disabled={page===PagesNum}>
                이후
            </NextButton>
        </PaginationBox>
    );
};

export default Pagination;

const PaginationBox = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    margin: 1rem auto;
    width: 1000px;
    text-align: center;
`
const PrevButton = styled.button`
    border-radius: 0.25rem;
    padding: 0.25rem 0.375rem;
    color: #fff;
    width: 40px;
    height: 24px;
    background-color: #cda8a8;
    font-size: 0.75rem;
    &:hover{
        cursor: pointer;
        color: #f23;
    }
    &[disabled]{
        background: #e0e0e0;
        color: #fff;
    }
    &.active{
    font-weight: bold;
    color:#f93;
    text-decoration:underline;
    }
`
const NextButton = styled(PrevButton)`

`
const PageNumButton = styled(PrevButton)`
    background: none;
    color: #767171;
    font-size: 1rem;
`