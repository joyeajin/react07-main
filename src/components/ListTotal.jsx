import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import Pagination from './Pagination';

const ListTotal = () => {
    const [lists,setLists] = useState([]);
    const LIST_PER_PAGE = 10; //한 장에 보여질 리스트 갯수
    const [page,setPage] = useState(1); //1페이지부터 시작
    const startNum = (page-1) * LIST_PER_PAGE; //0 10 20 30 
    const endNum = startNum + LIST_PER_PAGE; //10 20 30 40

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>setLists(data))
    },[])
    console.log(lists)
    return (
        <div>
            <Title>게시물 목록</Title>
            <Ul>
                {
                    [...lists].reverse().slice(startNum,endNum).map(({id,title,body})=>{
                        return(
                            <Li>
                                <span className='idName'>{id}</span> 
                                <span className='listBody'>{body}</span>
                            </Li>
                        )
                    })
                    
                }
            </Ul>
            <Pagination total={lists.length} page={page} setPage={setPage} LIST_PER_PAGE={LIST_PER_PAGE}/>
        </div>
    );
};

export default ListTotal;

const Title = styled.h1`
    font-size:1.5rem;
    text-align:center;
    margin-top:2rem;
    color:#b66666;
`

const Ul = styled.ul`
    font-size:0.875rem;
    margin:3rem auto;
    width:1000px;
`

const Li = styled.li`
    padding:0.5rem 1rem;
    border-bottom:1px solid #ccc;
    display:flex;
    &>.idName{
        width:4rem;
        color:#333;
    }
    &>.listBody{
        margin-left: 1.5rem;
        width:50rem;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        color:#666;
        text-align:left;
    }
    &>.listBody:hover{
        color:#000;
    }
    &:hover{
        background:rgba(0,0,0,.1);
        cursor:pointer;
    }
`