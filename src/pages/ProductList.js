import React from 'react'
import NavBar from '../components/NavBar'
import styled from "styled-components";
import  Announcement  from "../components/Announcements"
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import Products from '../components/Products';
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

export default function ProductList() {
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>
                    color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                <Option  selected> Newset</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer />
    </Container>
  )
}
