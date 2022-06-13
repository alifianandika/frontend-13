import styled from "styled-components";


const StyledNav = styled.div`background-color: #4361ee;
    padding: 1rem;
    color: #fff;
    

.navbar {
  display: flex;
  flex-direction: column;
}

.navbar__brand {
  font-size: 2.4rem;
  margin-bottom: 1rem;
}

.navbar__list {
  display: flex;
  flex-direction: column;
  list-style: none;
}

.navbar__item {
  margin-bottom: 1rem;
}

.navbar__link {
  text-decoration: none;
  color: #fff;
}

/* Medium Screen */
@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .navbar__brand {
    margin-bottom: 0;
  }

  .navbar__list {
    flex-direction: row;
  }

  .navbar__item {
    margin: 0 1rem;
  }
}

/* Large Screen */
@media (min-width: 992px) {
  /* 
   * Nothing TODO HERE.
   * We haven't styling Navbar.
   */
}

    
    
    
    `

export default StyledNav;