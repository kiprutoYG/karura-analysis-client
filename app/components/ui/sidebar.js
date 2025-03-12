export function Sidebar({ children, className }) {
    return (
      <div className={`h-screen p-4 shadow-lg ${className}`}>
        {children}
      </div>
    );
  }
  
  export function SidebarItem({ children, onClick }) {
    return (
      <button
        className="block w-full text-left p-2 rounded-md hover:bg-green-600"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  