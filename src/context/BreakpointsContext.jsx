'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const BreakpointsContext = createContext();

export const BreakpointsProvider = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
	const isDesktop = useMediaQuery({ minWidth: 1025 });

	const value = {
		isMobile,
		isTablet,
		isDesktop,
	};

	return (
		<BreakpointsContext.Provider value={value}>
			{children}
		</BreakpointsContext.Provider>
	);
};

export const useBreakpoints = () => {
	return useContext(BreakpointsContext);
};
