export function Card({ children, className }) {
    return (
      <div className={`p-4 rounded-xl shadow-md ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return <div className="text-white">{children}</div>;
  }
  