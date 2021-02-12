import React from "react";

function Petition(props) {
  const petition = props.location.state.petition;
  const petitionId = petition.petitionId;
  const petitionTitle = petition.petitionTitle;
  return (
    <div>
      {petitionId}
      {petitionTitle}
    </div>
  );
}

export default Petition;
