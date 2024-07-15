import * as React from 'react';

export const CloseMenuIcon = (props) => (
	<svg
		clipRule="evenodd"
		fillRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit={2}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
        fill={props.color}
		{...props}
	>
		<path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
	</svg>
);

export const MenuIcon = (props) => (
	<svg
		clipRule="evenodd"
		fillRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit={2}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
        fill={props.color}
        
		{...props}
	>
		<path
			d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
			fillRule="nonzero"
		/>
	</svg>
);

export const ArrowIcon = (props) => (

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
    <path
      style={{
        fill: props.color,
      }}
      d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
    />
  </svg>
);

export const LinkedInIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		{...props}
	>
		<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
	</svg>
);
