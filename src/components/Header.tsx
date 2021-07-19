import { useActor } from "@xstate/react";
import { ReactElement, useContext } from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { Web3StateContext } from "../contexts/Web3StateContext";
import Web3Tab from "./Web3Tab";

const OuterWrapper = styled.div`
  ${props => props.theme.snippets.flexRowNoWrap};
  background-color: ${props => props.theme.colors.white};
  border-color: ${props => props.theme.colors.aliceBlue};
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  height: 4.5rem;
  justify-content: center;
  left: 0rem;
  top: 0rem;
  width: 100%;
  z-index: 300;
`;

const InnerWrapper = styled.div`
  ${props => props.theme.snippets.flexRowNoWrap};
  align-items: center;
  flex-grow: 1;
  height: 4.5rem;
  justify-content: flex-start;
  max-width: 1264px;
  padding: 0rem 2rem;

  ${props => props.theme.mediaWidth.upToMedium`
    padding: 0rem 0.5rem;
  `};
`;

const LeftSideWrapper = styled.div`
  ${props => props.theme.snippets.flexRowNoWrap}
  align-items: center;
  margin: auto;
  margin-left: 0rem;
`;

const StyledLogo = styled(Logo)`
  align-items: center;
  display: flex;
  height: 4rem;
  object-fit: contain;
  width: 10rem;

  ${props => props.theme.mediaWidth.upToMedium`
    height: 3.25rem;
    padding: 0rem 0.5rem;
    width: 8rem;
  `}
`;

const IndicatorWrapper = styled.div`
  ${props => props.theme.snippets.flexRowNoWrap};
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.aliceBlue};
  border-radius: 0.2rem;
  margin-left: 0.6rem;
  margin-top: 0.25rem;
  padding: 0.2rem 0.4rem;
  ${props => props.theme.mediaWidth.upToMedium`
    display:none;
  `}
`;

const IndicatorLabel = styled.p`
  color: ${props => props.theme.colors.darkGunmetalBlack};
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0rem;
`;

const RightSideWrapper = styled.div`
  ${props => props.theme.snippets.flexRowNoWrap}
  align-items: center;
  margin: auto;
  margin-right: 0rem;
`;

function Header(): ReactElement {
  const web3StateServices = useContext(Web3StateContext);

  const [walletState] = useActor(web3StateServices.walletService);
  console.log({ walletState });

  return (
    <OuterWrapper>
      <InnerWrapper>
        <LeftSideWrapper>
          <StyledLogo />
          <IndicatorWrapper>
            <IndicatorLabel>Migrator</IndicatorLabel>
          </IndicatorWrapper>
        </LeftSideWrapper>
        <RightSideWrapper>
          <Web3Tab account="0x4bcb303609F19e71Ab82A3A3393c46BfEa1e44Fc" />
        </RightSideWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}

export default Header;
