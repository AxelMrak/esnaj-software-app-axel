import React from 'react';
import { CloseMenuIcon, MenuIcon } from '../Icons/UI';

function MenuToggle({ isMenuOpen, setIsMenuOpen }) {
	return (
		<div className="w-max md:hidden flex flex-row items-center gap-4 cursor-pointer">
			{isMenuOpen ? (
				<CloseMenuIcon
					className="w-16 h-16 fill-gray-light hover:fill-gray-dark"
					onClick={() => setIsMenuOpen(false)}
				/>
			) : (
				<MenuIcon
					className="w-16 h-16 fill-gray-light hover:fill-gray-dark"
					onClick={() => setIsMenuOpen(true)}
				/>
			)}
		</div>
	);
}

export default MenuToggle;
