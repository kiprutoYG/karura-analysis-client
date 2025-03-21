export function Sidebar({ children, className }) {
    return (
      <div className={`h-full shadow-lg ${className}`}>
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
  