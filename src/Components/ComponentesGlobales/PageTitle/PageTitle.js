import React, { Fragment } from 'react';


const PageTitle = ( props ) => {

  return(
    <Fragment>
         <h5>{props.title}</h5>
    </Fragment>
  );
}

export default PageTitle;
