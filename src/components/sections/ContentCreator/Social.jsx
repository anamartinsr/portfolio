export default function Social({ socialLinks }) {
  return (
    <div className="flex space-x-6 justify-center mt-10">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
        >
          <span className="sr-only">{link.name}</span>
          <link.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
