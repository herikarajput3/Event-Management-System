const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-base-content/60 flex justify-between">
        <p>© {new Date().getFullYear()} EventHub</p>
        <p>Built with care ✨</p>
      </div>
    </footer>
  );
};

export default Footer;
