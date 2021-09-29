import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import imgBack from "../img/back.png";
import { mobile } from "../responsive";

const Container = styled.div`
  ${"" /* height: 60px; */}
  height: max-height;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 900;
  font-size: 55px;
  background: #f2a154;
  color: transparent;
  -webkit-text-stroke: 1px #000;
  background-image: url(${imgBack});
  -webkit-background-clip: text;
  background-position: center;
  animation: back 30s linear infinite;

  @keyframes back {
    100% {
      background-position: 2000px 0;
    }
  }
  ${mobile({ fontSize: "24px" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "space-around" })}
`;

const MenuItem = styled.ul`
  list-style: none;
`;

const MenuItemList = styled.li`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  display: inline-block;
  position: relative;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const MenuItemLink = styled.a`
  color: #000;
  text-decoration: none;

  &::after {
    content: "";
    width: 0;
    height: 3px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    background: #314e52;
    transform: translateX(-50%);
    transition: width 0.3s;
  }

  &:hover::after {
    width: 50%;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>BB GOLD</Logo>
        </Center>

        <Right>
          <MenuItem>
            <MenuItemList>
              <MenuItemLink>REGISTER</MenuItemLink>
            </MenuItemList>
            <MenuItemList>
              <MenuItemLink>SIGN IN</MenuItemLink>
            </MenuItemList>
            <MenuItemList>
              <Badge badgeContent={4} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItemList>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
