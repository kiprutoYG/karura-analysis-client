export function Sidebar({ children, className }) {
    return (
      <div className={`h-full shadow-lg ${className}`}>
        {children}
      </div>
    );
  }
  
  export function SidebarItem({ children }) {
    return (
      <p className="text-sm md:text-lg p-2">
        {children}
      </p>
    );
  }
  