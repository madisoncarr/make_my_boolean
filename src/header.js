import React from "react";
import "./styles/header.css";
<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400');
</style>;

const TitleInfo = () => {
  return (
    <div>
      <h1 className="title-name">Make My Boolean</h1>
      <h3 className="gen-description">
        Generate a quick Boolean search in seconds
      </h3>
    </div>
  );
};

export default TitleInfo;
