import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  background-color: #3c4556;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 60px);
`
export const Container = styled.main`
  max-width: 1200px;
`

export const Article = styled.article`
  margin: 10px 0;
  width: 100%;
  max-width: 880px;
  min-width: 380px;
  border: 1px solid #e7503b8a;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
`

export const Subtitle = styled.h2`
  font-family: 'Mono-Bold';
  color: white;
  font-size: 20px;
  width: 100%;
  margin-top: 14px;
  padding: 0 8px;
`
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const Data = styled.p`
  font-family: 'Mono-Regular';
  color: #8be9fd;
  font-size: 20px;
  text-align: right;
  margin-right: 15px;
`

export const Image = styled.img`
  width: 200px;
  height: 100%;
`
