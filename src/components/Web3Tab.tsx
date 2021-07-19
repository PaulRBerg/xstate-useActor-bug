import { ReactElement, useCallback, useMemo } from "react";
import styled from "styled-components";

import { shortenAddress } from "../helpers/shortenAddress";
import Identicon from "./Identicon";

const borderRadiusSize: string = "1.25rem";

const OuterWrapper = styled.div`
  ${props => props.theme.snippets.borderAliceBlue};
  ${props => props.theme.snippets.flexRowNoWrap};
  align-items: center;
  border-radius: ${borderRadiusSize};
  font-size: 0.875rem;

  ${props => props.theme.mediaWidth.upToMedium`
    border: none;
  `};
`;

const InnerWrapper = styled.div`
  ${props => props.theme.snippets.flexRowNoWrap};
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${borderRadiusSize};
  cursor: pointer;
  font-weight: 400;
  height: 2.5rem;
  justify-content: center;
  min-width: 8.5rem;
  padding: 0.5rem;
  transition: background-color 200ms ease;
  user-select: none;

  &:active,
  &:hover {
    background-color: ${props => props.theme.colors.ghost};
  }

  ${props => props.theme.mediaWidth.upToMedium`
    background-color: ${props.theme.colors.ghost};
    border: 1px solid ${props.theme.colors.aliceBlue};
    margin: 0rem 0.375rem;
    min-width: 0;
    padding: 0rem;
    width: auto;

    &:active,
    &:hover {
      background-color: ${props.theme.colors.white};
    }
  `};
`;

const StatusLabel = styled.span`
  color: ${props => props.theme.colors.darkGunmetalBlack};
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface Web3TabProps {
  account: string;
}

function Web3Tab({ account }: Web3TabProps): ReactElement {
  const shortenedAccount = useMemo((): string => {
    return shortenAddress(account);
  }, [account, shortenAddress]);

  const onClickWeb3Button = useCallback(() => {
    console.log("Hello World");
  }, []);

  return (
    <OuterWrapper onClick={() => onClickWeb3Button}>
      <InnerWrapper>
        <Identicon account={account} />
        <StatusLabel>{shortenedAccount}</StatusLabel>
      </InnerWrapper>
    </OuterWrapper>
  );
}

export default Web3Tab;
