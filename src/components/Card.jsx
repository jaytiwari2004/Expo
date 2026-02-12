export default function Card({ title, description, children }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700">
            {title && (
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {title}
                </h3>
            )}
            {description && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {description}
                </p>
            )}
            {children}
        </div>
    );
}
