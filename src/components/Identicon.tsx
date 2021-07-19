import Jazzicon from "@metamask/jazzicon";
import { ReactElement, useEffect, useRef } from "react";
import styled from "styled-components/macro";

const StyledIdenticonContainer = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: ${props => props.theme.colors.background};
`;

interface IdenticonProps {
  account: string;
}

function Identicon({ account }: IdenticonProps): ReactElement {
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)));
    }
  }, [account]);

  return <StyledIdenticonContainer ref={ref} />;
}

export default Identicon;
