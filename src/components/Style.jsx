import React from 'react';
import styled, { keyframes } from "styled-components";

const Style = () => {
    return (
        <div>
            <Box>{/* 디자인을 하기 위한 컴포넌트 */}
                <Title fontSize='2rem' color='#d39'>스타일드 컴포넌트</Title>
                <Title fontSize='1.5rem' color='#396'>CSS IN JS</Title>
                <Title color='#ee7124'>Fun and Easy</Title>
                <Btn color='blue' active> normal </Btn>
                <Btn color='lightgray'> disabled </Btn>
                <Btn color='orange'> active </Btn>
                <Text fontSize='20px' color='pink'>2022년 6월 20일</Text>
                <Text fontSize='16px' color='brown'>월요일</Text>
                <Text fontSize='24px' color='darkblue'>오전 10시 13분</Text>
            </Box>
            <Box as='ul'>
                <Text size='16px' color='#f59' as='li'>menu1</Text>
                <Text size='16px' color='#f59' as='li'>menu2</Text>
                <Text size='16px' color='#f59' as='li'>menu3</Text>
            </Box>
            <Box>
                <AniBtn>애니메이션 버튼</AniBtn>
            </Box>
        </div>
    );
};

export default Style;

// 핵심기능!
const Btn = styled.button.attrs(props => ({
    type:'button',
    className:props.active ? 'on' : undefined // props에 active가 있다면 on 붙이기~
}))`
    width:80px;
    height:40px;
    color:${(props) => props.color};
    border: solid 2px ${(props) => props.color};
    border-radius:10px;
    margin:1rem;
`

const Box = styled.div`  /* .뒤에 어떤 태그로 스타일할건지 적기 */
    width:500px;
    height:400px;
    border:5px solid red;
    margin:3rem auto;
    text-align:center;
` 
// props 사용
const Title = styled.h2`
    font-size:${(props) => props.fontSize};
    color:${(props) => props.color};
    margin:1rem 0;
`

const Text = styled.p`
    font-size:${(props) => props.fontSize};
    color:${(props) => props.color};
    margin : 1rem;
`

const colorChange = keyframes`
    0%{background-color:red;}
    100%{background-color:yellow;}
`

/* 확장시키고 애니메이션 적용 */
const AniBtn = styled(Btn)`
    width:400px;
    animation:${colorChange} 1.5s alternate infinite;
`

/* 
1. as 사용 //<Box as='ul'>
2. props 사용
3. attrs 사용
4. 확장
5. 애니메이션 적용
6. 글로벌 styled 적용

css
scss
module.css
styled components
css in js
*/