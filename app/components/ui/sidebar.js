export function Sidebar({ children, className }) {
    return (
      <div className={`h-screen p-4 shadow-lg ${className}`}>
        {children}
      </div>
    );
  }
  
  export function SidebarItem({ children }) {
    return (
      <p>
        {children}
      </p>
    );
  }
  