import React from 'react';
import {Link} from 'react-router-dom';

export const Menu = () => {
  return (
	<div>
	  <nav>
		<Link to="/homework1"><li>Homework1</li></Link>
		<Link to="/homework2"><li>Homework2</li></Link>
		<Link to="/homework3"><li>Homework3</li></Link>
		<Link to="/homework4"><li>Homework4</li></Link>
		<Link to="/homework5"><li>Homework5</li></Link>
	  </nav>
	</div>
  );
};

