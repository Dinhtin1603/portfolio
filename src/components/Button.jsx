

function Button({ children, onClick, type = "button" }) {
    return (
      <button type={type} onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 font-medium">
        {children}
      </button>
    );
  }

export default Button;