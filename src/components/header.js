import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  max-width: calc(1325px + (1.0875rem * 2));
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
    width: fit-content;
  }
`

const Nav = styled.nav`
  width: 40%;
  max-width: 400px;

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 0.5rem;
    align-items: center;
    margin: 0;
  }
`

const Li = styled.li`
  list-style: none;
  margin: 0;
  justify-self: flex-end;
`

const StyledLink = styled(Link)`
  color: #fffafa;
  text-decoration: none;
  text-shadow: 1px 1px #424C56;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `darkseagreen`,
      marginBottom: `1.45rem`,
    }}
  >
    <Container>
      <h1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </h1>

      <Nav>
        <ul>
          <Li>
            <StyledLink to="/border-radius">Border Radius</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/linear-gradient">Linear Gradient</StyledLink>
          </Li>
        </ul>
      </Nav>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
