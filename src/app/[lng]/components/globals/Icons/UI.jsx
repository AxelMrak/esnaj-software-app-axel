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
