export interface TSidebarContext {
	openedSidebar?: boolean;
	toggle: () => void;
}

export interface TSidebarProps {
	children?: ReactElement;
}
