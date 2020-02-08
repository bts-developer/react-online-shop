import React from "react";
import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";
import {withRouter} from 'react-router-dom';

const HomePage = ({history}) => (
  <div className="homepage">
    <Directory/>
  </div>
);

export default withRouter(HomePage);
