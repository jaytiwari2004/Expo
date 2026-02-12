export default function Button({ children, variant = "primary", onClick }) {
    const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl",
        secondary: "bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-black shadow-lg hover:shadow-xl",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
