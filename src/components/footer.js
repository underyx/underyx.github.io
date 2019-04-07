import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
`

const FooterContent = styled.div`
  flex: auto;
  display: inline-block;
  font-size: 0.8rem;
  text-align: ${props => props.side};
`

const Footer = () => (
  <>
    <StyledFooter>
      <FooterContent side="left">
        <div>Bence Nagy (underyx)</div>
        <div>
          Software Platform Lead @ <a href="https://code.kiwi.com/">Kiwi.com</a>
        </div>
        <div>
          <a href="https://goo.gl/maps/FGajx5oh2N42">Brno, Czechia</a>
        </div>
      </FooterContent>

      <FooterContent side="right">
        <div>
          <a href="mailto:bence@underyx.me">bence@underyx.me</a>
        </div>
        <div>
          <a href="tel:+420-725-511-793">+420&nbsp;725&nbsp;511&nbsp;793</a>
        </div>
        <div>
          underyx on <a href="ircs://irc.freenode.net">Freenode</a>
        </div>
      </FooterContent>
    </StyledFooter>
  </>
)

export default Footer
