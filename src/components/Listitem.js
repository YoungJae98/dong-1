import React from "react";
import styled from "styled-components";

const StyledListitem = styled.li`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

function Listitem({ label, marginTop, marginBottom, marginLeft, marginRight }) {
  return (
    <StyledListitem
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {label}
    </StyledListitem>
  );
}

export default Listitem;
